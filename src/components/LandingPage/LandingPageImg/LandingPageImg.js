import image from "./bg-landingPage.png";

const LandingPageImg = () => {
    return (
        <div className='container-fluid' style={{
					backgroundImage: `url(${image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "100vh",
				}}></div>
    );
}

export default LandingPageImg;