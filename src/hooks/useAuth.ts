import { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { logoutUser } from "@/firebase/authService";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                try {
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

    const logout = async () => {
        setLoading(true)
        try {
            await logoutUser();
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {

            setLoading(false)
        }
    };

    return { user, userInfo, loading, logout };
};
