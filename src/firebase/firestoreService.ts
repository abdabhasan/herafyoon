import { getFirestore, doc, setDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";
import { SignupPractFormData } from "@/schemas/authSchemas";
import { firestore as db } from "@/firebase/config";


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


export const fetchPracts = async () => {
    const users: Array<{
        id: string;
        firstName: string;
        lastName: string;
        workType: string;
        country: string;
        city: string;
        neighbourhood: string;
        phoneNumber: string;
    }> = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() } as any);
    });
    return users;
};