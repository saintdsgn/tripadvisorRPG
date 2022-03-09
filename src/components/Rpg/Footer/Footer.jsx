import React from "react";
import "./Footer.css";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import HouseIcon from '@mui/icons-material/House';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
const Footer = ({ setCastlesData, castles, setLocationsWidth }) => {
  const filterFromFooter = (value) => {
   if(value==="All"){
  setCastlesData(castles); 
    setLocationsWidth("200%");
   }else{
    setCastlesData(castles.filter((item) => {
      return item.category === value;
    }));
  
  setLocationsWidth("100%")
   }
      
     
         
  };
  return (
    <footer>
      <div className="footer_btns">
        <button onClick={() => filterFromFooter("All")}> <LocationOnIcon />All Places</button>
        <button onClick={() => filterFromFooter("Where to Stay")}>
        <HouseIcon /> Where to Stay
        </button>
        <button onClick={() => filterFromFooter("Where to Eat")}>
         <RestaurantMenuIcon /> Restraunts
        </button>
        <button onClick={() => filterFromFooter("Where to Shop")}>
         <ShoppingCartIcon/> Shopping
        </button>
        <button onClick={() => filterFromFooter("Fun")}><SportsBasketballIcon />Fun</button>
        <button onClick={() => filterFromFooter("Extra")}><FormatAlignJustifyIcon /> Extra places</button>
        <button onClick={() => filterFromFooter("Tour Operator")}><DirectionsCarFilledIcon />
         Hire a Guide
        </button>
      </div>
    </footer>
  );
};

export default Footer;
