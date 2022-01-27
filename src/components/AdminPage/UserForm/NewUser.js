import { Row, Col, Button, Container } from "react-bootstrap";
import styles from "./NewUser.module.css";

const NewUser = ({ users }) => {
  return (
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
      {users.map((user) => (
        <Row
          className={`${styles.usersContainer} w-100 mh-25 mt-2 align-self-start align-items-center p-0 m-0 justify-content-center`}
          key={user.email}
        >
          <Col className="col-sm-3">{user.name}</Col>
          <Col className="col-sm-3">User</Col>
          <Col className={`${styles.emailColumn} col-sm-4`}>{user.email}</Col>
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
  );
};
export default NewUser;
