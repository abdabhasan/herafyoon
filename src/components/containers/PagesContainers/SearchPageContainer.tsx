import React from "react";
import { View, StyleSheet } from "react-native";
import { useFirestore } from "@/hooks/useFirestore";
import { CustomButton } from "@/components/Btns/CustomBtn";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { CustomText } from "@/components/CustomText";
import { useForm, useWatch } from "react-hook-form";
import { LocationInputsContainer } from "../InputsContainers";
import CustomPicker from "@/components/inputs/CustomPicker";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useSearchPractitioners } from "@/hooks/useSearchPractitioners";
import SearchBarWithResultsListContainer from "../InputsContainers/SearchBarWithResultsListContainer";
import FiltersModal from "@/components/modals/FiltersModal";
import PractitionersCardsList from "@/components/lists/PractitionersCardsList";

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
    <LoadingSpinner />;
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
        <CustomText
          text="search_page.select_filters"
          type="defaultDark"
          style={{
            alignSelf: isRTL ? "flex-end" : "flex-start",
          }}
        />
      )}
      {country !== "" && filteredPractitioners.length === 0 && (
        <CustomText
          text="search_page.no_founded_practs"
          type="defaultDark"
          style={{
            alignSelf: isRTL ? "flex-end" : "flex-start",
          }}
        />
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
  },
});

export default SearchPageContainer;
