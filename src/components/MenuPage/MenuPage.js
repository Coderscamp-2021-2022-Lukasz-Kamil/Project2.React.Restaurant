import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Container} from "react-bootstrap";
import ToggleSwitch from "./ToggleSwitch";
import  "./MenuPage.css"
import MenuCategories from "./MenuCategiories";
import MenuDishes from "./MenuDishes";
import getAllDishes  from "../../RestaurantApi/Dishes/GetAllDishes";



  const MenuPage = () => {
  const [buttons] = useState(['All','Pizza','Soup','Pasta','Dessert','Starter']);
  const [dishes, setDishes] = useState([]);
  const [primalDishes, setPrimalDishes] = useState([]);
  const [vegeDishes, setVegeDishes] = useState([]);
  const [isVege, setIsVege] = useState(false)

  const isVegeHandler = () => {
    setIsVege(!isVege);
  };

  const vegeFilter = (dishesList) => {
    return dishesList.filter(item => item.dish_is_vege);
  }


  const filter = (button) =>{
    
    if(button === 'All'){
      setVegeDishes(vegeFilter(primalDishes));
      setDishes(primalDishes);
      return;
    }
    
    const filteredData = primalDishes.filter(item => item.dish_category ===  button);

    setVegeDishes(vegeFilter(filteredData));
    setDishes(filteredData);
  }

  useEffect(() => {
    getAllDishes().then(data => {
      setPrimalDishes(data);
      setDishes(data);
      setVegeDishes(vegeFilter(data));
    });
  }, []);

  return (
    <div className="background">
  
      <Container fluid className="buttons-and-switch-grid dishes-container">
        <div className=" buttonsAndSwitch">
        <MenuCategories button={buttons} filter={filter}/>
        </div>
        <React.Fragment>
          <div className="d-flex vege-switch">
          <ToggleSwitch label=" " isVegeHandler={isVegeHandler}/>
          <div className="vege-text">Vegetarian</div>
          </div>
        </React.Fragment>
      </Container>
      <Container fluid className="dishes-card-container">
          <MenuDishes dishes={isVege ? vegeDishes : dishes} />
      </Container>
    </div>
  );
};


export default MenuPage;