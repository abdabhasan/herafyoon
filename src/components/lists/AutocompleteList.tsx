import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/Colors";

interface AutocompleteListProps {
  results: { label: string; value: string }[];
  onSelect: (item: { label: string; value: string }) => void;
}

const AutocompleteList: React.FC<AutocompleteListProps> = ({
  results,
  onSelect,
}) => {
  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.value}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
          <CustomText text={item.label} type="defaultDark" />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomColor: Colors.primary.p500,
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
  },
});

export default AutocompleteList;
