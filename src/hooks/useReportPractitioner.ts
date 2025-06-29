import { useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion, increment, setDoc } from "firebase/firestore";
import { firestore as db } from "@/firebase/config";
import Toast from "react-native-toast-message";
import { TranslationKeys } from "@/i18n/translationKeys";
import { useTranslation } from "react-i18next";
import { useAuth } from "./useAuth";

export const useReportPractitioner = (practitionerId?: string,) => {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { userInfo, user } = useAuth();
    const { t } = useTranslation();

    const userId = user?.uid!;

    const isNormalUser = userInfo?.userType === "normal-user";



    const openModal = () => {

        if (!userId || !isNormalUser) {
            console.log("if entered")

            Toast.show({
                type: "info",
                text1: t(!userId
                    ? TranslationKeys.reportPractitioner.signinToReport
                    : TranslationKeys.reportPractitioner.justUsersCanReportOne),
                text2: t(!userId
                    ? ""
                    : TranslationKeys.reportPractitioner.justUsersCanReportTwo),
                position: "top",
            });
            return;
        }

        setModalVisible(true);
    };


    const closeModal = () => {
        setModalVisible(false);
    };



    const reportPractitioner = async () => {


        setLoading(true);
        try {
            const reportRef = doc(db, "reports", practitionerId!);
            const practitionerRef = doc(db, "practitioners", practitionerId!);
            const reportSnap = await getDoc(reportRef);

            if (!reportSnap.exists()) {
                await setDoc(reportRef, {
                    practitionerId,
                    reportedBy: [userId],
                    reportCount: 1,
                });
            } else {
                const reportData = reportSnap.data();
                if (reportData.reportedBy.includes(userId)) {
                    Toast.show({
                        type: "info",
                        text1: t(TranslationKeys.reportPractitioner.alreadyReported),
                        position: "top"
                    });
                    return;
                }
                await updateDoc(reportRef, {
                    reportedBy: arrayUnion(userId),
                    reportCount: increment(1),
                });
                if ((reportData.reportCount || 0) + 1 >= 5) {
                    await updateDoc(practitionerRef, { status: "hold" });
                }
            }
            Toast.show({
                type: "success",
                text1: t(TranslationKeys.reportPractitioner.reportSubmitted),
                position: "top"
            });
        } catch (error) {
            Toast.show({
                type: "error",
                position: "top",
                text1: t(TranslationKeys.reportPractitioner.reportFaild),
            });
        } finally {
            setLoading(false);
        }
    };



    return {
        reportPractitioner,
        openModal,
        closeModal,
        loading,
        modalVisible,
        setModalVisible
    };
};
