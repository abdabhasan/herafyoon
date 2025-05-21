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
  } = useSearchPractitioners();

  const country = useWatch({
    control,
    name: "country",
  });

  const onSubmit = (data: any) => {
    const { country, city, neighbourhood, workType } = data;
    fetchPractitionersByFilters(country, city, neighbourhood, workType);
  };

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
        <View style={styles.listContainer}>
          <CustomText
            text="search_page.results"
            type="primarySubtitle"
            style={{
              alignSelf: isRTL ? "flex-end" : "flex-start",
            }}
          />
          {filteredPractitioners.map((item) => (
            <PractCard
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              workType={item.workType}
              city={item.city}
              neighbourhood={item.neighbourhood}
              phoneNumber={item.phoneNumber}
            />
          ))}
        </View>
      )}
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
  filtersText: {
    marginStart: 16,
    marginBottom: 20,
  },
});

export default SearchPageContainer;
