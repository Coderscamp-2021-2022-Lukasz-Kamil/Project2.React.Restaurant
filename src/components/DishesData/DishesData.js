import { useState, useEffect } from "react";
import { db } from "../../firebase"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

import TestDisplayDish from "./TestDisplayDish";
import TestDishesForm from "./TestDishesForm";

const DishesData = () => {
  const [userInput, setUserInput] = useState({
    dishName: '',
    dishCost: 0,
    dishCategory: '',
    dishImgLink: '',
    dishDescription: '',
    dishIngredientsList: '',
    dishSpiciness: 0,
    dishIsVege: false,
  });

  const [dishes, setDishes] = useState([]);
  const dishesCollectionRef = collection(db, 'dishes');

  const createDish = async () => {
    try {
      await addDoc(dishesCollectionRef, {
        dish_name: userInput.dishName, 
        dish_cost: Number(userInput.dishCost), 
        dish_category: userInput.dishCategory, 
        dish_img_link: userInput.dishImgLink,
        dish_description: userInput.dishDescription,
        dish_ingredient_list: userInput.dishIngredientsList,
        dish_spiciness: Number(userInput.dishSpiciness),
        dish_is_vege: Boolean(userInput.dishIsVege),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateDish = async (id) => {
    const userDoc = doc(db, "dishes", id);
    const newFields = {
      dish_name: userInput.dishName, 
      dish_cost: Number(userInput.dishCost), 
      dish_category: userInput.dishCategory, 
      dish_img_link: userInput.dishImgLink,
      dish_description: userInput.dishDescription,
      dish_ingredient_list: userInput.dishIngredientsList,
      dish_spiciness: Number(userInput.dishSpiciness),
      dish_is_vege: Boolean(userInput.dishIsVege),
    };
    try {
      await updateDoc(userDoc, newFields);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteDish = async (id) => {
    const userDoc = doc(db, "dishes", id);
    try {
      await deleteDoc(userDoc);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {

    const getDishes = async () => {
      try {
        const data = await getDocs(dishesCollectionRef);
        setDishes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      } catch (e) {
        console.log(e);
      }      
    };
    getDishes();
  }, []);

  return (
    <div className="dish-data">
      <TestDishesForm 
        createDish={createDish} 
        setUserInput={setUserInput} 
      />
      <TestDisplayDish 
        dishes={dishes} 
        updateDish={updateDish} 
        deleteDish={deleteDish} 
      />
    </div>
  );
};


export default DishesData;