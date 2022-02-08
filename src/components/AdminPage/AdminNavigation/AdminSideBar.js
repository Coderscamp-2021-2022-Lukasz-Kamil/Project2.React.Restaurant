import AdminMenuPages from "./AdminMenuPages";
import SignOut from "../AdminSignOut/SignOut";


const AdminSideBar = () => {
	return (
		<>
			<div
				className='d-flex flex-column flex-shrink-0 py-3 vh-100'
				style={{ width: "250px", backgroundColor: "#777" }}>
				<AdminMenuPages />
				<SignOut />

			</div>
		</>
	);
};

export default AdminSideBar;
