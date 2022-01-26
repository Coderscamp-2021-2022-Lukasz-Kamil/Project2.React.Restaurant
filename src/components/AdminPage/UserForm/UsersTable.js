import styles from "./UsersTable.module.css";
import { Row, Col, Button, Container } from "react-bootstrap";

const NewUser = ({ users }) => {
  return (
    <Container
      className="d-flex flex-column "
      style={{
        padding: "0",
        height: "50vh",
        minWidth: "100%",
      }}
    >
      <Row
        className="w-100 text-center justify-content-center pt-3 m-0 "
        style={{
          fontWeight: "bold",
          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
          borderBottom: "10px solid grey",
          width: "100%",
          alignSelf: "flex-start",
          height: "10vh",
        }}
      >
        <Col className="col-sm-3">Name</Col>
        <Col className="col-sm-3">Account type</Col>
        <Col className={`${styles.emailColumn} col-sm-4`}>E-mail</Col>
        <Col className="col-sm-2">Action</Col>
      </Row>
      <Container
        className="d-flex w-100 flex-wrap text-center pt-3 align-items-start justify-content-center"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
          fontWeight: "bold",
          height: "auto",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        {users.map((user, id) => (
          <Row
            className={`${styles.usersContainer} w-100 mh-25 mt-2 align-self-start align-items-center p-0 m-0 justify-content-center`}
          >
            <Col className="col-sm-3" key={user.id}>
              {user.name}
            </Col>
            <Col className="col-sm-3" key={user.id}>
              User
            </Col>
            <Col className={`${styles.emailColumn} col-sm-4`} key={user.id}>
              {user.email}
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
        ))}
      </Container>
    </Container>
  );
};

export default NewUser;
