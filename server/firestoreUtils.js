import db from "./firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  setDoc,
  getDocs,
  where
} from "firebase/firestore";

export const getCollection = async (collectionName) => {
  const collection = await db.collection(collectionName).get();
  return collection.docs.map((doc) => doc.data());
};

export const getDocument = async (collectionName, documentName) => {
  const document = await db.collection(collectionName).doc(documentName).get();
  return document.data();
};

export const getCollectionWithFilter = async (collectionName, filter) => {
  const collection = await db
    .collection(collectionName)
    .where(filter.field, filter.operator, filter.value)
    .get();
  return collection.docs.map((doc) => doc.data());
};

export const getCollectionWithFilterAndSort = async (
  collectionName,
  filter,
  sort
) => {
  const collection = await db
    .collection(collectionName)
    .where(filter.field, filter.operator, filter.value)
    .orderBy(sort.field, sort.direction)
    .get();
  return collection.docs.map((doc) => doc.data());
};

export const getCollectionWithSort = async (collectionName, sort) => {
  const collection = await db
    .collection(collectionName)
    .orderBy(sort.field, sort.direction)
    .get();
  return collection.docs.map((doc) => doc.data());
};

export const createNewTransaction = async (data) => {
  console.log("data", data);
  console.log("db", db);

  await setDoc(doc(db, "transactions", data.txid), data);
};

export const getMyTransactions = async (publicKey) => {
  //pueden ser que yo envie o que me enviaron
  const q = query(collection(db, "transactions"), where("from", "==", publicKey));
  const querySnapshot = await getDocs(q);
  const transactions1 = querySnapshot.docs.map((doc) => doc.data());

  const q2 = query(collection(db, "transactions"), where("to", "==", publicKey));
  const querySnapshot2 = await getDocs(q2);
  const transactions2 = querySnapshot2.docs.map((doc) => doc.data());

  const transactions = [...transactions1, ...transactions2];

  console.log("transactions", transactions);
  return transactions;
};
