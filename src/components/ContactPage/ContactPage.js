import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import image from "./contactImage.png";

const ContactPage = () => {
  return (
    <div
      className="container-fluid d-flex"
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        padding: "0",
      }}
    >
      <div
        className="container-fluid  w-100 h-100"
        style={{
          backgroundColor: "rgba(7, 7, 7, 0.7)",
          fontFamily: "Roboto",
        }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Col
            style={{
              height: "50vh",
              width: "50vw",
              lineHeight: "1.4",
              fontSize: "clamp(0.6rem, 2.5vw, 1.6rem)",
            }}
          >
            <Card
              className="w-70 h-100 bg-transparent text-white "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Card.Title
                style={{
                  textTransform: "uppercase",
                  fontSize: "clamp(0.6rem, 3vw, 2.4rem)",
                  fontFamily: "Rufina",
                  marginBottom: "30px",
                }}
              >
                Opening hours
              </Card.Title>
              <Card.Text style={{ marginTop: "20px" }}>
                Mon-Sun 12am to 10pm
              </Card.Text>
              <img
                className="fluid"
                src="/icons/icon_phone.png"
                style={{ height: "8vh" }}
              />
              <Card.Text style={{ marginTop: "20px" }}>
                +48 665-331-225
              </Card.Text>
              <img
                className="fluid"
                src="/icons/icon_envelope.png"
                style={{ height: "8vh" }}
              />
              <Card.Text style={{ marginTop: "20px" }}>
                support@paradiso.pl
              </Card.Text>
            </Card>
          </Col>
          <Col
            style={{
              height: "50vh",
              width: "100px",
              fontSize: "clamp(0.6rem, 2.5vw, 1.6rem)",
            }}
          >
            <Card
              className="w-70 h-100 bg-transparent text-white "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Card.Title
                style={{
                  textTransform: "uppercase",
                  fontSize: "clamp(0.6rem, 3vw, 2.4rem)",
                  fontFamily: "Rufina",
                  marginBottom: "30px",
                }}
              >
                find us here
              </Card.Title>
              <Card.Text style={{ width: "50%", marginTop: "20px" }}>
                Powstańców Śląskich 5, 53-332 Wrocław, Poland
              </Card.Text>
              <img
                className="fluid"
                src="/photos/map.png"
                style={{ height: "90vh", width: "30vw" }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
