import { db } from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

export const getAllDishes = async () => {
  const dishesCollectionRef = collection(db, 'dishes');
  let allDishes = [];
  try {
    const data = await getDocs(dishesCollectionRef);
    allDishes = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    return allDishes;
  } catch (e) {
    console.error(e.message, e.name);
  }      
};
