import { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                try {
                    // Fetch user data from Firestore
                    const userDocRef = doc(firestore, "users", currentUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setUserInfo(userDoc.data());
                    } else {
                        console.error("No user document found!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                setUserInfo(null);
            }

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return { user, userInfo, loading };
};
