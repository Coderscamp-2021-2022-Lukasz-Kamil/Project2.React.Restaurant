import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";
import Cart from "../../Modal/Cart";
import { useState } from "react";
import FormContainer from "../UserForm/FormContainer";

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
      <span>AdminHome</span>
      <button type="submit" onClick={() => signOutUser()}>
        Sign out
      </button>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <button onClick={showCartHandler}>Modal</button>
      <FormContainer />
    </div>
  );
};

export default AdminHome;
