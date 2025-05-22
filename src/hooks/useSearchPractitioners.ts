import { useCallback, useState } from "react";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { useFirestore } from "@/hooks/useFirestore";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";



export const useSearchPractitioners = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [autocompleteResults, setAutocompleteResults] = useState<{ label: string; value: string }[]>([]);
    const { fetchPractitionersByFilters, filteredPractitioners } = useFirestore();
    const [isSearchByFilters, setIsSearchByFilters] = useState<boolean>(false);

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

        fetchPractitionersByFilters(undefined, undefined, undefined, item.value);
    };


    const onSubmitFilters = (data: any) => {
        const { country, city, neighbourhood, workType } = data;
        setIsSearchByFilters(false);
        fetchPractitionersByFilters(country, city, neighbourhood, workType);
    };

    const toggleFiltersModal = () => {
        setIsSearchByFilters(!isSearchByFilters)
    }

    return {
        searchQuery,
        autocompleteResults,
        handleSearchChange,
        handleSelectAutocomplete,
        filteredPractitioners,
        onSubmitFilters,
        isSearchByFilters,
        toggleFiltersModal
    };
};
