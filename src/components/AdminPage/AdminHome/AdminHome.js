import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Cookies } from "react-cookie";
import { useCookies } from "react-cookie";

const AdminHome = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["isSignedIn"]);

  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      removeCookie("isSignedIn", { path: "/" });
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>AdminHome</div>
      <button type="submit" onClick={() => signOutUser()}>
        Sign out
      </button>
    </div>
  );
};

export default AdminHome;
