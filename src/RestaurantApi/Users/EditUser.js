import { updateUser} from "firebase/auth";

const editUser = async (id, email, password, name) => {
  const newFields = {
    email: email, 
    displayName: name, 
    password: password
  };

  try {
    await updateUser(id, newFields);
  } catch (e) {
    console.error(e.message, e.name);
  }

};

export default editUser;