import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditUserForm.module.css";
import getUser from "../../../RestaurantApi/Users/GetUser";
import editUser from "../../../RestaurantApi/Users/EditUser";

const EditUserForm = (props)  => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [message, setMessage] = useState('')
  
  const setDefaultValues = () => {
    setNewPassword('');
    setConfirmationPassword('');
  }

  const updateUser = () => {
    if (newPassword.length < 5 && newPassword.length > 0) {
      setMessage('Your new password is too short!')
    } else if( newPassword !== confirmationPassword ){
      setMessage('You enter wrong confirmation password!')
    } else {
      editUser(name, email, newPassword)
      .then(data => {
        setMessage(data);
        setDefaultValues();
      })
      .catch((err) => {
        setMessage(err.message);
      });
      
    };
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const newPasswordChangeHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const confirmationPasswordChangeHandler = (event) => {
    setConfirmationPassword(event.target.value);
  };


  useEffect(() => {
    getUser().then(userData => {
      if (userData !== null) {
        setName(userData.displayName);
        setEmail(userData.email);
      }
    });
    
  }, []);
  
  return (
    <Container className={`w-75 ${styles.editUserContainer}`}>
      <Container
        className={`d-flex mb-5 pb-2 mt-5 pt-2 shadow-none justify-content-center text-white ${styles.editTextContainer} `}
        style={{
          backgroundColor: "#777777",
        }}
      >
        Edit your profile
      </Container>
      
      <Form
        className={` ${styles.inputsContainer} w-100 d-flex flex-column align-items-center p-4`}
        style={{
          backgroundColor: "#C4C4C4",
        }}
      >
        <FormGroup
          className={`d-flex flex-column pt-5 pb-3 `}
          style={{ minWidth: "70%" }}
        >
          <FormControl
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Name"
            type="text"
            value={name}
            onChange={nameChangeHandler} 
            required
          />
          <FormControl
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="E-mail"
            type="text"
            value={email} 
            onChange={emailChangeHandler} 
            required
          />
          <FormControl
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Enter new password"
            type="password"
            value={newPassword}
            onChange={newPasswordChangeHandler} 
            required
          />
          <FormControl
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Confirm new password"
            type="password"
            value={confirmationPassword}
            onChange={confirmationPasswordChangeHandler} 
            required
          />
          {message}
          <Button
            onClick={updateUser}
            className={`align-self-end mt-3 shadow-none`}
            style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "100px", padding: "0px"}}
          >
            <img
              src="/icons/add-dish-submit-button.png"
              alt="Sumbit Button"
            />
          </Button> 
        </FormGroup>
      </Form>
    </Container>
      
  )
}

export default EditUserForm;