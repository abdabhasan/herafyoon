import React from "react";
import { View, StyleSheet } from "react-native";
import PractCard from "@/components/cards/PractCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomText } from "@/components/CustomText";
import { useFirestore } from "@/hooks/useFirestore";

const PractCardsContainer: React.FC = () => {
  const { data: users, loading, error } = useFirestore();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <CustomText
        text="Error loading data. Please try again."
        type="defaultDark"
      />
    );
  }

  return (
    <View style={styles.container}>
      {users.length > 0 ? (
        users.map((user) => (
          <PractCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            workType={user.workType}
            country={user.country}
            city={user.city}
            neighbourhood={user.neighbourhood}
            phoneNumber={user.phoneNumber}
          />
        ))
      ) : (
        <CustomText text="No users available." type="defaultDark" />
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
