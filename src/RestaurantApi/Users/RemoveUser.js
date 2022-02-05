import { db } from "../../firebase"
import { doc, deleteDoc } from 'firebase/firestore'

const removeUser = async (id) => {
  const userDoc = doc(db, "users", id);

  try {
    await deleteDoc(userDoc);
    return "User was sucessfully deleted";
  } catch (err) {
    throw new Error("Server Error, dish wasn't deleted");;
  } 
};

export default removeUser;