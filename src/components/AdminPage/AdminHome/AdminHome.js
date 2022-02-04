import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";
import Cart from "../../Modal/Cart";
import { useState } from "react";

const AdminHome = () => {
  const [, , removeCookie] = useCookies(["isSignedIn"]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <button onClick={showCartHandler}>Modal</button>
    </div>
  );
};

export default AdminHome;
