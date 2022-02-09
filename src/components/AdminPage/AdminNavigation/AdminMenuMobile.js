import MenuOnMobile from "./MenuOnMobile";
import ProfileIcon from "../../../images/myProfile-icon.png";
import MenuIcon from "../../../images/menuAdmin-icon.png";
import Members from "../../../images/members-icon.png";

const AdminMenuMobile = () => {
	const adminPages = [
		{ source: "/admin/home", icon: ProfileIcon },
		{ source: "/admin/menu", icon: MenuIcon },
		{ source: "/admin/members", icon: Members },
	];
	return adminPages.map(menuOnMobile => (
		<MenuOnMobile
			source={menuOnMobile.source}
			icon={menuOnMobile.icon}
			key={menuOnMobile.icon}
		/>
	));
};

export default AdminMenuMobile;
