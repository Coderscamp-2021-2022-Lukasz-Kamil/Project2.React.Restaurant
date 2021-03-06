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
import AdminMenu from "./components/AdminPage/AdminMenu/AdminMenu";
import AdminMembers from "./components/AdminPage/AdminMembers/AdminMembers";
import NotFound from "./components/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/AdminPage/AdminPanel/PrivateRoute";
import { useCookies } from "react-cookie";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AdminNavigationBar from "./components/AdminPage/AdminNavigation/AdminNavigationBar";
import AdminSideBar from "./components/AdminPage/AdminNavigation/AdminSideBar";
import { Col, Row } from "react-bootstrap";
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
          <Route path="/" element={<PagesWithNavigationAdmin />}>
            {isSignedIn() && (
              <Route path="/admin/home" element={<AdminHome />} />
            )}
            <Route
              path="/admin/home"
              element={
                <PrivateRoute>
                  <AdminHome />
                </PrivateRoute>
              }
            />
            <Route path="/admin/menu" 
            element={
              <PrivateRoute>
                <AdminMenu />
              </PrivateRoute>
            } />
            <Route path="/admin/members" 
            element={
              <PrivateRoute>
                <AdminMembers/>
              </PrivateRoute>
            } />
            <Route path="/admin/dish" 
            element={
              <PrivateRoute>
                <DishForm/>
              </PrivateRoute>
            } />
          </Route>

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

  
  function PagesWithNavigationAdmin() {
    return (
      <>
        <AdminNavigationBar />
        <Row className="w-100 p-0 m-0">
          <Col
            className="menu-admin-side-bar d-none d-md-block"
            style={{
              maxWidth: "26vw",
              padding: "0",
              margin: "0",
            }}
          >
            <AdminSideBar />
          </Col>
          <Col className="w-100 ">
            <Outlet />
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
