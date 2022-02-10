import { Container } from "react-bootstrap";
import Users from "./Users";
import AddingUserForm from "./AddingUserForm";
import styles from "./FormContainer.module.css";
import { useState } from "react";
import UsersTable from "./UsersTable";

const FormContainer = () => {
  const [isNewUserAdded, setIsUserAdded] = useState({});

  return (
    <Container
      className={` ${styles.form} w-75 mt-3 d-flex flex-column `}
      style={{
        fontFamily: "Roboto",
        minHeight: "80vh",
        justifyContent: "flex-start",
      }}
    >
      <AddingUserForm onUsersAdded={setIsUserAdded} />
      <UsersTable />
      <Users onUsersAdded={isNewUserAdded} />
    </Container>
  );
};

export default FormContainer;
