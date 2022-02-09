import styles from "./UsersTable.module.css";
import { Row, Col, Container } from "react-bootstrap";

const UsersTable = ({}) => {
  return (
    <Container
      className="d-flex flex-column "
      style={{
        padding: "0",
        height: "auto",
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
    </Container>
  );
};

export default UsersTable;
