import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";
import { Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import icon from "../../../images/signOut-dark.png";
import "./SignOut.css";

const SignOut = () => {
	const [, , removeCookie] = useCookies(["isSignedIn"]);

	const navigate = useNavigate();

	const signOutUser = async () => {
		try {
			await signOut(auth);
			removeCookie("isSignedIn", { path: "/" });
			removeCookie("signedUserEmail", {path: "/"});
			navigate("/admin/");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<NavLink
			to={"/admin/"}
			className='text-decoration-none w-100 p-2 fs-6 bg-light d-flex mt-auto'
			activeclassname='active'
			style={{ fontFamily: "Roboto", maxHeight: "60px" }}>
			<Button
				className='bg-transparent shadow-none border-none fw-bold signOut'
				type='submit'
				onClick={() => signOutUser()}>
				<Image src={icon}></Image>

				<div className='d-inline mx-4'>Log out</div>
			</Button>
		</NavLink>
	);
};

export default SignOut;
