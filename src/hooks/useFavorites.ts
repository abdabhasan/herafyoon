import { useState, useEffect } from "react";
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import Toast from "react-native-toast-message";
import { useAuth } from "./useAuth";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const db = getFirestore();
    const { user, userInfo } = useAuth();


    useEffect(() => {
        const fetchFavorites = async () => {
            if (user) {
                setFavorites(userInfo.favorites || []);
            }
        };
        fetchFavorites();
    }, [userInfo?.favorites]);

    const toggleFavorite = async (practitionerId: string) => {

        if (!user) {
            Toast.show({
                type: "info",
                text1: "Not Signed In",
                text2: "Only signed-in users can add favorites.",
            });
            return;
        }

        const userDoc = doc(db, "normal-users", user.uid);
        const isFavorite = favorites.includes(practitionerId);

        try {
            if (isFavorite) {
                await updateDoc(userDoc, {
                    favorites: arrayRemove(practitionerId),
                });
                setFavorites((prev) => prev.filter((id) => id !== practitionerId));
            } else {
                await updateDoc(userDoc, {
                    favorites: arrayUnion(practitionerId),
                });
                setFavorites((prev) => [...prev, practitionerId]);
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Something went wrong while updating favorites.",
            });
        }
    };



    return { favorites, toggleFavorite };
};

export default useFavorites;
