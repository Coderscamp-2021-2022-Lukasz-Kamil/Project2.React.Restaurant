import { db } from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

export const getAllUsers = async () => {
  const usersCollectionRef = collection(db, 'users');
  let allUsers = [];
  
  try {
    const data = await getDocs(usersCollectionRef);
    allUsers = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    return allUsers;
  } catch (e) {
    console.log(e);
  }      
};