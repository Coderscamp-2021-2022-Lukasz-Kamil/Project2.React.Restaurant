import React from "react"
import { Card, Image, Button, Container} from "react-bootstrap"
import VegeIcon from "../../../images/vege-icon.png"
import ChiliIcon from "../../../images/chili-icon.png"
import TwoChilies from "../../../images/2chili-icon.jpg"
import ThreeChilies from "../../../images/3chili-icon.png"
import DeleteIcon from "../../../images/delete-icon.png"
import EditIcon from "../../../images/edit-icon.png"
import { useNavigate } from "react-router-dom"

const AdminDish = props =>{
  const navigation = useNavigate();
  let vege 
  let chili 

  const navigationHandler = (id) => {
    navigation("/admin/dish", {state:{dishId:`${id}`, editMode:true}});
  };

  const clickHandler = (keyID) => {
    props.onChange(keyID);
    
  }

  if(props.isVege === "true"){
    vege = VegeIcon
  }

  if(props.spiciness === 1){
    chili = ChiliIcon
  } else if(props.spiciness === 2){
    chili = TwoChilies
  } else if(props.spiciness === 3){
    chili = ThreeChilies
  }

    return (
      <div className="container-admin-dish" >
        <Card className={"menu-dish-admin no-paddings " + (props.selectedId === props.id ? "active-card" : "disactive")} >
            <Button className={"dish-img-button shadow-none border-none " }
        onClick={(e) => clickHandler(props.id, e)}>
              <Image fluid src={props.dishImage} className={"dish-image-width " + (props.selectedId === props.id ? "active-card-image" : "inactive-card-image") }></Image>
              <div className={"image-blur "+ (props.selectedId === props.id ? "active-card-blur" : "inactive-card-blur")}>
              <div className="description-and-ingredients">
                <p className="description-and-ingredients-heading">Desctiption:</p>
                <p>{props.description}</p>
              </div>
              <div className="description-and-ingredients ingredients">
                <p className="description-and-ingredients-heading">Ingredients</p>
                <p>{props.ingredients}</p>
              </div>
              </div>  
            </Button>
            <div className="card-body">
                <div className="d-flex dish-name-and-price">
                    <div className="empty-box"></div>
                    <p className="card-title">{props.dish}</p>
                    <div className="price-and-vege">
                      <div className="price">{props.price}$</div>
                        <Image src={vege} className="vege-icon mobile-icon"></Image>
                        <Image src={chili} className="chili-icon mobile-icon"></Image>
                    </div>
                </div>
                <div className="vege-and-chili"> 
                    <Image src={vege} className="vege-icon"></Image>
                    <Image src={chili} className="chili-icon"></Image>
                </div>
            </div>
        </Card>
        <div className="admin-changes">
          <button className="changes-button button-edit" onClick={() => navigationHandler(props.id)}>
            <Image src={EditIcon}></Image>
          </button>
          <button className="changes-button button-delete">
            <Image src={DeleteIcon}></Image>
          </button>
        </div>
        </div>
    )
    
}

export default AdminDish