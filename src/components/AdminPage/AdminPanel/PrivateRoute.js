import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
