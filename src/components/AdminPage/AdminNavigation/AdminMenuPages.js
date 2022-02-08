import MenuPages from "./MenuPages";
import ProfileIcon from "../../../images/myProfile-dark.png";
import MenuIcon from "../../../images/menuAdmin-dark.png";
import Members from "../../../images/members-dark.png";

const AdminMenuPages = () => {
	const pages = [
		{ source: "/admin/home", name: "My profile", icon: ProfileIcon },
		{ source: "/admin/menu", name: "Menu", icon: MenuIcon },
		{ source: "/admin/members", name: "Members", icon: Members },
	];
	return pages.map(page => (
		<MenuPages
			source={page.source}
			name={page.name}
			icon={page.icon}
			key={page.name}
		/>
	));
};

export default AdminMenuPages;
