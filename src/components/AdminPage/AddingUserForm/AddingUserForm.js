import {
  Row,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AddingUserForm.module.css";
const AddingUserForm = () => {
  return (
    <Container
      className={` ${styles.form} w-50 p-0 d-flex flex-column align-items-center justify-content-center`}
      style={{ fontFamily: "Roboto", minHeight: "90vh" }}
    >
      <Form
        className={` ${styles.inputsContainer} w-100 d-flex flex-column align-items-center p-3 `}
        style={{ backgroundColor: "#C4C4C4" }}
      >
        <FormGroup style={{ minWidth: "50%" }}>
          <FormControl
            className={`p-2 shadow-none text-white ${styles.input}`}
            placeholder="Name and Surname"
            type="text"
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="E-mail"
            type="email"
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Phone number"
            type="tel"
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Password"
            type="password"
          ></FormControl>
        </FormGroup>
        <Button
          className={`d-flex justify-content-center align-items-center shadow  mt-4 p-1 ${styles.signInButton}`}
          style={{
            lineHeight: "100%",
            backgroundColor: "#777777",
            borderColor: "transparent",
            fontWeight: "bold",
            fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
            minWidth: "27%",
            height: "6vh",
            borderRadius: "0",
          }}
          type="button"
        >
          <img
            src="/icons/plus_icon.png"
            className="img-fluid"
            style={{
              width: "2vw",
              marginRight: "5px",
            }}
          />
          Add new member
        </Button>
      </Form>
      <Container
        className={` ${styles.usersContainer} d-flex flex-wrap align-items-baseline w-100 m-0 p-0 justify-content-center`}
        style={{
          minHeight: "40vh",
          border: "1px solid gray",
        }}
      >
        <Row
          className="w-100 h-25 text-center justify-content-center pt-3 m-0 "
          style={{
            fontWeight: "bold",
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            borderBottom: "10px solid grey",
            width: "100%",
          }}
        >
          <Col className="col-sm-3">Name</Col>
          <Col className="col-sm-3">Account type</Col>
          <Col className={`${styles.emailColumn} col-sm-4`}>E-mail</Col>
          <Col className="col-sm-2">Action</Col>
        </Row>
        <Container
          className="d-flex w-100 text-center pt-3 justify-content-center "
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            fontWeight: "bold",
            minHeight: "40vh",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Row
            className={`${styles.usersContainer} w-100 h-25 align-items-center p-0 m-0 justify-content-center`}
          >
            <Col className="col-sm-3">Gianluigi B.</Col>
            <Col className="col-sm-3">User</Col>
            <Col className={`${styles.emailColumn} col-sm-4`}>
              gianluigibuffon@gmail.com
            </Col>
            <Col className="col-sm-2 justify-content-end ">
              <Button
                className={` ${styles.deleteButton} shadow border-0`}
                style={{
                  backgroundColor: "red",
                  fontSize: "clamp(0.6rem, 3vw, 1.1rem)",
                  fontWeight: "bold",
                }}
                type="button"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default AddingUserForm;
