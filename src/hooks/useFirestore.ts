import { useEffect, useState } from "react";
import { fetchAllPractitioners, fetchFeaturedPractitioners } from "@/firebase/firestoreService";

export const useFirestore = () => {
    const [practitioners, setPractitioners] = useState<any[]>([]);
    const [featuredPractitioners, setFeaturedPractitioners] = useState<any[]>([]);
    const [loadingPractitioners, setLoadingPractitioners] = useState<boolean>(true);
    const [loadingFeaturedPractitioners, setLoadingFeaturedPractitioners] = useState<boolean>(true);
    const [errorPractitioners, setErrorPractitioners] = useState<Error | null>(null);
    const [errorFeaturedPractitioners, setErrorFeaturedPractitioners] = useState<Error | null>(null);

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

    return {
        practitioners,
        featuredPractitioners,
        loadingPractitioners,
        loadingFeaturedPractitioners,
        errorPractitioners,
        errorFeaturedPractitioners,
    };
};
