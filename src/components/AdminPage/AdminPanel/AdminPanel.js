import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPanel.module.css";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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
    <div className={styles.container}>
      <img className={styles.logo} src="/icons/logo_icon.png" />
      <h1 className={styles.title}> Paradiso Italiano</h1>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${styles.email}`}
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignedIn === true ? (
          console.log("signed in")
        ) : (
          <button className={styles.button} type="submit" onClick={signInUser}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
