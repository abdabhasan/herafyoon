import { createUserWithEmailAndPassword, sendEmailVerification, deleteUser } from "firebase/auth";
import { auth } from "@/firebase/config";


export const signupUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const sendVerificationEmail = async (user: any) => {
    return await sendEmailVerification(user);
};

export const removeUser = async (user: any) => {
    return await deleteUser(user);
};
