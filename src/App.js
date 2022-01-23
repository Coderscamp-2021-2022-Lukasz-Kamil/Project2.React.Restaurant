import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactPage from "./components/ContactPage/ContactPage";
import MenuPage from "./components/MenuPage/MenuPage";
import AdminPanel from "./components/AdminPage/AdminPanel/AdminPanel";
import AdminHome from "./components/AdminPage/AdminHome/AdminHome";
import NotFound from "./components/NotFoundPage/NotFoundPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path = "/" element={<PagesWithNavigationBar/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Route>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </div>
    
  );

  function PagesWithNavigationBar() {
    return(
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  }
}

export default App;
