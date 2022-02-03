import React, {useEffect, useRef, useState} from "react"
import { Card, Image, Button} from "react-bootstrap"
import VegeIcon from "../../images/vege-icon.png"
import ChiliIcon from "../../images/chili-icon.png"


const MenuDish = props =>{
  //const dishCard = useRef(new Array())
  
  /*
  const [appState, changeState] = useState({
    activeObject: null,
    dishCard
  })
  */

  const isVege = useRef()
  
 

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
         
          
          
          if(card.classList.contains('active')){
            card.style.cssText -= `width: 50rem; height; grid-column; grid-row: ${row}`
            dishImg.style.cssText -=`width: 100%; height`
            blurImg.style.cssText -=`display:block`    
            card.classList.remove("active")
            console.log('no ma')
          } else {
            if(window.innerWidth>680){
              if (colPosition===(colCount-1)) {
                card.classList.add("active")
                card.style.cssText += `width: 50rem; grid-column: ${lastColumn}; grid-row: ${row}`
                dishImg.style.cssText +=`width: 100%; height: 600px`
                blurImg.style.cssText +=`display:block`
              } else {
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
    return (
        <Card className="menuDish no-paddings" >
            <Button className="dish-img-button shadow-none border-none">
              <Image fluid src={props.dishImage} className="dish-image-width"></Image>
              <div className="image-blur">
              <div className="description-and-ingredients">
                <p className="description-and-ingredients-heading">Desctiption:</p>
                {props.description}
              </div>
              <div className="description-and-ingredients ingredients">
                <p className="description-and-ingredients-heading">Ingredients</p>
                {props.ingredients}
              </div>
              </div>  
            </Button>
            <div className="card-body">
                <div className="d-flex dish-name-and-price">
                    <div className="nothin"></div>
                    <p className="card-title">{props.dish}</p>
                    <div className="price">{props.price}</div>
                </div>
                <div className="vege-and-chili">
                  <div className="vegeStatus" ref={isVege}>{props.vege}</div>  
                   
                    <Image src={VegeIcon} className="vege-icon" ></Image>
                    <Image src={ChiliIcon} className="chili-icon"></Image>
                </div>
            </div>
        </Card>
    )
    
}

export default MenuDish