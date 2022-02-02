import { db } from "../../firebase"
import { collection, addDoc} from 'firebase/firestore'

const addDish = async (dishName, dishCost, dishCategory, dishImgLink, dishDescription, dishIngredientsList, dishSpiciness, dishIsVege) => {
  const dishesCollectionRef = collection(db, 'dishes');
  try {
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
    return "Dish was sucessfully added";
  } catch (err) {
    throw new Error("Server Error, dish wasn't added");
  }
};

export default addDish;



