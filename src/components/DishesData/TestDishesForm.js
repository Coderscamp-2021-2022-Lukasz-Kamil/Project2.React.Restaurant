const TestDishesForm = (props)  => {
  const nameChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishName: event.target.value};
    });
    console.log(event.target.value)
  };

  const costChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishCost: event.target.value};
    });
  };

  const categoryChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishCategory: event.target.value};
    });
  };

  const imgLinkChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishImgLink: event.target.value};
    });
  };

  const descriptionChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishDescription: event.target.value};
    });
  };

  const ingredientListChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishIngredientsList: event.target.value};
    });
  };

  const spicinessChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishSpiciness: event.target.value};
    });
  };

  const isVegeChangeHandler = (event) => {
    props.setUserInput((prevState) => {
      return {...prevState, dishIsVege: event.target.value};
    });
  };
  
  return (
    <div>
      <input 
        placeholder="Dish name..." 
        onChange={nameChangeHandler} 
      />
      <input 
        type='number' 
        placeholder="Dish price..." 
        onChange={costChangeHandler} 
      />
      <input 
        placeholder="Dish category..." 
        onChange={categoryChangeHandler} 
      />
      <input 
        placeholder="Dish img link..." 
        onChange={imgLinkChangeHandler} 
      />
      <input 
        placeholder="Dish descrption..." 
        onChange={descriptionChangeHandler} 
      />
      <input 
        placeholder="Dish ingredients..." 
        onChange={ingredientListChangeHandler} 
      />
      <input 
        type='number' 
        placeholder="Dish spiciness..." 
        onChange={spicinessChangeHandler} 
      />
      <input 
        placeholder="Is dish vege..." 
        onChange={isVegeChangeHandler} 
      />
      <button onClick={props.createDish}>Create Dish</button> 
    </div>
  )
}

export default TestDishesForm;