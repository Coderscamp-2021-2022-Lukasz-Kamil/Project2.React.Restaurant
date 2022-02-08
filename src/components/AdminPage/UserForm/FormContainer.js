import { Container } from "react-bootstrap";
import Users from "./Users";
import AddingUserForm from "./AddingUserForm";
import styles from "./FormContainer.module.css";
import { useState } from "react";

const FormContainer = () => {
  const [isNewUserAdded, setIsUserAdded] = useState({});

  return (
    <Container
      className={` ${styles.form} w-50 p-0 d-flex flex-column align-items-center justify-content-center`}
      style={{
        fontFamily: "Roboto",
        minHeight: "90vh",
      }}
    >
      <AddingUserForm onUsersAdded={setIsUserAdded} />
      <Users onUsersAdded={isNewUserAdded} />
    </Container>
  );
};

export default FormContainer;
