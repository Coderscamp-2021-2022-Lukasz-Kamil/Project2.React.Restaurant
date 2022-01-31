import { auth, db } from "../../firebase"
import { collection, addDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth";


const addUserInfo = async (email, password, name, phoneNumber, accountType="user", id) => {
  const usersCollectionRef = collection(db, 'users');

  try {
    await addDoc(usersCollectionRef, {
      user_id: id, 
      email: email, 
      name: name, 
      phone_number: phoneNumber, 
      account_type: accountType,
    });
    
  } catch (e) {
    console.error(e.message, e.name);
  }
};

const addUser = async (email, password, name, phoneNumber, accountType) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    addUserInfo(email, password, name, phoneNumber, accountType, user.uid)
    .then(() => {
      console.log("The user was added");
    })
    .catch((e) => {
      console.error(e.message, e.name);
    });
  })
  .catch((e) => {
    console.error(e.message, e.name);
  });
};

export default addUser;