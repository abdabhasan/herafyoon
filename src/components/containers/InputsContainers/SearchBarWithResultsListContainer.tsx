import React from "react";
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
}

const SearchBarWithResultsListContainer: React.FC<
  SearchBarWithResultsListContainerProps
> = ({ query, onChange, autocompleteResults, onSelect, onBlur, onFocus }) => {
  return (
    <View style={styles.searchContainer}>
      <SearchBar
        query={query}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
