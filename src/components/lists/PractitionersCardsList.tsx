import PractCard from "@/components/cards/PractCard";
import { CustomText } from "@/components/CustomText";
import { PractitionerInfoCard } from "@/types";
import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  practitionersArray: PractitionerInfoCard[];
};

const PractitionersCardsList: React.FC<Props> = ({ practitionersArray }) => {
  return (
    <View style={styles.container}>
      {practitionersArray.length > 0 ? (
        practitionersArray.map((pract) => (
          <PractCard
            id={pract.id}
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
        <CustomText text="No Practitioners available." type="defaultDark" />
      )}
    </View>
  );
};
export default PractitionersCardsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
