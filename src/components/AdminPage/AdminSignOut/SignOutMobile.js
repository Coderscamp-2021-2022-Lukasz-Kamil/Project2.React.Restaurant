import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";

import { Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import icon from "../../../images/signOut-icon.png";
import "./SignOut.css";

const SignOutMobile = () => {
	const [, , removeCookie] = useCookies(["isSignedIn"]);

	const navigate = useNavigate();

	const signOutUser = async () => {
		try {
			await signOut(auth);
			removeCookie("isSignedIn", { path: "/" });
			navigate("/admin/");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<NavLink
			to={"/admin/"}
			className='text-decoration-none'
			activeclassname='active'>
			<Button
				className='bg-transparent shadow-none border-none'
				type='submit'
				onClick={() => signOutUser()}>
				<Image src={icon}></Image>
			</Button>
		</NavLink>
	);
};

export default SignOutMobile;
