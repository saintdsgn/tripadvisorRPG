import React, { useEffect, useState } from "react";
import Character from "./Character/Character";
import "./Rpg.css";

const Rpg = () => {
  const [move, setMove] = useState(false);
  let castles = [
    {
      id: 'gold',
      title: "",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645541802/gold2222_gqjqql.png",
      visitPlace: "",
      viewOnMap: false,
      howToContact: "",
      top: '30px',
      right: '50px',
      category: 'vip'
    },
    {
      id: 'pingeorgia',
      title: "PinGeorgia",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645597270/pingeorgia_ddrkmw.png",
      visitPlace: "",
      viewOnMap: false,
      howToContact: "",
      top: '',
      right: '150px',
      bottom: '170px',
      category: 'vip',
      width: '150px',
      height: '150px',
    },

    
  ];


  


 
  
 
  const getClickPosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y)
    let translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
    document.getElementById('character').style.transform = translate3dValue
  }
  // area.addEventListener('click', getClickPosition, false)


 

  return <div className="rpg" id="rpg" onClick={(e) => getClickPosition(e)}>
      <div className="locations">
           
        <div id="character" style={{width: '100px', height: '200px', transform: `translate3d(50px, 50px, 0)`, position: 'relative', zIndex: 2}}><Character/></div>
          {castles.map((item, index) => { if(item.id==='gold'){
        return (
          <div key={index} className="castle_item" style={{top: `${item.top}`, right: `${item.right}`}}>
              <img src={item.img} alt={item.id}/>
          </div>
        )
          }else if (item.id === "pingeorgia"){
            return (
              <div key={index} className="castle_item" style={{bottom: `${item.bottom}`, right: `${item.right}`, width: `${item.width}`, height: `${item.height}`}}>
                <img src={item.img} alt={item.title}/>
                <h2>{item.title}</h2>
              </div>
            )
          }
          })}
      </div>
  </div>;
};

export default Rpg;
