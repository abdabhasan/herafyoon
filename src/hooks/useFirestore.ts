import { useEffect, useState } from "react";
import { fetchAllPractitioners } from "@/firebase/firestoreService";

export const useFirestore = () => {
    const [practitioners, setPractitioners] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllPractitioners();
                setPractitioners(result);
            } catch (err) {
                setError(err as Error);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { practitioners, loading, error };
};
