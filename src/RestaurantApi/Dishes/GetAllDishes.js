import { db } from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

const getAllDishes = async () => {
  const dishesCollectionRef = collection(db, 'dishes');
  try {
    const data = await getDocs(dishesCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  } catch (err) {
    throw new Error("Server Error");
  }      
};

export default getAllDishes;
