import React, { useState } from "react";
import CastleItem from "./CastleItem";
import Character from "./Character/Character";
import "./Rpg.css";
import { useLoadScript } from "@react-google-maps/api";
// import Map from "./Map";

const Rpg = ({ castles }) => {
  const [cancelFunction, setCancelFunction] = useState(false);

  const getClickPosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    let translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
    document.getElementById("character").style.transform = translate3dValue;

    // setTimeout(() => {
    //   startScrollLoop();
    // }, 1000);
    // setTimeout(() => {
    //   stopScrollLoop();
    // }, 2000);
  };

  var incrementScroll = function () {
    window.scrollBy(10, 0);
  };

  var scrollLoopId;
  var startScrollLoop = function () {
    scrollLoopId = setInterval(incrementScroll, 10);
  };

  var stopScrollLoop = function () {
    clearInterval(scrollLoopId);
  };
  // area.addEventListener('click', getClickPosition, false)

  return (
    <div className="rpg" id="rpg" onClick={(e) => getClickPosition(e)}>
      <div className="locations">
        <div id="character">
          <Character />
        </div>
        {castles.map((item, index) => {
          return (
            <CastleItem
              key={index}
              item={item}
              setCancelFuntion={setCancelFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rpg;
