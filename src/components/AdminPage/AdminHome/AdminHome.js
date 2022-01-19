import { useState } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const AdminHome = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/admin");
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setIsSignedIn(true);
      navigation();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>AdminHome</div>
      {isSignedIn === true ? (
        console.log("signed out")
      ) : (
        <button type="submit" onClick={signOutUser}>
          Sign out
        </button>
      )}
    </div>
  );
};

export default AdminHome;
