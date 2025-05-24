import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import AutocompleteList from "@/components/lists/AutocompleteList";
import SearchBar from "@/components/inputs/SearchBar";

interface SearchBarWithResultsListContainerProps {
  query: string;
  onChange: (query: string) => void;
  autocompleteResults: { label: string; value: string }[];
  onSelect: (item: { label: string; value: string }) => void;
  onFocus:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  setHistoryVisible: (visible: boolean) => void;
}

const SearchBarWithResultsListContainer: React.FC<
  SearchBarWithResultsListContainerProps
> = ({
  query,
  onChange,
  autocompleteResults,
  onSelect,
  onBlur,
  onFocus,
  setHistoryVisible,
}) => {
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setHistoryVisible(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    blurTimeoutRef.current = setTimeout(() => {
      setHistoryVisible(false);
    }, 200); // Delay hiding the history list
    if (onBlur) onBlur(e);
  };

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        query={query}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <AutocompleteList results={autocompleteResults} onSelect={onSelect} />
    </View>
  );
};

export default SearchBarWithResultsListContainer;

const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
  },
});
