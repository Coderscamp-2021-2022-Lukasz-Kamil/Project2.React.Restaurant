import React from "react";
import MenuDish from "./MenuDish";


const MenuDishes = (props) =>{
   return (
        props.dishes.map((item, index) =>(
            <MenuDish dish={item.dish_name} price={item.dish_cost} dishImage={item.dish_img_link} key={item.id} ingredients={item.dish_ingredient_list} description={item.dish_description} category={item.dish_category} isVege={item.dish_is_vege} spiciness={item.dish_spiciness}/>
        ))    
    );
    
}

export default MenuDishes;