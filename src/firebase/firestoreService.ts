import { getFirestore, doc, setDoc, serverTimestamp, collection, getDocs } from "firebase/firestore";
import { SignupPractFormData } from "@/schemas/authSchemas";
import { firestore as db } from "@/firebase/config";


export const savePractitionerDataToFirestore = async (
    practId: string,
    formData: SignupPractFormData
) => {
    const db = getFirestore();

    try {
        const practRef = doc(db, "practitioners", practId);
        await setDoc(practRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            country: formData.country,
            city: formData.city,
            neighbourhood: formData.neighbourhood,
            workType: formData.workType,
            createdAt: serverTimestamp(),
            featured: false
        });
    } catch (error: any) {
        console.error("Error saving practitioner data to Firestore:", error);
        throw new Error("Failed to save practitioner data. Please try again later.");
    }
};


export const fetchAllPractitioners = async () => {
    const practs: Array<{
        id: string;
        firstName: string;
        lastName: string;
        workType: string;
        country: string;
        city: string;
        neighbourhood: string;
        phoneNumber: string;
    }> = [];
    const querySnapshot = await getDocs(collection(db, "practitioners"));
    querySnapshot.forEach((doc) => {
        practs.push({ id: doc.id, ...doc.data() } as any);
    });
    return practs;
};