<<<<<<< HEAD
const AdminMembers = () => {
    return(
        <>Admin Members</>
    )
};

export default AdminMembers;
=======
import FormContainer from "../UserForm/FormContainer";
import { Container } from "react-bootstrap";
import UsersTable from "../UserForm/UsersTable";
const AdminMembers = () => {
  return (
    <Container
      style={{
        width: "100%",
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
>>>>>>> origin
