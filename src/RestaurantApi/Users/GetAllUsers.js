import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const getAllUsers = async () => {
  const usersCollectionRef = collection(db, "users");

  try {
    const data = await getDocs(usersCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    throw new Error(err.message);
  }
};

// const MOCK_USERS = [
//   { id: 1, name: "Fran", email: "fran@gmail.com", account_type: "user" },
//   { id: 2, name: "Eloy", email: "eloy@gmail.com", account_type: "user" },
// ];

// const getAllUsers = async () => {
//   return new Promise((resolve, reject) => {
//     resolve(MOCK_USERS);
//   });
// };

export default getAllUsers;
