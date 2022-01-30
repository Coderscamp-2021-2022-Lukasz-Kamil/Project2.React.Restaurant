import { auth, db } from "../../firebase"
import { updateDoc, doc} from 'firebase/firestore'
import { updateEmail, updatePassword } from "firebase/auth";

export const editUser = async (id, email, password, name, phoneNumber, accountType) => {
  const userDoc = doc(db, "users", id);
  const user = auth.currentUser;

  const newFields = {
    email: email, 
    first_name: name, 
    last_name: name, 
    phone_number: phoneNumber, 
    account_type: accountType,
  };

  try {
    await updateDoc(userDoc, newFields);
  } catch (e) {
    console.log(e);
  }

  try {
    await updateEmail(user, email);
  } catch (e) {
    console.log(e);
  }

  try {
    await updatePassword(user, password);
  } catch (e) {
    console.log(e);
  }
};
