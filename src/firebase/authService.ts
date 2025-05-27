import { createUserWithEmailAndPassword, sendEmailVerification, deleteUser, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "@/firebase/config";


export const signupUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const sendVerificationEmail = async (user: User) => {
    return await sendEmailVerification(user);
};

export const removeUser = async (user: User) => {
    return await deleteUser(user);
};

export const loginUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};


export const logoutUser = async () => {
    return await signOut(auth);
};