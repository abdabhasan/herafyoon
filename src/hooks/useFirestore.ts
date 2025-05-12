import { useEffect, useState } from "react";
import { fetchPracts } from "@/firebase/firestoreService";

export const useFirestore = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchPracts();
                setData(result);
            } catch (err) {
                setError(err as Error);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
