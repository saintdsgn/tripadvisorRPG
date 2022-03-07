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

  const [update, setUpdate] = useState(false);

  // const [cancelFunction, setCancelFunction] = useState(false);
  // const [mapEnd, setMapEnd] = useState(false);
  const getClickPosition = (e) => {
    setUpdate(!update);
    let x = e.pageX - 200;
    let y = e.pageY - 100;

    let translate3dValue = "translate3d(" + x + "px," + y + "px, 0)";
    document.getElementById("character").style.transform = translate3dValue;
    var rect = document.getElementById("character").getBoundingClientRect();

    // var val = 0;
    // val -= 500;
    // setTimeout(() => {
    //   document.getElementById("locations").style.left = val + "px";
    // }, 4000);
    // if (rect.left <= x + 200) {
    //   setTimeout(() => {
    //     startScrollLoop(e);
    //   }, 1000);
    //   setTimeout(() => {
    //     stopScrollLoop();
    //   }, 2000);
    // } else {
    //   // setTimeout(() => {
    //   //   startScrollToLeftLoop(e);
    //   // }, 1000);
    //   // setTimeout(() => {
    //   //   stopScrollLoop();
    //   // }, 2000);
    //   setTimeout(() => {
    //     window.scrollBy(-50, 0);
    //   }, 1000);
    // }

    // mapEnd && stopScrollLoop();
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
    // alert(1);
  };

  var stopScrollLoop = function () {
    clearInterval(scrollLoopId);
  };

  var startScrollToLeftLoop = function (e) {
    scrollLoopId = setInterval(dicrementScroll, 5);
    // alert(2);
  };

  setTimeout(() => {}, 5000);

  // useEffect(
  //   (e) => {
  //     setTimeout(() => {
  //       setStartX(e.pageX - 50);
  //       setStartY(e.pageY - 100);
  //     }, 1100);
  //     console.log(startX, startY, "x,y");
  //   },
  //   [update]
  // );

  // area.addEventListener('click', getClickPosition, false)

  // function getXPosition() {
  //   var right = window.pageXOffset || document.documentElement.scrollLeft;
  //   var left = window.pageXOffset || document.documentElement.scrollRight;
  //   right === "2000" && stopScrollLoop();
  //   left === "0" && stopScrollLoop();
  // }

  // const slider = document.querySelector(".items");
  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // document.body.addEventListener("mousedown", (e) => {
  //   isDown = true;
  //   slider.classList.add("active");
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // document.body.addEventListener("mouseleave", () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // });
  // document.body.addEventListener("mouseup", () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // });
  // document.body.addEventListener("mousemove", (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 3; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
  // });

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
