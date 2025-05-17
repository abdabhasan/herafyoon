import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useFirestore } from "@/hooks/useFirestore";
import { CustomButton } from "@/components/Btns/CustomBtn";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { CustomText } from "@/components/CustomText";
import { useForm } from "react-hook-form";
import { LocationInputsContainer } from "../InputsContainers";
import CustomPicker from "@/components/inputs/CustomPicker";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import PractCard from "@/components/cards/PractCard";
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

  const {
    filteredPractitioners,
    fetchPractitionersByFilters,
    loadingFilteredPractitioners,
  } = useFirestore();

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const onSubmit = (data: any) => {
    const { country, city, neighbourhood, workType } = data;
    fetchPractitionersByFilters(country, city, neighbourhood, workType);
  };

  if (loadingFilteredPractitioners) {
    <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <>
        <CustomText
          text="search_page.filters"
          type="primarySubtitle"
          style={[
            styles.filtersText,
            {
              alignSelf: isRTL ? "flex-end" : "flex-start",
            },
          ]}
        />

        <LocationInputsContainer control={control} errors={errors} />
        <CustomPicker
          name="workType"
          control={control}
          label="signup_page.form.workType"
          elements={workTypePickerOptions}
          error={errors.workType ? errors.workType.message : null}
        />
      </>
      <CustomButton
        title="search_page.search"
        onPress={handleSubmit(onSubmit)}
        width="xl"
      />

      {loadingFilteredPractitioners && <LoadingSpinner />}

      {filteredPractitioners.length > 0 && (
        <View style={styles.listContainer}>
          <CustomText
            text="search_page.results"
            type="primarySubtitle"
            style={{
              alignSelf: isRTL ? "flex-end" : "flex-start",
            }}
          />
          <FlatList
            data={filteredPractitioners}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PractCard
                firstName={item.firstName}
                lastName={item.lastName}
                workType={item.workType}
                city={item.city}
                neighbourhood={item.neighbourhood}
                phoneNumber={item.phoneNumber}
              />
            )}
          />
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
