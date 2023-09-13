import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'; 
import db from '../firebase';
import { TodoItemType }from './reducer';
// Api Calls
export const getDocuments = async () => await getDocs(collection(db, 'todos'));
export const addDocument = async (payload: TodoItemType) => await addDoc(collection(db, 'todos'), payload);
export const deleteDocument = async (payload: TodoItemType) => await deleteDoc(doc(db, 'todos', payload.id));
export const updateDocument = async (payload: TodoItemType) => await updateDoc(doc(db, 'todos', payload.id), payload);
