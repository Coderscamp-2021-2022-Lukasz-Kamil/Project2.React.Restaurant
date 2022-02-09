import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  FormSelect,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DishForm.module.css";
import DishFormControl from "./DishFormControl";
import addDish from "../../../RestaurantApi/Dishes/AddDish";
import editDish from "../../../RestaurantApi/Dishes/EditDish";
import getDish from "../../../RestaurantApi/Dishes/GetDish";


const DishForm = (props)  => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('Category');
  const [imgLink, setImgLink] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [spiciness, setSpiciness] = useState(0);
  const [isVege, setIsVege] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [communicate, setCommunicate] = useState('');

  const isEditingMode = props.id;
  
  const setDefaultValues = () => {
    setName('');
    setCost('');
    setCategory('Category');
    setImgLink('');
    setDescription('');
    setIngredients('');
    setSpiciness(0);
    setIsVege(false);
    setIsValid(true);
  }

  const updateDish = () => {
    if (!name || !cost || !imgLink || !description || !ingredients || (category==="Category")) {
      setIsValid(false);
    } else {
      editDish("4Qs9wbWXRD33AzIGKqhD", name, cost, category, imgLink, description, ingredients, spiciness, isVege);
      setDefaultValues();
      setCommunicate('Dish was edited!'); 
    };
  };

  const createDish = () => {
    if (!name || !cost || !imgLink || !description || !ingredients || (category==="Category")) {
      setIsValid(false);
    } else {
      addDish(name, cost, category, imgLink, description, ingredients, spiciness, isVege);
      setDefaultValues();
      setCommunicate('Dish was added!');   
    };
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const costChangeHandler = (event) => {
    const onlyDigits = event.target.value.replace(/\D/g, "");
    setCost(onlyDigits);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const imgLinkChangeHandler = (event) => {
    setImgLink(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    setIngredients(event.target.value);
  };

  const spicinessPlusHandler = () => {
    setSpiciness((prevState) => {
      if (prevState < 3){
        return prevState + 1;
      } else{
        return prevState;
      };
    });
  };

  const spicinessMinusHandler = () => {
    setSpiciness((prevState) => {
      if (prevState > 0){
        return prevState - 1;
      } else{
        return prevState;
      };
    });
  };

  const isVegeChangeHandler = () => {
    setIsVege(!isVege);
  };

  useEffect(() => {
    if (isEditingMode) {
      getDish(props.id).then(data => {
        setName(data.dish_name);
        setCost(data.dish_cost);
        setCategory(data.dish_category);
        setImgLink(data.dish_img_link);
        setDescription(data.dish_description);
        setIngredients(data.dish_ingredient_list);
        setSpiciness(data.dish_spiciness);
        setIsVege(data.dish_is_vege);
      });
    }
  }, []);
  
  return (
    <Container className={`${styles.dishFormContainer}`}>
      <Form
        className={` ${styles.inputsContainer} w-100 d-flex flex-column align-items-center p-3 mt-5`}
        style={{
          backgroundColor: "#C4C4C4",
        }}
      >
        <FormGroup
          style={{ minWidth: "50%" }}
        >
          <FormSelect
            className={`p-2 mb-3 shadow-none text-white ${styles.input}`}
            style={{ backgroundColor: "#5E5B5B", borderColor: "transparent" }}
            placeholder="Category"
            type="text"
            onChange={categoryChangeHandler}
            value={category}
            required
          >
            <option hidden disabled id="placeholder" >Category</option>
            {["Pizza","Soup","Pasta","Dessert","Starter"].map((category) => {
              return <option value={category} key={category}>{category}</option>
            })}
          </FormSelect>
          <DishFormControl value={name} onChange={nameChangeHandler} placeholder={"Dish name"}/>
          <DishFormControl value={ingredients} onChange={ingredientsChangeHandler} placeholder={"Ingredients"}/>
          <DishFormControl value={description} onChange={descriptionChangeHandler} placeholder={"Description"}/>
          <DishFormControl value={cost} onChange={costChangeHandler} placeholder={"Price"}/>
          <DishFormControl value={imgLink} onChange={imgLinkChangeHandler} placeholder={"Picture's link"}/>
        </FormGroup>
        {isValid ? communicate : <p style={{color: "red"}}>Some fields are empty!</p>}
        <FormGroup
          className={`d-flex align-items-center justify-content-between ${styles.bottomBox}`}
          style={{ minWidth: "50%"}}
        >
          <FormGroup
           className={`d-flex align-items-center justify-content-center`} 
          >
            <Button
              onClick={spicinessMinusHandler}
              className={`h-25 m-2 shadow-none`}
              style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "100px", padding: "0px"}}
            >
              <img
                src="/icons/add-dish-minus-icon.png"
                alt="Minus icon"
              />
            </Button>
            <FormGroup
              style={{display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <Image 
                src="/icons/chili-icon.png" 
                alt="chili pepper"
              />
              <div>
                {spiciness}
              </div>
            </FormGroup>
            <Button
              onClick={spicinessPlusHandler}
              className={`h-25 m-2 shadow-none`}
              style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "100px", padding: "0px"}}
            >
              <img
                src="/icons/add-dish-plus-icon.png"
                alt="Plus icon"
              />
            </Button> 
            <div className={`p-1`}>
              Vege
            </div>
            <Button
              onClick={isVegeChangeHandler}
              className={`h-50 shadow-none`}
              style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "100px", padding: "0px"}}
            >
              <img
                src={isVege ? "/icons/vege-but-on.png":"/icons/vege-but-off.png"}
                alt="Vegetarian option button off"
              />
            </Button>
          </FormGroup>
          <Button
            onClick={isEditingMode ? updateDish : createDish}
            className={`shadow-none`}
            style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "100px", padding: "0px"}}
          >
            <img
              src="/icons/add-dish-submit-button.png"
              alt="Sumbit Button"
            />
          </Button> 
        </FormGroup>
      </Form>
    </Container>
      
  )
}

export default DishForm;