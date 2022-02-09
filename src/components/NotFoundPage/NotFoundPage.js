import errorPhoto from "./404.jpg";
import styles from "./NotFoundPage.module.css";
import LandingPage from "../LandingPage/LandingPage";

const NotFound = () => {
  return (
    <div className={styles.pageContainer}>
      <a href="http://localhost:3000/">
        <button className={styles.backHomeButton}> Back Home</button>
      </a>
      <div
        data-testid="background"
        className="errorPhoto"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url(${errorPhoto})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          width: "100vw",
        }}
      ></div>
    </div>
  );
};

export default NotFound;
