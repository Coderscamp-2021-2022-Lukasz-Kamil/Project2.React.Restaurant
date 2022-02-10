import FormContainer from "../UserForm/FormContainer";
import { Container } from "react-bootstrap";
import UsersTable from "../UserForm/UsersTable";
const AdminMembers = () => {
  return (
    <Container
      style={{
        maxWidth: "100%",
        alignItems: "center",
        padding: "0",
        margin: "0",
        maxHeight: "85vh",
      }}
    >
      <FormContainer />
    </Container>
  );
};

export default AdminMembers;
