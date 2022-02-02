import { auth } from "../../../firebase";

const LoggedAs = () => {
	const user = auth.currentUser.email


	return (
		<div className='d-flex mx-auto fs-5 text-white'>
			<div>
				Logged as: {user}
			</div>
		</div>
	);
};

export default LoggedAs;
