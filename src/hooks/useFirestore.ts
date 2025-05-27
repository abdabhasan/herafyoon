import { useEffect, useState } from "react";
import { fetchAllPractitioners, fetchFeaturedPractitioners, fetchFilteredPractitioners } from "@/firebase/firestoreService";
import { PractitionerInfoCard } from "@/types";

export const useFirestore = () => {
    const [practitioners, setPractitioners] = useState<any[]>([]);
    const [featuredPractitioners, setFeaturedPractitioners] = useState<PractitionerInfoCard[]>([]);
    const [loadingPractitioners, setLoadingPractitioners] = useState<boolean>(true);
    const [loadingFeaturedPractitioners, setLoadingFeaturedPractitioners] = useState<boolean>(true);
    const [errorPractitioners, setErrorPractitioners] = useState<Error | null>(null);
    const [errorFeaturedPractitioners, setErrorFeaturedPractitioners] = useState<Error | null>(null);

    const [filteredPractitioners, setFilteredPractitioners] = useState<PractitionerInfoCard[]>([]);
    const [loadingFilteredPractitioners, setLoadingFilteredPractitioners] = useState<boolean>(false);
    const [errorFilteredPractitioners, setErrorFilteredPractitioners] = useState<Error | null>(null);



    // Fetch all practitioners
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllPractitioners();
                setPractitioners(result);
            } catch (err) {
                setErrorPractitioners(err as Error);
                console.error("Error fetching data:", err);
            } finally {
                setLoadingPractitioners(false);
            }
        };

        fetchData();
    }, []);



    // Fetch featured practitioners
    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const result = await fetchFeaturedPractitioners();
                setFeaturedPractitioners(result);
            } catch (err) {
                setErrorFeaturedPractitioners(err as Error);
                console.error("Error fetching featured practitioners:", err);
            } finally {
                setLoadingFeaturedPractitioners(false);
            }
        };

        fetchFeatured();
    }, []);




    const fetchPractitionersByFilters = async (
        country?: string,
        city?: string,
        neighbourhood?: string,
        workType?: string
    ) => {
        setLoadingFilteredPractitioners(true);
        try {
            const result = await fetchFilteredPractitioners(country, city, neighbourhood, workType);
            setFilteredPractitioners(result);
        } catch (error) {
            setErrorFilteredPractitioners(error as Error);
            console.error("Error fetching filtered practitioners:", error);
        } finally {
            setLoadingFilteredPractitioners(false);
        }
    };


    return {
        practitioners,
        featuredPractitioners,
        loadingPractitioners,
        loadingFeaturedPractitioners,
        errorPractitioners,
        errorFeaturedPractitioners,
        filteredPractitioners,
        loadingFilteredPractitioners,
        errorFilteredPractitioners,
        fetchPractitionersByFilters,
    };
};
