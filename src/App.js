import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactPage from "./components/ContactPage/ContactPage";
import MenuPage from "./components/MenuPage/MenuPage";
import AdminPanel from "./components/AdminPage/AdminPanel/AdminPanel";
import AdminHome from "./components/AdminPage/AdminHome/AdminHome";
import NotFound from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
