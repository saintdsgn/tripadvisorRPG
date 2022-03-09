import React, { useState, useEffect } from "react";
import CastleItem from "./CastleItem";
import Character from "./Character/Character";
import "./Rpg.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer/Footer";
import RpgMobile from "../RpgMobile/RpgMobile";
import Music from "./Music";

const Rpg = ({ castles }) => {
  const [castlesData, setCastlesData] = useState(castles);

  const getClickPosition = (e) => {
    let x = e.pageX - 300;
    let y = e.pageY - 100;

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

  setTimeout(() => {}, 5000);

  return (
    <>
      <div className="rpg" id="rpg">
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
        <Footer setCastlesData={setCastlesData} castles={castles} />
      </div>
      <RpgMobile castlesData={castlesData} />
    </>
  );
};

export default Rpg;
