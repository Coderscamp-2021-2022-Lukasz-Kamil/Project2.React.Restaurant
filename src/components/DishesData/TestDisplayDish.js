const TestDisplayDish = (props)  => {
  return (
    <div>
      {props.dishes.map((dishes) => {
        return <div key={dishes.id}>
          <h1>Dish name: {dishes.dish_name}</h1>
          <h1>Dish cost: {dishes.dish_cost}</h1>
          <h1>Dish category: {dishes.dish_category}</h1>
          <img 
            src={dishes.dish_img_link} 
            alt={dishes.dish_name}
          />
          <h1>Dish description: {dishes.dish_description}</h1>
          <h1>Dish ingredients list: {dishes.dish_ingredient_list}</h1>
          <h1>Dish ingredients spiciness: {dishes.dish_spiciness}</h1>
          <h1>Dish ingredients dish is vege: {""+dishes.dish_is_vege}</h1>
          <button onClick={() => {props.updateDish(dishes.id)}}>Update Dish</button>
          <button onClick={() => {props.deleteDish(dishes.id)}}>Delete Dish</button>
        </div>
      })}
    </div>
    
  )
}

export default TestDisplayDish;