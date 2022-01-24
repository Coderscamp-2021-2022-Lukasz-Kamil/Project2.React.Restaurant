import { Row, Col, Card } from "react-bootstrap";
import image from "./contactImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div
      className={`container-fluid d-flex flex-wrap vh-100 w-100 p-0 m-0 `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={`container-fluid d-flex flex-wrap h-100 mw-100 p-0 m-0 justify-content-center `}
        style={{
          backgroundColor: "rgba(7, 7, 7, 0.7)",
          fontFamily: "Roboto",
        }}
      >
        <Row
          className={`d-flex flex-row ${styles.container}`}
          style={{
            textAlign: "center",
            alignItems: "start",
            width: "100%",
            flexFlow: "wrap",
            height: "auto",
            paddingTop: "5vh",
          }}
        >
          <Col
            className={` d-flex flex-column text-white vh-50  align-items-center   ${styles.row}`}
            style={{
              lineHeight: "1.2",
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
              borderStyle: "none",
            }}
          >
            <Card.Title
              className={`{styles.title}`}
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
                fontFamily: "Rufina",
                marginBottom: "10px",
              }}
            >
              Opening hours
            </Card.Title>
            <Card.Text
              className={`${styles.text}`}
              style={{ marginTop: "10px" }}
            >
              Mon-Sun 12am to 10pm
            </Card.Text>
            <img
              className={`img-responsive ${styles.icon} `}
              src="/icons/icon_phone.png"
              alt=""
            />
            <Card.Text className="mt-3">+48 665-331-225</Card.Text>
            <img
              className={`img-responsive ${styles.icon}`}
              src="/icons/icon_envelope.png"
              alt=""
            />
            <Card.Text className="mt-3">support@paradiso.pl</Card.Text>
          </Col>
          <Col
            className={`h-auto ${styles.row}`}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            <Card className="bg-transparent text-white align-items-center border-0 ">
              <Card.Title
                className="text-uppercase"
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
                  fontFamily: "Rufina",
                  marginBottom: "10px",
                }}
              >
                find us here
              </Card.Title>
              <Card.Text
                className={styles.address}
                style={{ width: "50%", marginTop: "10px" }}
              >
                Powstańców Śląskich 5, 53-332 Wrocław, Poland
              </Card.Text>

              <div
                id="map-container-google-1"
                className={`z-depth-1-half map-container mb-2  ${styles.map}`}
                style={{ height: "45vh", width: "70%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.465802010423!2d17.024483615651615!3d51.099865479570305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26db7d28d53%3A0xb47502ed0ae6b177!2zUG93c3RhxYRjw7N3IMWabMSFc2tpY2ggNSwgNTMtMzMyIFdyb2PFgmF3LCBQb2xza2E!5e0!3m2!1spl!2ses!4v1642767850972!5m2!1spl!2ses"
                  style={{ height: "100%", width: "100%" }}
                  className={`border-0 `}
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
