   import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Container, Button} from "react-bootstrap";

import  "../../MenuPage/MenuPage.css"
import "./AdminMenu.css"
import AdminDishes from "./AdminDishes";
import getAllDishes  from "../../../RestaurantApi/Dishes/GetAllDishes";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigation = useNavigate();

  const navigationHandler = () => {
    navigation("/admin/dish", {state: {dishId: '', editMode: false}});
  };


  const [dishes, setDishes] = useState([]);
  const [primalDishes, setPrimalDishes] = useState([]);

  const [vegeDishes, setVegeDishes] = useState([]);
  const [isVege, setIsVege] = useState(false)


  useEffect(() => {
    getAllDishes().then(data => {
      setPrimalDishes(data);
      setDishes(data);
      
    });
  }, []);

  return (
    <div>
      <Container fluid className="d-flex add-button-container ">
          <Button onClick={navigationHandler} className="menu-button shadow-none border-none btn add-dish" >Add new Dish</Button>
      </Container>
      <Container fluid className="dishes-card-container">
          <AdminDishes dishes={isVege ? vegeDishes : dishes} />
      </Container>
    </div>
  );
};





export default AdminMenu;