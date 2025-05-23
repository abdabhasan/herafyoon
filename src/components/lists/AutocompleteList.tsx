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
      {results.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={styles.item}
          onPress={() => onSelect(item)}
        >
          <CustomText text={item.label} type="defaultDark" />
        </TouchableOpacity>
      ))}
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
