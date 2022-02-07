import { Row, Col, Button, Container } from "react-bootstrap";
import styles from "./Users.module.css";
import removeUser from "../../../RestaurantApi/Users/RemoveUser";
import getAllUsers from "../../../RestaurantApi/Users/GetAllUsers";
import { useEffect, useState } from "react";
import Cart from "../../Modal/Cart";

const Users = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [isReloaded, setIsReloaded] = useState({});
  const [cartIsShown, setCartIsShown] = useState(false);
  const [clickedUserId, setClickedUserId] = useState();

  const setClickedIdAndShowCart = (id) => {
    return () => {
      showCartHandler();
      setClickedUserId(id);
    };
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const createRemoveUserFunction = (id) => {
    const removingUser = () => {
      removeUser(id).then(() => setIsReloaded({}));
      hideCartHandler();
    };
    return removingUser;
  };

  const getUsers = async () => {
    try {
      const savedUsers = await getAllUsers();
      setAllUsers(savedUsers);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => getUsers(), [isReloaded, props.onUsersAdded]);

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
      {cartIsShown && (
        <Cart
          onClose={hideCartHandler}
          onConfirm={createRemoveUserFunction(clickedUserId)}
        />
      )}
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
                onClick={setClickedIdAndShowCart(user.id)}
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
