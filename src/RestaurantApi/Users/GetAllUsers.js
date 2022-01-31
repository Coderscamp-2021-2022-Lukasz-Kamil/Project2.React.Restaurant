import { db } from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

const getAllUsers = async () => {
  const usersCollectionRef = collection(db, 'users');
  
  try {
    const data = await getDocs(usersCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  } catch (e) {
    console.error(e.message, e.name);
  }      
};

export default getAllUsers;