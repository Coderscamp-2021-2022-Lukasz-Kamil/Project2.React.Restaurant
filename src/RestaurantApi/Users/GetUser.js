import { db } from "../../firebase"
import { doc, getDoc } from 'firebase/firestore'

const getUser = async(id) => {
  const userRef = doc(db, 'users', id);

  try{
    return await getDoc(userRef);
  } catch (e) {
      console.error(e.message, e.name);
  }
};

export default getUser;