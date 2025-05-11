import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PractCard from "@/components/cards/PractCard";
import { fetchPracts } from "@/firebase/firestoreService";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomText } from "@/components/CustomText";

const PractCardsContainer: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchPracts();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
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
    padding: 16,
  },
});

export default PractCardsContainer;
