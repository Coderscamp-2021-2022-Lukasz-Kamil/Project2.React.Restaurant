import { updateUser} from "firebase/auth";

const editUser = async (id, email, password, name) => {
  const newFields = {
    email: email, 
    displayName: name, 
    password: password
  };

  try {
    await updateUser(id, newFields);
  } catch (err) {
    throw new Error("Server Error, user wasn't edited");
  }

};

export default editUser;