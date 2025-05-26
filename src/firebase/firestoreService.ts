import { getFirestore, doc, setDoc, serverTimestamp, collection, getDocs, query, where, updateDoc, getDoc } from "firebase/firestore";
import { SignupNormalUserFormData, SignupPractFormData } from "@/schemas/authSchemas";
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


export const fetchFeaturedPractitioners = async () => {
    const featuredPracts: Array<{
        id: string;
        firstName: string;
        lastName: string;
        workType: string;
        country: string;
        city: string;
        neighbourhood: string;
        phoneNumber: string;
    }> = [];

    try {
        const practsQuery = query(collection(db, "practitioners"), where("featured", "==", true));
        const querySnapshot = await getDocs(practsQuery);
        querySnapshot.forEach((doc) => {
            featuredPracts.push({ id: doc.id, ...doc.data() } as any);
        });
    } catch (error: any) {
        console.error("Error fetching featured practitioners:", error);
        throw new Error("Failed to fetch featured practitioners. Please try again later.");
    }

    return featuredPracts;
};



export const fetchFilteredPractitioners = async (
    country?: string,
    city?: string,
    neighbourhood?: string,
    workType?: string
) => {
    const practitioners: Array<any> = [];
    const filters: any[] = [];

    if (country) filters.push(where("country", "==", country));
    if (city) filters.push(where("city", "==", city));
    if (neighbourhood) filters.push(where("neighbourhood", "==", neighbourhood));
    if (workType) filters.push(where("workType", "==", workType));

    const q = query(collection(db, "practitioners"), ...filters);

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            practitioners.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching filtered practitioners:", error);
        throw new Error("Failed to fetch filtered practitioners.");
    }

    return practitioners;
};


export const updatePractitionerData = async (updatedPractId: string, updatedData: any) => {
    if (!updatedPractId) {
        throw new Error("Practitioner ID is required to update data");
    }
    const practDocRef = doc(db, "practitioners", updatedPractId);
    await updateDoc(practDocRef, updatedData);
};



export const fetchSinglePractitionerInfo = async (practId: string) => {
    try {
        const practDocRef = doc(db, "practitioners", practId);
        const practDoc = await getDoc(practDocRef);

        if (practDoc.exists()) {
            return { id: practDoc.id, ...practDoc.data() };
        } else {
            console.error("No practitioner document found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching updated practitioner info:", error);
        throw new Error("Failed to fetch updated practitioners information. Please try again later.");
    }
};



export const saveNormalUserDataToFirestore = async (
    normalUserId: string,
    formData: SignupNormalUserFormData
) => {
    const db = getFirestore();

    try {
        const practRef = doc(db, "normal-users", normalUserId);
        await setDoc(practRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            country: formData.country,
            city: formData.city,
            neighbourhood: formData.neighbourhood,
            createdAt: serverTimestamp(),
        });
    } catch (error: any) {
        console.error("Error saving Normal User data to Firestore:", error);
        throw new Error("Failed to save Normal User data. Please try again later.");
    }
};

