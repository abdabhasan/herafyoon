import { createUserWithEmailAndPassword, sendEmailVerification, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
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

export const loginUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};
