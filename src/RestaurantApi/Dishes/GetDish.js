import { getAllDishes } from './GetAllDishes';

export const getDish = async(id) => {
  try{
    const dishesData = await getAllDishes();
    return dishesData.find(element => element.id === id);
  } catch (e) {
      console.log(e);
  }
};