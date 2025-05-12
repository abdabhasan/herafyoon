import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
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
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PractCard
              firstName={item.firstName}
              lastName={item.lastName}
              workType={item.workType}
              country={item.country}
              city={item.city}
              neighbourhood={item.neighbourhood}
              phoneNumber={item.phoneNumber}
            />
          )}
        />
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
  },
});

export default PractCardsContainer;
