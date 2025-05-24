import { useCallback, useState } from "react";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { useFirestore } from "@/hooks/useFirestore";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";



export const useSearchPractitioners = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [autocompleteResults, setAutocompleteResults] = useState<{ label: string; value: string }[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const { fetchPractitionersByFilters, filteredPractitioners } = useFirestore();
    const [isSearchByFilters, setIsSearchByFilters] = useState<boolean>(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const { t } = useTranslation();

    const debouncedFilterResults = useCallback(
        debounce((query: string) => {
            if (query.length >= 2) {
                const results = workTypePickerOptions.filter((option) =>
                    t(option.label).toLowerCase().includes(query.toLowerCase())
                );
                setAutocompleteResults(results);
            } else {
                setAutocompleteResults([]);
            }
        }, 500),
        []
    );

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        debouncedFilterResults(query);
    };

    const handleSelectAutocomplete = (item: { label: string; value: string }) => {
        setSearchQuery(item.label);
        setAutocompleteResults([]);
        updateSearchHistory(item.label);
        fetchPractitionersByFilters(undefined, undefined, undefined, item.value);
    };

    const updateSearchHistory = (query: string) => {
        setSearchHistory((prev) => {
            const updatedHistory = [query, ...prev.filter((item) => item !== query)];
            return updatedHistory.slice(0, 4); // Limit to 4 entries
        });
    };

    const clearSearchHistory = () => {
        setSearchHistory([]);
    };

    const onSubmitFilters = (data: any) => {
        const { country, city, neighbourhood, workType } = data;
        setIsSearchByFilters(false);
        fetchPractitionersByFilters(country, city, neighbourhood, workType);
    };

    const toggleFiltersModal = () => {
        setIsSearchByFilters(!isSearchByFilters);
    };

    return {
        searchQuery,
        autocompleteResults,
        searchHistory,
        clearSearchHistory,
        handleSearchChange,
        handleSelectAutocomplete,
        filteredPractitioners,
        onSubmitFilters,
        isSearchByFilters,
        toggleFiltersModal,
        isSearchFocused,
        setIsSearchFocused,
        fetchPractitionersByFilters

    };
};
