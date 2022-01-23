import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "./AdminPanel.module.css";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../Title/Title";

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookie] = useCookies(["isSignedIn"]);
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/admin/home");
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setCookie("isSignedIn", true, { path: "/" });
        navigation();
      })
      .catch((err) => {
        alert("Invalid e-mail or password!");
      });
  };

  return (
    <div className={styles.loginPage}>
      <Form className="d-flex flex-column mw-40 mh-40 p-3 justify-content-center text-center align-items-center">
        <img src="/icons/logo_icon.png" className="fluid" alt="" />
        <Title />
        <FormGroup
          className={`d-flex flex-column ${styles.container}`}
          style={{ minWidth: "20vw" }}
        >
          <FormGroup
            className={`mb-3 text-white bg-transparent rounded mt-3 mb-3 ${styles.form}`}
            style={{
              height: "8vh",
              borderColor: "#fff",
            }}
          >
            <FormControl
              className="input"
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "8vh",
              }}
            />
          </FormGroup>

          <FormGroup className="mb-3 ">
            <FormControl
              className="input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "8vh",
              }}
            />
          </FormGroup>
          <Button
            className={`p-2 rounded text-uppercase mt-2 shadow ${styles.signInButton}`}
            style={{
              height: "8vh",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(0.7rem, 2vw, 1rem)",
              fontWeight: "bold",
              backgroundColor: "#e1651f",
              borderColor: "transparent",
            }}
            type="button"
            onClick={signInUser}
          >
            Sign in
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default AdminPanel;
