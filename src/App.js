import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactPage from "./components/ContactPage/ContactPage";
import MenuPage from "./components/MenuPage/MenuPage";
import AdminPanel from "./components/AdminPage/AdminPanel/AdminPanel";
import AdminHome from "./components/AdminPage/AdminHome/AdminHome";
import NotFound from "./components/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/AdminPage/AdminPanel/PrivateRoute";
import { useCookies } from "react-cookie";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import DishForm from "./components/AdminPage/DishForm/DishForm";

function App() {
  const [cookie] = useCookies(["isSignedIn"]);

  const isSignedIn = () => cookie.isSignedIn;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PagesWithNavigationBar />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Route>
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
          <Route
            path="/admin/dish"
            element={
              <DishForm />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );

  function PagesWithNavigationBar() {
    return (
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  }
}

export default App;
