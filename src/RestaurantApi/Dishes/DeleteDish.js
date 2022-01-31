import { db } from "../../firebase"
import { doc, deleteDoc } from 'firebase/firestore'

const deleteDish = async (id) => {
  const dishDoc = doc(db, "dishes", id);

  try {
    await deleteDoc(dishDoc);
  } catch (e) {
    console.error(e.message, e.name);
  } 
};

export default deleteDish;