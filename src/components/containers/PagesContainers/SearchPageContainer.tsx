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
  } = useSearchPractitioners();

  const country = useWatch({
    control,
    name: "country",
  });

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
      />
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
        <>
          <WelcomeSVG />

          <CustomText
            text="search_page.select_filters"
            type="defaultDark"
            style={styles.noResultsText}
          />
        </>
      )}
      {country !== "" && filteredPractitioners.length === 0 && (
        <>
          <ResultsNotFoundSVG />

          <CustomText
            text="search_page.no_founded_practs"
            type="defaultDark"
            style={styles.noResultsText}
          />
        </>
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
    padding: 16,
    alignItems: "center",
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
    alignSelf: "flex-start",
    marginTop: 10,
  },
});

export default SearchPageContainer;
