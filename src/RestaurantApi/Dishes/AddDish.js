import { db } from "../../firebase"
import { collection, addDoc} from 'firebase/firestore'

export const addDish = async (dishName, dishCost, dishCategory, dishImgLink, dishDescription, dishIngredientsList, dishSpiciness, dishIsVege) => {
  const dishesCollectionRef = collection(db, 'dishes');
  try {
    console.log(dishName)
    await addDoc(dishesCollectionRef, {
      dish_name: dishName, 
      dish_cost: Number(dishCost), 
      dish_category: dishCategory, 
      dish_img_link: dishImgLink,
      dish_description: dishDescription,
      dish_ingredient_list: dishIngredientsList,
      dish_spiciness: Number(dishSpiciness),
      dish_is_vege: Boolean(dishIsVege),
    });
  } catch (e) {
    console.log(e);
  }
};



