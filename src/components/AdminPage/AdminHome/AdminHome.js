import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Cookies } from "react-cookie";
import { useCookies } from "react-cookie";

const AdminHome = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["isSignedIn"]);

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/admin");
  };

  const handleRemoveCookie = () => {
    removeCookie("isSignedIn");
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setIsSignedIn(true);
      // removeCookie("isSignedIn");
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
        <button
          type="submit"
          onClick={() => {
            signOutUser();
            handleRemoveCookie();
          }}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default AdminHome;
