import { Container, Row, Col, Card } from "react-bootstrap";
import image from "./contactImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <Container
      data-testid="background"
      className={` ${styles.sth}  h-100 mw-100  p-0 m-0 `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Container
        className={`container-fluid d-flex flex-wrap h-100 mw-100 p-0 m-0 justify-content-center `}
        style={{
          backgroundColor: "rgba(7, 7, 7, 0.7)",
          fontFamily: "Roboto",
        }}
      >
        <Row
          className={`d-flex flex-row flex-wrap w-100 mh-75 pt-4 text-center align-items-start justify-content-center ${styles.container}`}
        >
          <Col
            className={`col-xl-6 col-lg-6 col-md-9 col-xs-7 d-flex flex-column text-white align-items-center border-0 ${styles.row}`}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            <Card.Title
              className={` mb-2 text-uppercase ${styles.title}`}
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
                fontFamily: "Rufina",
              }}
            >
              Opening hours
            </Card.Title>
            <Card.Text className={` mt-2 ${styles.text}`}>
              Mon-Sun 12am to 10pm
            </Card.Text>
            <img
              className={`img-responsive ${styles.icon} `}
              src="/icons/icon_phone.png"
              alt="phone"
            />
            <Card.Text className={`mt-2 ${styles.text}`}>
              +48 665-331-225
            </Card.Text>
            <img
              className={`img-responsive ${styles.icon}`}
              src="/icons/icon_envelope.png"
              alt="envelope"
            />
            <Card.Text className={`mt-2 ${styles.text}`}>
              support@paradiso.pl
            </Card.Text>
          </Col>
          <Col
            className={`col-xl-6 col-lg-6 col-md-9 col-xs-7 h-auto d-flex flex-column bg-transparent text-white align-items-center ${styles.row}`}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            <Card.Title
              className={`${styles.title} text-uppercase mb-3`}
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
                fontFamily: "Rufina",
              }}
            >
              find us here
            </Card.Title>
            <Card.Text
              className={` w-50 mt-2  ${styles.address} ${styles.text}`}
            >
              Powstańców Śląskich 5, 53-332 Wrocław, Poland
            </Card.Text>

            <Container
              data-testid="map-container-google-1"
              className={`z-depth-1-half map-container mb-2 w-75 ${styles.map}`}
              style={{ height: "40vh" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.465802010423!2d17.024483615651615!3d51.099865479570305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26db7d28d53%3A0xb47502ed0ae6b177!2zUG93c3RhxYRjw7N3IMWabMSFc2tpY2ggNSwgNTMtMzMyIFdyb2PFgmF3LCBQb2xza2E!5e0!3m2!1spl!2ses!4v1642767850972!5m2!1spl!2ses"
                style={{ height: "100%", width: "100%" }}
                className={`border-0 `}
                loading="lazy"
              ></iframe>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactPage;
