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
            <Route path="/admin/menu" element={<AdminMenu />} />
            <Route path="/admin/members" element={<AdminMembers />} />
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
        <Row style={{ maxWidth: "100%" }}>
          <Col
            style={{
              maxWidth: "20vw",
              maxHeight: "80vh",
              padding: "0",
              margin: "0",
            }}
          >
            <AdminSideBar />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </>
    );
  }

	function PagesWithNavigationAdmin() {
		return (
			<>
				<AdminNavigationBar />
				<Row style={{ maxWidth: "100%" }}>
					<Col
						className='admin-side-bar d-none d-md-block'
						style={{
							maxWidth: "26vw",
							padding: "0",
							margin: "0",
						}}>
						<AdminSideBar />
					</Col>
					<Col className="menu-window"
						style={{
							maxWidth: "60vw",
							padding: "0",
							margin: "0 auto",
						}}>
						<Outlet />
					</Col>
				</Row>
			</>
		);
	}
}

export default App;
