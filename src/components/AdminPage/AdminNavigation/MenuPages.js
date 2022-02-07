import { NavLink } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

const MenuPages = props => {
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

export default MenuPages;