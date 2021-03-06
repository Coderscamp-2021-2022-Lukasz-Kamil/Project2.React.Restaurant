import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const addUserInfo = async (
  email,
  name,
  phoneNumber,
  accountType = "user",
  password
  // id
) => {
  const usersCollectionRef = collection(db, "users");

  try {
    await addDoc(usersCollectionRef, {
      // user_id: id,
      email: email,
      name: name,
      phone_number: phoneNumber,
      account_type: accountType,
      password: password,
    });
  } catch (err) {
    throw new Error("Server Error");
  }
};

const addUser = async (email, password, name, phoneNumber, accountType) => {
  try {
    // const userCredential = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
    // const user = userCredential.user;
    await addUserInfo(
      email,
      name,
      phoneNumber,
      accountType,
      password
      // user.uid
    );
    return "User was sucessfully added";
  } catch (err) {
    console.log(err.message);
    throw new Error("Server Error, user wasn't added\n" + err);
  }
};

export default addUser;
