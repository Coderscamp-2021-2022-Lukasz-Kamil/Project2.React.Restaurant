import {
  Container,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AddingUserForm.module.css";
import { useState } from "react";

const AddingUserForm = ({ addUser }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const enteredPhoneHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUserData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      password: enteredPassword,
    };

    addUser(newUserData);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredPassword("");
  };

  return (
    <Container style={{ padding: "0" }}>
      <Form
        className={` ${styles.inputsContainer} w-100 d-flex flex-column align-items-center p-3`}
        style={{
          backgroundColor: "#C4C4C4",
        }}
        onSubmit={submitHandler}
      >
        <FormGroup style={{ minWidth: "50%" }}>
          <FormControl
            className={`p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Name and Surname"
            type="text"
            value={enteredName}
            onChange={enteredNameHandler}
            required
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="E-mail"
            type="email"
            value={enteredEmail}
            onChange={enteredEmailHandler}
            required
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Phone number"
            type="tel"
            value={enteredPhone}
            onChange={enteredPhoneHandler}
            required
          ></FormControl>
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Password"
            type="password"
            value={enteredPassword}
            onChange={enteredPasswordHandler}
            required
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
          type="submit"
        >
          <img
            src="/icons/plus_icon.png"
            className="img-fluid"
            alt=""
            style={{
              width: "2vw",
              marginRight: "5px",
            }}
          />
          Add new member
        </Button>
      </Form>
    </Container>
  );
};

export default AddingUserForm;
