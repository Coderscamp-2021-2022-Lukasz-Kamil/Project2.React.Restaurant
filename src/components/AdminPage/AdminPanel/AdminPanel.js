import styles from "./AdminPanel.module.css";
import { Icon, InlineIcon } from "@iconify/react";

const AdminPanel = () => {
  return (
    <div className={styles.container}>
      <Icon icon="simple-icons:codechef" className={styles.logo} />
      <h1 className={styles.title}> Paradiso Italiano</h1>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${styles.email}`}
          type="email"
          placeholder="e-mail"
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type="password"
          placeholder="password"
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
