import React, {useState} from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Container} from "react-bootstrap";
import ToggleSwitch from "./ToggleSwitch";
import  "./MenuPage.css"
import MenuCategories from "./MenuCategiories";
import MenuDishes from "./MenuDishes";
import items from "./MenuList"


const allCategories = ['All', ...new Set(items.map(item => item.category))];


const MenuPage = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="background">
  
      <Container fluid className="buttons-and-switch-grid dishes-container">
        <div className=" buttonsAndSwitch">
        <MenuCategories button={buttons} filter={filter}/>
        </div>
        <React.Fragment>
          <div className="d-flex vege-switch">
          <ToggleSwitch label=" "/>
          <div className="vege-text">Vegetarian</div>
          </div>
        </React.Fragment>
      </Container>
      <Container fluid className="dishes-card-container">

          <MenuDishes menuItem={menuItem} />

      </Container>
    </div>
  );
};


export default MenuPage;
