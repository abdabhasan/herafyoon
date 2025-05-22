import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <TextInput
      style={[
        styles.searchBar,
        {
          textAlign: isRTL ? "right" : "left",
        },
      ]}
      placeholder={t("search_page.type_to_search")}
      value={t(query)}
      onChangeText={onChange}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    backgroundColor: Colors.white,

    borderColor: Colors.primary.p500,
    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
