import { db } from "../../firebase"
import { doc, getDoc } from 'firebase/firestore'

const getDish = async(id) => {
  const dishRef = doc(db, 'dishes', id);

  try {
    const dishData = await getDoc(dishRef);
    return dishData.data();
  } catch (err) {
    throw new Error("Server Error");
  }
};

export default getDish;