import React from "react";
import { View, StyleSheet } from "react-native";
import PractCard from "@/components/cards/PractCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomText } from "@/components/CustomText";
import { useFirestore } from "@/hooks/useFirestore";

type Props = {};

const FeaturedPractCardsContainer = (props: Props) => {
  const {
    featuredPractitioners,
    loadingFeaturedPractitioners,
    errorFeaturedPractitioners,
  } = useFirestore();

  if (loadingFeaturedPractitioners) {
    return <LoadingSpinner />;
  }

  if (errorFeaturedPractitioners) {
    return (
      <CustomText
        text="Error loading data. Please try again."
        type="defaultDark"
      />
    );
  }

  return (
    <View style={styles.container}>
      {featuredPractitioners.length > 0 ? (
        featuredPractitioners.map((pract) => (
          <PractCard
            key={pract.id}
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
        <CustomText
          text="No Featured Practitioners available."
          type="defaultDark"
        />
      )}
    </View>
  );
};

export default FeaturedPractCardsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
});
