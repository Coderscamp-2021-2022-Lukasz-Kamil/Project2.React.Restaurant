import React from "react";
import MenuDish from "./MenuDish";
import  getAllDishes  from "../../RestaurantApi/Dishes/GetAllDishes";
import { useState, useEffect } from "react";

const MenuDishes = ({menuItem}) =>{
    /* 
    
    Zanim dodałem filtr, MenuDish wyglądało tak, MenuList.js nie było utworzone i pobierało dane potraw z firebase'a. Zarówno w filtrze, jak i w daniach, trzeba w returnie skorzystać z .map i nie wiem jak to ze sobą pogodzić.
    
    const MenuDishes = () =>{
        const [dishes, setDishes] = useState([]);
        
            useEffect(() => {
        getAllDishes().then(data => {
        setDishes(data);
        });

    
        }, []);

    return (
        dishes.map((dish) =>(
            <MenuDish dish={dish.dish_name} description={dish.dish_description} ingredients={dish.dish_ingredient_list} spiciness={dish.dish_spiciness} vege={""+dish.dish_is_vege} price={dish.dish_cost} dishImage={dish.dish_img_link} key={dish.id} />
        ))    
    );
    
    }

    export default MenuDishes;
    
    */



    return (
        menuItem.map((item, index) =>(
            <MenuDish dish={item.dish} price={item.price} dishImage={item.dishImage} key={item.key} />
        ))    
    );
    
}

export default MenuDishes;