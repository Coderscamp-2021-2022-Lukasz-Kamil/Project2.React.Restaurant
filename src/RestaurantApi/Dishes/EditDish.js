import { db } from "../../firebase"
import { updateDoc, doc} from 'firebase/firestore'

const editDish = async (id, dishName, dishCost, dishCategory, dishImgLink, dishDescription, dishIngredientsList, dishSpiciness, dishIsVege) => {
  const dishDoc = doc(db, "dishes", id);
  const newFields = {
    dish_name: dishName, 
    dish_cost: Number(dishCost), 
    dish_category: dishCategory, 
    dish_img_link: dishImgLink,
    dish_description: dishDescription,
    dish_ingredient_list: dishIngredientsList,
    dish_spiciness: Number(dishSpiciness),
    dish_is_vege: Boolean(dishIsVege),
  };
  try {
    await updateDoc(dishDoc, newFields);
    return "Dish was sucessfully edited";
  } catch (err) {
    throw new Error("Server Error, dish wasn't edited");
  }
};

export default editDish;
