import db from "./firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  setDoc,
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
