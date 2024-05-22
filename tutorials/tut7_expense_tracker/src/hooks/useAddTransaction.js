import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions");
    const { userID } = useGetUserInfo();
    const addTransaction = async ({
        description,
        transAmount,
        transType }) => {
        await addDoc(transactionCollectionRef, {
            userID,
            description,
            transAmount,
            transType,
            createdAt: serverTimestamp()
        });
    };
    return { addTransaction }
}