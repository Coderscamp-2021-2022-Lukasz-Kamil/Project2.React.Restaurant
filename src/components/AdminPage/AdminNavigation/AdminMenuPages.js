import { NavLink } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import ProfileIcon from "../../../images/myProfile-dark.png";
import MenuIcon from "../../../images/menuAdmin-dark.png";
import Members from "../../../images/members-dark.png";

const Pages = props => {
	return (
		<div
			className=' mb-3 p-2 active-page fs-6 bg-light '
			style={{ fontFamily: "Roboto", maxHeight: "60px" }}>
			<NavLink
				to={props.source}
				className='text-decoration-none border-3 d-flex w-100'
				activeclassname='active'>
				<Button className='text-decoration-none bg-transparent shadow-none border-none fw-bold'>
					<Image src={props.icon} className='active-page d-inline'></Image>
					<div className='text-secondary d-inline mx-4'>{props.name}</div>
				</Button>
			</NavLink>
		</div>
	);
};

const AdminMenuPages = () => {
	const pages = [
		{ source: "/admin/home", name: "My profile", icon: ProfileIcon },
		{ source: "/admin/menu", name: "Menu", icon: MenuIcon },
		{ source: "/admin/members", name: "Members", icon: Members },
	];
	return pages.map(page => (
		<Pages
			source={page.source}
			name={page.name}
			icon={page.icon}
			key={page.name}
		/>
	));
};

export default AdminMenuPages;
