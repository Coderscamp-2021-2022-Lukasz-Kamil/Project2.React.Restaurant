import { Container, Row, Col, Card } from "react-bootstrap";
import image from "./contactImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div
      className={`container-fluid vh-100 w-100`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        padding: "0",
      }}
    >
      <div
        className={`container-fluid d-flex flex-wrap h-100 mw-100 align-items-end justify-content-center pb-2 `}
        style={{
          backgroundColor: "rgba(7, 7, 7, 0.7)",
          fontFamily: "Roboto",
        }}
      >
        <Row
          className={`d-flex flex-row vh-80 w-100 flex-wrap ${styles.container} `}
          style={{
            textAlign: "center",
          }}
        >
          <Col
            className="bg-transparent text-white h-auto w-100 justify-content-center align-items-center"
            style={{
              lineHeight: "1.4",
              fontSize: "clamp(0.8rem, 2.5vw, 1.6rem)",
              borderStyle: "none",
            }}
          >
            <Card.Title
              className="mb-5"
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
                fontFamily: "Rufina",
              }}
            >
              Opening hours
            </Card.Title>
            <Card.Text className="mt-3">Mon-Sun 12am to 10pm</Card.Text>
            <img
              className="fluid"
              src="/icons/icon_phone.png"
              style={{ height: "6vh" }}
            />
            <Card.Text className="mt-3">+48 665-331-225</Card.Text>
            <img
              className="fluid"
              src="/icons/icon_envelope.png"
              style={{ height: "6vh" }}
            />
            <Card.Text className="mt-3">support@paradiso.pl</Card.Text>
          </Col>
          <Col
            className="h-auto align-items-end"
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 1.6rem)",
            }}
          >
            <Card
              className="bg-transparent text-white align-items-center "
              style={{
                borderStyle: "none",
              }}
            >
              <Card.Title
                style={{
                  textTransform: "uppercase",
                  fontSize: "clamp(0.6rem, 3vw, 2.4rem)",
                  fontFamily: "Rufina",
                }}
              >
                find us here
              </Card.Title>
              <Card.Text className="mt-3 w-50">
                Powstańców Śląskich 5, 53-332 Wrocław, Poland
              </Card.Text>

              <div
                id="map-container-google-1"
                className={`z-depth-1-half map-container ${styles.map}`}
                style={{ height: "50vh", width: "80%", marginBottom: "10px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.465802010423!2d17.024483615651615!3d51.099865479570305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26db7d28d53%3A0xb47502ed0ae6b177!2zUG93c3RhxYRjw7N3IMWabMSFc2tpY2ggNSwgNTMtMzMyIFdyb2PFgmF3LCBQb2xza2E!5e0!3m2!1spl!2ses!4v1642767850972!5m2!1spl!2ses"
                  style={{ border: "0", width: "100%", height: "50vh" }}
                  className={styles.map}
                  loading="lazy"
                ></iframe>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
