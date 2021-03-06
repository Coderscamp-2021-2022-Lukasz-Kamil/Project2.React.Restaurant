import background from "./bg-landingPage.jpg";
import { Card } from "react-bootstrap";
import styles from "./LandingPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div
      data-testid="background"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        maxHeight: "100vh",
      }}
    >
      <div className="container-fluid bg-transparent text-white text-center d-flex flex-column justify-content-center align-items-center h-100 pt-5">
        <Card.Title
          className={styles["title"]}
          style={{
            lineHeight: "0.9",
            fontSize: "clamp(6rem, 16vw, 9rem)",
            fontFamily: "Italianno"
          }}
        >
          Paradiso Italiano
        </Card.Title>
        <Card.Subtitle
          className={styles["subtitle"]}
          style={{
            fontSize: "clamp(1rem, 5vw, 3rem)",
            marginBottom: "2rem",
          }}
        >
          Italian Restaurant
        </Card.Subtitle>
        <Card.Body data-testid="about-container" className={styles["about"]}>
          <Card.Title className={styles["aboutTitle"]}style={{fontFamily:"Ruffina"}}>About</Card.Title>
          <Card.Text data-testid="about-description">
            With this desire was born the idea of ​​creating Paradiso Italiano,
            where you can find real Italian flavors: pizza on a delicate, thin
            crust wood-fired oven, pasta according to Italian recipes and many
            more.
          </Card.Text>
        </Card.Body>
      </div>
    </div>
  );
};

export default LandingPage;
