import { useEffect, useReducer } from "react";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
// import rollbar from "@/utils/rollbar";
import {
    signupUser,
    sendVerificationEmail,
    removeUser,
    loginUser,
} from "@/firebase/authService";
import { savePractitionerDataToFirestore } from "@/firebase/firestoreService";
import { SignupPractFormData } from "@/schemas/authSchemas";
import { useRouter } from "expo-router";
import { getAuth, UserCredential } from "firebase/auth";
import { TranslationKeys } from "@/i18n/translationKeys";
import { initialState, signupReducer } from "@/reducers/signupPractitionerReducer";
import { clearStorage, getFromStorage, saveToStorage } from "@/utils/storageUtils";

const EMAIL_SENT_KEY = "emailSent";
const DATA_KEY = "data";
const USER_KEY = "user";

// Use this function to retrieve the user and reload its details
async function reloadUser(uid: string) {
    const auth = getAuth();
    if (auth.currentUser && auth.currentUser.uid === uid) {
        // Reload the currently authenticated user
        await auth.currentUser.reload();
        return auth.currentUser;
    } else {
        // throw new Error("No matching user found in authentication state.");
    }
}


export function useSignupPractitionerForm(reset: () => void) {
    const { t } = useTranslation();
    const [state, dispatch] = useReducer(signupReducer, initialState);
    const router = useRouter();


    useEffect(() => {
        const initializeState = async () => {
            const emailSent = await getFromStorage(EMAIL_SENT_KEY);
            const storedUser = await getFromStorage(USER_KEY);
            const storedData = await getFromStorage(DATA_KEY);

            if (emailSent && storedUser) {
                try {
                    const user = await reloadUser(storedUser.uid);
                    dispatch({
                        type: "SET_STATE",
                        payload: {
                            emailSent: true,
                            userCredential: { user },
                            currentStep: "emailVerified",
                            submittedData: storedData,
                        },
                    });
                } catch (error) {
                    console.error("Error initializing state:", error);
                }
            }
        };
        initializeState();
    }, []);

    const clearSignupState = async () => {
        await clearStorage([EMAIL_SENT_KEY, DATA_KEY, USER_KEY]);
        dispatch({ type: "RESET" });
    };

    const onSubmit = async (data: SignupPractFormData) => {
        dispatch({ type: "SET_LOADING", payload: true });

        try {
            const { email, password } = data;
            const credential = await signupUser(email, password);
            await sendVerificationEmail(credential.user);

            await saveToStorage(EMAIL_SENT_KEY, true);
            await saveToStorage(USER_KEY, { uid: credential.user.uid, email });
            await saveToStorage(DATA_KEY, data);


            dispatch({
                type: "SET_STATE",
                payload: {
                    emailSent: true,
                    userCredential: credential,
                    submittedData: data,
                },
            });


            Toast.show({
                type: "success",
                text1: t(TranslationKeys.signupPage.verificationEmailSent),
                text2: t(TranslationKeys.signupPage.checkYourInbox),
            });
        } catch (error: any) {
            console.error("Signup error:", error);

            // Clean up if user was partially created and then deleted
            if (state.userCredential) {
                await removeUser(state.userCredential.user);
            }
            await clearSignupState();

            Toast.show({
                type: "error",
                text1: t(TranslationKeys.signupPage.signupFailed),
                text2: error.message || t(TranslationKeys.signupPage.errorOccurred),
            });
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    const onVerifyEmail = async () => {
        dispatch({ type: "SET_LOADING", payload: true });


        try {
            const { userCredential, submittedData } = state;

            if (!userCredential) {
                await clearSignupState();
                throw new Error("User not found.");
            }

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


                await clearSignupState();


                dispatch({
                    type: "SET_STATE",
                    payload: {
                        currentStep: "completed",
                        emailSent: false,
                    },
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
            console.error("Email verification error:", error);
            // await clearSignupState();
            Toast.show({
                type: "error",
                text1: t(TranslationKeys.signupPage.verificationFailed),
                text2: error.message || t(TranslationKeys.signupPage.errorOccurred),
            });
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    return { state, onSubmit, onVerifyEmail, clearSignupState };
}
