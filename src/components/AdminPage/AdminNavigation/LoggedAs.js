import { auth } from "../../../firebase";
import { useContext } from "react";
import { UserContext, UserProvider } from "./UserContext";


const LoggedAs = () => {
	// const user = useAuth()
	const currentUser = auth.currentUser
	// const currentUser = useContext(UserContext);
	console.log(currentUser)

	return (
		<>
			<UserProvider>
				<div className='d-flex mx-auto fs-5 text-white'>
					Logged as: {currentUser.email}
					
				</div>
			</UserProvider>
		</>
	);
};

export default LoggedAs;
