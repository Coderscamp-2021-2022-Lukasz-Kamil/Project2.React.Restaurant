import { db } from "../../firebase"
import { doc, deleteDoc } from 'firebase/firestore'

const deleteDish = async (id) => {
  const dishDoc = doc(db, "dishes", id);

  try {
    await deleteDoc(dishDoc);
  } catch (err) {
    throw new Error("Server Error, dish wasn't deleted");
  } 
};

export default deleteDish;