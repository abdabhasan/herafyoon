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
          text="filters :"
          type="primarySubtitle"
          style={{ alignSelf: "flex-start", marginStart: 16, marginBottom: 20 }}
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
        title="Search"
        onPress={handleSubmit(onSubmit)}
        width="xl"
      />

      {loadingFilteredPractitioners && <LoadingSpinner />}

      {filteredPractitioners.length > 0 && (
        <View style={styles.listContainer}>
          <CustomText
            text="results :"
            type="primarySubtitle"
            style={{
              alignSelf: "flex-start",
              // marginStart: 16,
              // marginVertical: 20,
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
});

export default SearchPageContainer;
