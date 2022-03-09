import React, { useState, useEffect } from "react";
import CastleItem from "./CastleItem";
import Character from "./Character/Character";
import "./Rpg.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer/Footer";
import RpgMobile from "../RpgMobile/RpgMobile";
import axios from "axios"
const Rpg = ({ castles }) => {
  const [characterX, setCharacterX] = useState();
  const [characterY, setCharacterY] = useState();

  const [castlesData, setCastlesData] = useState(castles);
  const [locationsWidth, setLocationsWidth] = useState("200%");
 
  const [rate, setRate] = useState([])
  const API_ACCESS_KEY = "cf0ec434466f37384002d773d69f2589";
const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;

  const getRate = () => {
    axios({
      method: "GET",
      url: `http://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`,
    })
      .then((response) => {
        console.log(response.data);

        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      document.getElementById("currency").style.display="none"
  };



console.log(rate)

  const getClickPosition = (e) => {
    

   

    let x = e.pageX - 300;
    let y = e.pageY - 100;
    document.getElementById("taxi").style.display="none"
    document.getElementById("taxi").style.left="0px"
    document.getElementById("taxi").style.top=`${characterY}`

    setCharacterX(x+250);
    setCharacterY(y+150);
    let translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
    document.getElementById("character").style.transform = translate3dValue;
  };
  var incrementScroll = function () {
    window.scrollBy(5, 0);
    // document.getElementById("rpg").scrollBy(5, 0);
  };

  var dicrementScroll = function () {
    window.scrollTo(0, 0);
    // alert(1);
  };

  var scrollLoopId;
  var startScrollLoop = function (e) {
    scrollLoopId = setInterval(incrementScroll, 5);
    e.pageX > 2000 && stopScrollLoop();
  };

  var stopScrollLoop = function () {
    clearInterval(scrollLoopId);
  };

  var startScrollToLeftLoop = function (e) {
    scrollLoopId = setInterval(dicrementScroll, 5);
    // alert(2);
  };

  


  const catchTaxi = () => {
    document.getElementById("taxi").style.display="block"
    
    let translate3dValue = "translate3d(" + characterX + "px," + characterY + "px, 0)";
    document.getElementById("taxi").style.transform = translate3dValue;
  }
  return (
    <>
      <div className="rpg" id="rpg">
     
        {/* <div className="currency_wrapper">
         <button id="currency" onClick={() => getRate()}>Show Currency ₾</button>
         {rate && rate.rates &&
          <p style={{margin: 0}}><strong>€ = {rate.rates.GEL.toFixed(2)} GEL</strong></p>
        }
        </div> */}

        <div className="absolute_btns">
        <a href="https://glovoapp.com/ge/en/tbilisi/restaurants_1/?utm_source=google&utm_medium=cpc&utm_campaign=google_performance_GE_ALL_Search_cpa_All_FirstOrder_0_NewUsers_ka__DigitalBudget_NoPromo_0_1201202&utm_campaignid=1707654614&utm_adgroupid=131580298749&utm_term&utm_matchtype&utm_device=c&gclid=CjwKCAiAvaGRBhBlEiwAiY-yMPIS2EFzdcPF_Me5oMMZpgxqJpiC0ISrlEM8kyidPvOtMhbW6uQwhhoCXsUQAvD_BwE" target="_blank">Order Food</a>
          <button onClick={()=>catchTaxi()} className="catch_taxi">Catch a Taxi</button>
         
        </div>
        <div className="taxi_wrapper" id="taxi" >
          <a href="https://play.google.com/store/apps/details?id=ee.mtakso.client" target="_blank"> <img src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1646818190/cc_d4sd4d.png" alt="Bolt Taxi"/></a>
        </div>
        <AnimatedCursor
          innerSize={8}
          outerSize={16}
          color="255,215,0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        {/* <Music /> */}
        <div
          className="locations"
          style={{ width: locationsWidth }}
          id="locations"
          onClick={(e) => getClickPosition(e)}
        >
          <div id="character">
            <Character />
          </div>
          {castlesData.map((item, index) => {
            return (
              <CastleItem
                key={index}
                item={item}
                // setCancelFuntion={setCancelFunction}
              />
            );
          })}
        </div>
        <Footer
          setCastlesData={setCastlesData}
          castles={castles}
          setLocationsWidth={setLocationsWidth}
        />
      </div>
      <RpgMobile castlesData={castlesData} />
    </>
  );
};

export default Rpg;
