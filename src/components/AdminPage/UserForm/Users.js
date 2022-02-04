import { Row, Col, Button, Container } from "react-bootstrap";
import styles from "./Users.module.css";
import removeUser from "../../../RestaurantApi/Users/RemoveUser";
import getAllUsers from "../../../RestaurantApi/Users/GetAllUsers";
import { useEffect, useState } from "react";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isReloaded, setIsReloaded] = useState({});
  const removingUser = (id) => {
    removeUser(id).then(() => setIsReloaded({}));
  };

  const getUsers = async () => {
    const savedUsers = await getAllUsers();
    try {
      setAllUsers(savedUsers);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  useEffect(() => getUsers(), [allUsers, isReloaded]);

  return (
    <Container
      className="d-flex w-100 flex-wrap text-center pt-3 align-items-start justify-content-center"
      style={{
        fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
        fontWeight: "bold",
        height: "auto",
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      {allUsers.map((user) => (
        <Row
          className={`${styles.usersContainer} w-100 mh-25 mt-2 align-self-start align-items-center p-0 m-0 justify-content-center`}
          key={user.id}
        >
          <Col className="col-sm-3">{user.name}</Col>
          <Col className="col-sm-3">{user.account_type}</Col>
          <Col className={`${styles.emailColumn} col-sm-4`}>{user.email}</Col>
          <Col className="col-sm-2 justify-content-end ">
            {user.account_type !== "admin" && (
              <Button
                className={` ${styles.deleteButton} shadow border-0`}
                style={{
                  backgroundColor: "red",
                  fontSize: "clamp(0.6rem, 3vw, 1.1rem)",
                  fontWeight: "bold",
                }}
                type="button"
                onClick={() => removingUser(user.id)}
              >
                Delete
              </Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default Users;
