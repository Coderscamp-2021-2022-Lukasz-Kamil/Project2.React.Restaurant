import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPanel.module.css";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../Title/Title";

const AdminPanel = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/admin/home");
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsSignedIn(true);
        navigation();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.loginPage}>
      <Form
        className="loginPanel"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40vw",
          minHeight: "40vh",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="/icons/logo_icon.png" className="fluid" />
        <Title />
        <Form.Group
          style={{ display: "flex", flexDirection: "column", width: "20vw" }}
        >
          <Form.Group
            className="mb-3"
            style={{
              width: "100%",
              height: "8vh",
              margin: "5px 0",
              backgroundColor: "aqua",
              backgroundColor: "transparent",
              borderRadius: "4px",
              borderColor: "#fff",
              color: "#fff",
            }}
          >
            <Form.Control
              className="input"
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "8vh",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "8vh",
              }}
            />
          </Form.Group>

          {isSignedIn === true ? (
            console.log("signed in")
          ) : (
            <Button
              style={{
                height: "8vh",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "4px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(0.7rem, 2vw, 1rem)",
                fontWeight: "bold",
                backgroundColor: "#e1651f",
                borderColor: "transparent",
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.26)",
                textTransform: "uppercase",
              }}
              type="button"
              onClick={signInUser}
            >
              Sign in
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};
export default AdminPanel;
