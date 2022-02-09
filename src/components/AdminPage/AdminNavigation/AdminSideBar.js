import AdminMenuPages from "./AdminMenuPages";
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
};

export default AdminSideBar;
