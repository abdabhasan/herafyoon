import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { SignupPractFormData } from "@/schemas/authSchemas";


export const saveUserDataToFirestore = async (
    userId: string,
    formData: SignupPractFormData
) => {
    const db = getFirestore();

    try {
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            country: formData.country,
            city: formData.city,
            neighbourhood: formData.neighbourhood,
            workType: formData.workType,
            createdAt: serverTimestamp(),
        });
    } catch (error: any) {
        console.error("Error saving user data to Firestore:", error);
        throw new Error("Failed to save user data. Please try again later.");
    }
};
