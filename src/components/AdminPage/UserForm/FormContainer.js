import { Container } from "react-bootstrap";
import Users from "./Users";
import AddingUserForm from "./AddingUserForm";
import styles from "./FormContainer.module.css";
import { useState } from "react";

const FormContainer = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((previous) => [...previous, user]);
  };

  return (
    <Container
      className={` ${styles.form} w-50 p-0 d-flex flex-column align-items-center justify-content-center`}
      style={{
        fontFamily: "Roboto",
        minHeight: "90vh",
      }}
    >
      <AddingUserForm addUser={addUser} />
      <Users users={users} />
    </Container>
  );
};

export default FormContainer;
