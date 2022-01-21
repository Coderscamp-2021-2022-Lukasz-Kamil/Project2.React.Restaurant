import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactPage from "./components/ContactPage/ContactPage";
import MenuPage from "./components/MenuPage/MenuPage";
import AdminPanel from "./components/AdminPage/AdminPanel/AdminPanel";
import AdminHome from "./components/AdminPage/AdminHome/AdminHome";
import NotFound from "./components/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/AdminPage/AdminPanel/PrivateRoute";
import { useCookies } from "react-cookie";

function App() {
  const [cookie] = useCookies(["isSignedIn"]);

  const isSignedIn = () => {
    return cookie.isSignedIn;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          {isSignedIn() && <Route path="/admin/home" element={<AdminHome />} />}
          <Route
            path="/admin/home"
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
