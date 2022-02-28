import React, { useState, useEffect } from "react";
import CastleItem from "./CastleItem";
import Character from "./Character/Character";
import "./Rpg.css";
import { useLoadScript } from "@react-google-maps/api";
import Footer from "./Footer/Footer";
import RpgMobile from "../RpgMobile/RpgMobile";
// import Map from "./Map";

const Rpg = ({ castles }) => {
  const [castlesData, setCastlesData] = useState(castles);
  // const [cancelFunction, setCancelFunction] = useState(false);
  // const [mapEnd, setMapEnd] = useState(false);
  const getClickPosition = (e) => {
    let x = e.pageX;
    let y = e.pageY;

    let translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
    document.getElementById("character").style.transform = translate3dValue;
    // var val = 0;
    // val -= 500;
    // setTimeout(() => {
    //   document.getElementById("locations").style.left = val + "px";
    // }, 4000);
    // setTimeout(() => {
    //   startScrollLoop(e);
    // }, 1000);
    // setTimeout(() => {
    //   stopScrollLoop();
    // }, 2000);

    // mapEnd && stopScrollLoop();
  };
  var incrementScroll = function () {
    window.scrollBy(5, 0);
  };

  var scrollLoopId;
  var startScrollLoop = function (e) {
    scrollLoopId = setInterval(incrementScroll, 5);
    console.log(e.pageX, "pageX");
    e.pageX > 2000 && stopScrollLoop();
  };

  var stopScrollLoop = function () {
    clearInterval(scrollLoopId);
  };
  // area.addEventListener('click', getClickPosition, false)

  function getXPosition() {
    var right = window.pageXOffset || document.documentElement.scrollLeft;
    var left = window.pageXOffset || document.documentElement.scrollRight;
    right === "2000" && stopScrollLoop();
    left === "0" && stopScrollLoop();
  }
  return (
    <>
      <div className="rpg" id="rpg" onClick={(e) => getClickPosition(e)}>
        <div className="locations" id="locations">
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
        <Footer />
      </div>
      <RpgMobile castlesData={castlesData} />
    </>
  );
};

export default Rpg;
