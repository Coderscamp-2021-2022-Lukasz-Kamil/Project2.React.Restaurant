import React, {useEffect, useRef, useState} from "react"
import { Card, Image, Button} from "react-bootstrap"
import VegeIcon from "../../images/vege-icon.png"
import ChiliIcon from "../../images/chili-icon.png"
import TwoChilies from "../../images/2chili-icon.jpg"
import ThreeChilies from "../../images/3chili-icon.png"



const MenuDish = props =>{
  //const dishCard = useRef(new Array())
  let vege 
  let chili 
  const clicksNode = document.querySelectorAll('.dish-img-button')
  const clicks = Array.from(clicksNode)

  const [state, setState] = useState({count: 0});
  const [bigger, setBigger] = useState(false);

  const [numCard, setNumCard] = useState({
    majObject : null,
    clicks
  });


  const ref = useRef(new Array([]));

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

   /*  

  useEffect(() =>{
    const clicksNode = document.querySelectorAll('.dish-img-button')
    const clicks = Array.from(clicksNode)
    const numberOfCards = document.querySelector(".dishes-card-container")
   

    clicks.forEach(click => click.addEventListener('click', (e) => {
    for (let i = 0, len = numberOfCards.children.length; i < len; i++){  
      (function(index){
        numberOfCards.children[i].onclick = function(){
          let colCount 
            if(window.innerWidth > 1640){
              colCount = 4
            } else if(window.innerWidth<=1640 && window.innerWidth>1240) {
              colCount = 3
            }else if(window.innerWidth<=1240 && window.innerWidth>680){
              colCount = 2
            }else{
              colCount = 1
            }
         
           
          const colPosition = index % colCount;
          const rowPosition = Math.floor(index / colCount);
          const column = `${(colPosition + 1)}/${colPosition + 3}`
          const row = `${(rowPosition + 1)}/${rowPosition +3}`
          const lastColumn = `${colPosition}/${colPosition + 2}`
          const card = click.parentElement
          const dishImg = click.firstChild 
          const blurImg = click.children[1]

        
            if(click.classList.contains("active-card")){
              card.style.cssText -= `width: 50rem; height; grid-column; grid-row: ${row}`
              dishImg.style.cssText -=`width: 100%; height`
              blurImg.style.cssText -=`display:block`    
              card.classList.remove("active")
            } else {
              if(window.innerWidth>680){
                if (colPosition===(colCount-1)) {
                  card.classList.add("active")
                  card.style.cssText += `width: 50rem; grid-column: ${lastColumn}; grid-row: ${row}`
                  dishImg.style.cssText +=`width: 100%; height: 600px`
                  blurImg.style.cssText +=`display:block`
                }   else {
                  card.classList.add("active")
                  card.style.cssText += `width: 50rem; grid-column: ${column}; grid-row: ${row}`
                  dishImg.style.cssText +=`width: 100%; height: 600px`
                 blurImg.style.cssText +=`display:block`

               
                  }
              }else{
                card.classList.add("active")
                card.style.cssText += ` flex-direction: column; grid-column: ${lastColumn}; grid-row: ${row}`
            }
              
              
            }

      }    
    })(i);   
  } 
})) 

  })
*/ 
    return (
        <Card ref={ref} className={"menu-dish no-paddings " + (props.selectedId === props.id ? "active-card" : "disactive")} >
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
    )
    
}

export default MenuDish