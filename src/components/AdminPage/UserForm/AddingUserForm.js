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
import saveUser from "../../../RestaurantApi/Users/AddUser";

const AddingUserForm = ({ addUser }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("+48");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const isValid =
    enteredPassword != null &&
    enteredPassword.trim().length > 5 &&
    enteredPhone.trim().length === 12 &&
    enteredEmail.match(emailFormat);

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailTouched(true);
  };
  const enteredPhoneHandler = (event) => {
    const rawInput = event.target.value;
    const onlyDigits = rawInput
      .substring(3, rawInput.length)
      .replace(/\D/g, "");

    setEnteredPhone("+48".concat(onlyDigits));

    setPhoneTouched(true);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    setPasswordTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUserData = {
      name: enteredName,
      email: enteredEmail,
      phoneNumber: enteredPhone,
      password: enteredPassword,
    };

    addUser(newUserData);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredPassword("");
    setPasswordTouched(false);
    setPhoneTouched(false);
    setEmailTouched(false);
  };

  const isPasswordValid = (event) => {
    setEnteredPassword(event.target.value);
  };

  const checkIfPasswordIsValid = () => {
    if (!passwordTouched) {
      return true;
    }
    return enteredPassword.length > 5;
  };

  const checkIfPhoneIsTooShort = () => {
    return phoneTouched && enteredPhone.length < 12;
  };

  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const checkIfEmailIsValid = () => {
    return emailTouched && !enteredEmail.match(emailFormat);
  };

  const createdUser = () => {
    saveUser(enteredEmail, enteredPassword, enteredName, enteredPhone, "user");
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
          {checkIfEmailIsValid() && (
            <p>Required e-mail format: sth@gmail.com</p>
          )}
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Phone number"
            type="tel"
            value={enteredPhone}
            onChange={enteredPhoneHandler}
            maxLength={12}
            required
          ></FormControl>
          {checkIfPhoneIsTooShort() && <p>Your phone number is too short</p>}
          <FormControl
            className={`mt-2 p-2 shadow-none text-white ${styles.input}   `}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Password"
            type="password"
            value={enteredPassword}
            onChange={enteredPasswordHandler}
            onClick={isPasswordValid}
            required
          ></FormControl>
          {!checkIfPasswordIsValid() && <p>Your password is too short</p>}
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
          disabled={!isValid}
          onClick={createdUser}
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
