import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CustomText } from "@/components/CustomText";

interface AutocompleteListProps {
  results: { label: string; value: string }[];
  onSelect: (item: { label: string; value: string }) => void;
}

const AutocompleteList: React.FC<AutocompleteListProps> = ({
  results,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {results.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={styles.item}
          onPress={() => onSelect(item)}
        >
          <CustomText text={item.label} type="defaultDark" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
});

export default AutocompleteList;
