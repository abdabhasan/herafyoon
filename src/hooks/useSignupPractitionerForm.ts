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
import { savePractitionerDataToFirestore } from "@/firebase/firestoreService";
import { SignupPractFormData } from "@/schemas/authSchemas";
import { useRouter } from "expo-router";
import { UserCredential } from "firebase/auth";

export function useSignupPractitionerForm(reset: () => void) {
    const { t } = useTranslation();
    const [state, setState] = useState<{
        loading: boolean;
        emailSent: boolean;
        currentStep: "emailSent" | "emailVerified" | "completed";
        userCredential: UserCredential | null;
        submittedData: SignupPractFormData | null;
    }>({
        loading: false,
        emailSent: false,
        currentStep: "emailVerified",
        userCredential: null,
        submittedData: null,
    });


    const router = useRouter();


    const onSubmit = async (data: SignupPractFormData) => {
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
                text1: t("signup_page.verification_email_sent"),
                text2: t("signup_page.check_your_inbox"),
            });
        } catch (error: any) {
            rollbar.log(error);
            console.error("Signup error:", error);

            if (state.userCredential) {
                await removeUser(state.userCredential.user);
            }

            Toast.show({
                type: "error",
                text1: t("signup_page.signup_failed"),
                text2: error.message || t("signup_page.error_occurred"),
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
                await savePractitionerDataToFirestore(
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
                    text1: t("signup_page.verification_successfull"),
                    text2: t("signup_page.your_account_now_active"),
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
                text1: t("signup_page.verification_failed"),
                text2: error.message || t("signup_page.error_occurred"),
            });
        } finally {
            setState((prev) => ({ ...prev, loading: false }));
        }
    };

    return { state, onSubmit, onVerifyEmail };
}
