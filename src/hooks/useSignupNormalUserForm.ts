import { useState } from "react";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import rollbar from "@/utils/rollbar";
import {
    signupUser,
    sendVerificationEmail,
    removeUser,
    loginUser,
} from "@/firebase/authService";
import { saveNormalUserDataToFirestore } from "@/firebase/firestoreService";
import { SignupNormalUserFormData } from "@/schemas/authSchemas";
import { useRouter } from "expo-router";
import { UserCredential } from "firebase/auth";
import { TranslationKeys } from "@/i18n/translationKeys";

export function useSignupNormalUserForm(reset: () => void) {
    const { t } = useTranslation();
    const [state, setState] = useState<{
        loading: boolean;
        emailSent: boolean;
        currentStep: "emailSent" | "emailVerified" | "completed";
        userCredential: UserCredential | null;
        submittedData: SignupNormalUserFormData | null;
    }>({
        loading: false,
        emailSent: false,
        currentStep: "emailVerified",
        userCredential: null,
        submittedData: null,
    });


    const router = useRouter();


    const onSubmit = async (data: SignupNormalUserFormData) => {
        setState((prev) => ({ ...prev, loading: true }));
        try {
            const { email, password } = data;
            console.log("data from hook", data)
            const credential = await signupUser(email, password);
            await sendVerificationEmail(credential.user);
            console.log("data from hook", data)

            setState({
                ...state,
                emailSent: true,
                userCredential: credential,
                submittedData: data,
            });

            Toast.show({
                type: "success",
                text1: t(TranslationKeys.signupPage.verificationEmailSent),
                text2: t(TranslationKeys.signupPage.checkYourInbox),
            });
        } catch (error: any) {
            rollbar.log(error);
            console.error("Signup error:", error);

            if (state.userCredential) {
                await removeUser(state.userCredential.user);
            }

            Toast.show({
                type: "error",
                text1: t(TranslationKeys.signupPage.signupFailed),
                text2: error.message || t(TranslationKeys.signupPage.errorOccurred),
            });
        } finally {
            setState((prev) => ({ ...prev, loading: false }));
        }
    };

    const onVerifyEmail = async () => {
        setState((prev) => ({ ...prev, loading: true }));
        try {
            const { userCredential, submittedData } = state;

            if (!userCredential) throw new Error("User not found.");
            await userCredential.user.reload();

            if (userCredential.user.emailVerified) {
                const loggedInUser = await loginUser(
                    submittedData?.email!,
                    submittedData?.password!
                );
                await saveNormalUserDataToFirestore(
                    loggedInUser.user.uid,
                    submittedData!
                );

                setState({
                    ...state,
                    currentStep: "completed",
                    emailSent: false,
                });

                Toast.show({
                    type: "success",
                    text1: t(TranslationKeys.signupPage.verificationSuccessful),
                    text2: t(TranslationKeys.signupPage.yourAccountNowActive),
                });

                setTimeout(() => router.push("/"), 1500);
                reset();
            } else {
                throw new Error("Email not verified.");
            }
        } catch (error: any) {
            rollbar.log(error);
            console.error("Email verification error:", error);
            Toast.show({
                type: "error",
                text1: t(TranslationKeys.signupPage.verificationFailed),
                text2: error.message || t(TranslationKeys.signupPage.errorOccurred),
            });
        } finally {
            setState((prev) => ({ ...prev, loading: false }));
        }
    };

    return { state, onSubmit, onVerifyEmail };
}
