import RestaurantLogo from "../../../images/simple-icons_codechef.png";
import Title from "../../Title/Title";
import { Nav, Navbar, Image, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import AdminMenuMobile from "./AdminMenuMobile";
import SignOutMobile from "../AdminSignOut/SignOutMobile";
import LoggedAs from "./LoggedAs";

const AdminNavigationBar = () => {
	return (
		<>
			<Navbar
				className=' d-flex'
				style={{ backgroundColor: "#545454", height: "100px" }}>
				<Col>
					<Nav className='d-none d-md-flex align-items-center'>
						<Image
							className='mx-4 my-1'
							src={RestaurantLogo}
							style={{ height: "80px" }}
							alt='restaurant logo'></Image>
						<Title />
						<LoggedAs />
					</Nav>

					<Nav className=' justify-content-end d-md-none d-flex align-items-center'>
						<Image
							className='restaurant-logo my-1 mx-3'
							src={RestaurantLogo}
							alt='restaurant logo'></Image>
						<Container
							fluid
							className='d-flex justify-content-end nav-container active-page'>
							<AdminMenuMobile />
							<SignOutMobile />
						</Container>
					</Nav>
				</Col>
			</Navbar>
		</>
	);
};

export default AdminNavigationBar;
