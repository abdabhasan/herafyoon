import React from "react";
import { View, StyleSheet } from "react-native";
import { useFirestore } from "@/hooks/useFirestore";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { CustomText } from "@/components/CustomText";
import { useForm, useWatch } from "react-hook-form";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useSearchPractitioners } from "@/hooks/useSearchPractitioners";
import SearchBarWithResultsListContainer from "../InputsContainers/SearchBarWithResultsListContainer";
import FiltersModal from "@/components/modals/FiltersModal";
import PractitionersCardsList from "@/components/lists/PractitionersCardsList";
import WelcomeSVG from "@/assets/illustrations/search-page-welcome.svg";
import ResultsNotFoundSVG from "@/assets/illustrations/results-not-found.svg";
import PractitionersSearchHistory from "@/components/lists/PractitionersSearchHistory";
import { useTranslation } from "react-i18next";

const SearchPageContainer = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      neighbourhood: "",
      workType: "",
    },
  });

  const { loadingFilteredPractitioners } = useFirestore();

  const {
    searchQuery,
    autocompleteResults,
    handleSearchChange,
    handleSelectAutocomplete,
    filteredPractitioners,
    isSearchByFilters,
    onSubmitFilters,
    toggleFiltersModal,
    searchHistory,
    clearSearchHistory,
    fetchPractitionersByFilters,
  } = useSearchPractitioners();

  const [isHistoryVisible, setHistoryVisible] = React.useState(false);

  const { t } = useTranslation();

  const country = useWatch({
    control,
    name: "country",
  });

  const handleFocus = React.useCallback(() => {
    setHistoryVisible(true);
  }, []);

  if (loadingFilteredPractitioners) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <SearchBarWithResultsListContainer
        query={searchQuery}
        onChange={handleSearchChange}
        autocompleteResults={autocompleteResults}
        onSelect={handleSelectAutocomplete}
        onFocus={handleFocus}
        setHistoryVisible={setHistoryVisible}
      />
      {isHistoryVisible && !searchQuery && (
        <PractitionersSearchHistory
          history={searchHistory}
          onSelectHistory={(query) => {
            handleSearchChange(query);
            fetchPractitionersByFilters(
              undefined,
              undefined,
              undefined,
              t(query, { lng: "en" })
            );
            setHistoryVisible(false);
          }}
          onClearHistory={clearSearchHistory}
        />
      )}
      <View style={styles.resultTextContainer}>
        <CustomText text="search_page.results" type="primarySubtitle" />
        <CustomButton
          title="search_page.filters"
          onPress={() => toggleFiltersModal()}
          style={styles.filtersBtn}
          width="sm"
          height="tiny"
          alignSelf="flex-start"
        />
      </View>
      {country === "" && filteredPractitioners.length === 0 && (
        <View style={styles.emptyStateContainer}>
          <WelcomeSVG width={200} height={200} />

          <CustomText
            text="search_page.select_filters"
            type="defaultDark"
            style={styles.noResultsText}
          />
        </View>
      )}
      {country !== "" && filteredPractitioners.length === 0 && (
        <View style={styles.emptyStateContainer}>
          <ResultsNotFoundSVG width={200} height={200} />

          <CustomText
            text="search_page.no_founded_practs"
            type="defaultDark"
            style={styles.noResultsText}
          />
        </View>
      )}
      {filteredPractitioners.length > 0 && (
        <>
          <View style={styles.listContainer}>
            <PractitionersCardsList
              practitionersArray={filteredPractitioners}
            />
          </View>
        </>
      )}
      <FiltersModal
        visible={isSearchByFilters}
        onClose={() => toggleFiltersModal()}
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSubmitFilters)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  listContainer: {
    width: "100%",
    padding: 16,
    marginVertical: 8,
  },
  resultTextContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filtersBtn: {
    marginRight: -20,
  },
  noResultsText: {
    alignSelf: "center",
    marginTop: 16,
    textAlign: "center",
  },
});

export default SearchPageContainer;
