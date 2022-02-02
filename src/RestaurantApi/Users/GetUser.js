import { db } from "../../firebase"
import { doc, getDoc } from 'firebase/firestore'

const getUser = async(id) => {
  const userRef = doc(db, 'users', id);

  try {
    return await getDoc(userRef);
  } catch (err) {
    throw new Error("Server Error");
  }
};

export default getUser;