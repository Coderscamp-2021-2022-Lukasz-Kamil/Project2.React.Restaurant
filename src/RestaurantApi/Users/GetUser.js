import { db, auth } from "../../firebase";
import { doc, getDoc } from 'firebase/firestore';
import { updateProfile } from "firebase/auth";

const getUser = async() => {
  try {
    return auth.currentUser;
  } catch (err) {
    throw new Error("Server Error");
  }
};

export default getUser;