import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";
import AddingUserForm from "../AddingUserForm/AddingUserForm";
const AdminHome = () => {
  const [, , removeCookie] = useCookies(["isSignedIn"]);

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
      <AddingUserForm />
    </div>
  );
};

export default AdminHome;
