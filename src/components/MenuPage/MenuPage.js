import React, { useState, useEffect, useLayoutEffect } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Container, Button} from "react-bootstrap";
import ToggleSwitch from "./ToggleSwitch";
import  "./MenuPage.css"
import MenuCategories from "./MenuCategiories";
import MenuDishes from "./MenuDishes";
import getAllDishes  from "../../RestaurantApi/Dishes/GetAllDishes";




const MenuPage = () => {
  const [buttons, setButtons] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [primalDishes, setPrimalDishes] = useState([]);

  const [vegeOnly, setVegeOnly] = useState(false) 

  const vegeFilter = (checkbox) => {
    if (checkbox.checked === false){
      setDishes(primalDishes);
      return
    }
  }



  const filter = (button) =>{    
    if(button === 'All'){
      setDishes(primalDishes);
      return;
    
    }
    
    const filteredData = primalDishes.filter(item => item.dish_category === button);
    setDishes(filteredData)
  }
  

  useLayoutEffect(() => {
    getAllDishes().then(data => {
      setPrimalDishes(data);
      setDishes(data);
      setButtons(['All', ...new Set(data.map(item => item.dish_category))])
    });
  }, []);
  
//<p>Switch is {vegeOnly ? "on" : "off"}</p>
  return (
    <div className="background">
  
      <Container fluid className="buttons-and-switch-grid dishes-container">
        <div className=" buttonsAndSwitch">
        <MenuCategories button={buttons} filter={filter}/>
        </div>
        <React.Fragment>
          <div className="d-flex vege-switch">
          <ToggleSwitch label=" " />
          <div className="vege-text">Vegetarian</div>
          </div>
        </React.Fragment>
      </Container>
      <Container fluid className="dishes-card-container">
          <MenuDishes dishes={dishes} />
      </Container>
    </div>
  );
};


export default MenuPage;
