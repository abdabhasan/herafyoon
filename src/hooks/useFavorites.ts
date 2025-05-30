import { useState, useEffect } from "react";
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import Toast from "react-native-toast-message";
import { useAuth } from "./useAuth";
import { TranslationKeys } from "@/i18n/translationKeys";
import { useTranslation } from "react-i18next";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const db = getFirestore();
    const { user, userInfo } = useAuth();
    const { t } = useTranslation();


    useEffect(() => {
        const fetchFavorites = async () => {
            if (user) {
                setFavorites(userInfo?.favorites || []);
            }
        };
        fetchFavorites();
    }, [userInfo?.favorites]);

    const toggleFavorite = async (practitionerId: string) => {

        if (!user) {
            Toast.show({
                type: "info",
                text1: t(TranslationKeys.cards.practCard.favorites.notSignin),
                text2: t(TranslationKeys.cards.practCard.favorites.onlySigninUsers),
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
                text1: t(TranslationKeys.cards.practCard.favorites.error),
                text2: t(TranslationKeys.cards.practCard.favorites.errorMessage),
            });
        }
    };



    return { favorites, toggleFavorite };
};

export default useFavorites;
