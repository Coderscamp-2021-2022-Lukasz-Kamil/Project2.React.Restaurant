import AdminMenuPages from "./AdminMenuPages";
import SignOut from "../AdminSignOut/SignOut";

const AdminSideBar = () => {
  return (
      <div
        className="d-flex flex-column flex-shrink-0 py-3 vh-100  m-0"
        style={{
          width: "100%",
          backgroundColor: "#777",
          padding: "0",
          margin: "0",
          maxHeight: "85vh",
        }}
      >
        <AdminMenuPages />
        <SignOut />
      </div>
  );
};

export default AdminSideBar;
