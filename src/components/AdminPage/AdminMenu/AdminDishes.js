import React, {useState} from "react";
import AdminDish from "./AdminDish";


const AdminDishes = (props) =>{
   
    const [selectedId, setSelectedId] = useState(null);

  const onChange = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };    
    
   return (
        props.dishes.map((item, index) =>(
            <AdminDish dish={item.dish_name} price={item.dish_cost} dishImage={item.dish_img_link} key={item.id} ingredients={item.dish_ingredient_list} description={item.dish_description} category={item.dish_category} isVege={""+ item.dish_is_vege} spiciness={item.dish_spiciness}  id={item.id} onChange={onChange}
            selectedId={selectedId}/>
        ))    
    );
    
}

export default AdminDishes;