import { useCookies } from "react-cookie";

const LoggedAs = () => {
	const [cookies] = useCookies();

	return (
		<div className='d-flex mx-auto text-white' style={{fontFamily: "Roboto, sans-serif"}}>
			{cookies.isSignedIn ? <h3>Logged as: {cookies.signedUserEmail}</h3> : <h3>Please log in!</h3>}
		</div>
	);
};

export default LoggedAs;
