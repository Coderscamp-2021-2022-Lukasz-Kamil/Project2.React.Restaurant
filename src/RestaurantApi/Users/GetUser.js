import { getAllUsers } from "./GetAllUsers";

export const getUser = async(user_id) => {
  try{
    const dishesData = await getAllUsers();
    return dishesData.find(element => element.user_id === user_id);
  } catch (e) {
      console.log(e);
  }
};