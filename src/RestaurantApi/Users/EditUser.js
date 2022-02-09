import { updateProfile, updatePassword, updateEmail } from "firebase/auth";
import { auth } from "../../firebase";

const editUser = async (name, newEmail, newPassword) => {
  const newFields = {
    displayName: name,
  };
  const user = auth.currentUser;

  try {
    if (newEmail !== user.email) {
      await updateEmail(user, newEmail);
    }
    if (newPassword !== ''){
      await updatePassword(user, newPassword);
    }
    await updateProfile(user, newFields);

    return "User was sucessfully edited";
  } catch (err) {
    throw new Error("Server Error, user wasn't edited");
  }

};

export default editUser;