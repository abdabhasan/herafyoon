import React from "react";
import { View, StyleSheet } from "react-native";
import PractCard from "@/components/cards/PractCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomText } from "@/components/CustomText";
import { useFirestore } from "@/hooks/useFirestore";

const PractCardsContainer: React.FC = () => {
  const { practitioners, loadingPractitioners, errorPractitioners } =
    useFirestore();

  if (loadingPractitioners) {
    return <LoadingSpinner />;
  }

  if (errorPractitioners) {
    return (
      <CustomText
        text="Error loading data. Please try again."
        type="defaultDark"
      />
    );
  }

  return (
    <View style={styles.container}>
      {practitioners.length > 0 ? (
        practitioners.map((pract) => (
          <PractCard
            key={pract.id}
            id={pract.id}
            firstName={pract.firstName}
            lastName={pract.lastName}
            workType={pract.workType}
            country={pract.country}
            city={pract.city}
            neighbourhood={pract.neighbourhood}
            phoneNumber={pract.phoneNumber}
          />
        ))
      ) : (
        <CustomText text="No Practitioners available." type="defaultDark" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
});

export default PractCardsContainer;
