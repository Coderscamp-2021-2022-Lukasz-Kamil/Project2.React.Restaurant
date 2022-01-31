import { db } from "../../firebase"
import { doc, deleteDoc } from 'firebase/firestore'

export const removeUser = async (id) => {
  const userDoc = doc(db, "users", id);

  try {
    await deleteDoc(userDoc);
  } catch (e) {
    console.error(e.message, e.name);
  } 
};