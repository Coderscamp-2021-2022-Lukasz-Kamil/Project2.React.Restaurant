import { auth, db } from "../../firebase"
import { updateDoc, doc} from 'firebase/firestore'
import { updateEmail, updatePassword } from "firebase/auth";

export const editUser = async (id, email, password, name) => {
  const userDoc = doc(db, "users", id);
  const user = auth.currentUser;

  const newFields = {
    email: email, 
    name: name, 
  };

  try {
    await updateDoc(userDoc, newFields);
  } catch (e) {
    console.error(e.message, e.name);
  }

  try {
    await updateEmail(user, email);
  } catch (e) {
    console.error(e.message, e.name);
  }

  try {
    await updatePassword(user, password);
  } catch (e) {
    console.error(e.message, e.name);
  }
};
