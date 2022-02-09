import AdminMenuPages from "./AdminMenuPages";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import SignOut from "../AdminSignOut/SignOut";
import styles from "./AdminSideBar.module.css";


const AdminSideBar = () => {
	return (
		<>
			<div
				className={`d-flex flex-column flex-shrink-0 py-3 vh-100 ${styles.sideBarOff}`}
				style={{ width: "250px", backgroundColor: "#777" }}>
				<AdminMenuPages />
				<SignOut />
			</div>
		</>
	);
=======
import SignOut from "../AdminSignOut/SignOut";

const AdminSideBar = () => {
  return (
    <div className="mw-20 p-0 m-0 ">
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
    </div>
  );
>>>>>>> origin
};

export default AdminSideBar;
