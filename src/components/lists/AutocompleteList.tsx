import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CustomText } from "@/components/CustomText";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

interface AutocompleteListProps {
  results: { label: string; value: string }[];
  onSelect: (item: { label: string; value: string }) => void;
}

const AutocompleteList: React.FC<AutocompleteListProps> = ({
  results,
  onSelect,
}) => {
  const inputBackgroundColor = useThemeColor({}, "practCardBacgroundColor");

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: inputBackgroundColor,
        },
      ]}
    >
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
