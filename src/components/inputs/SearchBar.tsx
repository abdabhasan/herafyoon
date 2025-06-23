import React from "react";
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useLocalization } from "@/hooks/useLocalization";
import { TranslationKeys } from "@/i18n/translationKeys";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
  onFocus:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChange,
  onBlur,
  onFocus,
}) => {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();
  const inputBackgroundColor = useThemeColor({}, "practCardBacgroundColor");
  const inputBorderColor = useThemeColor({}, "practCardBorderColor");
  const textColor = useThemeColor({}, "text");

  return (
    <TextInput
      style={[
        styles.searchBar,
        {
          textAlign: isRTL ? "right" : "left",
          backgroundColor: inputBackgroundColor,
          borderColor: inputBorderColor,
          color: textColor,
        },
      ]}
      placeholder={t(TranslationKeys.searchPage.typeToSearch)}
      placeholderTextColor={textColor}
      value={t(query)}
      onChangeText={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 40,

    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
