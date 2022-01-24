import background from "./bg-landingPage.jpg";
import LandingPageBody from "../LandingPageBody/LandingPageBody";

const LandingPageImg = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' 
		style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "100vh",
				}}>

				<LandingPageBody />


		</div>
    );
}

export default LandingPageImg;