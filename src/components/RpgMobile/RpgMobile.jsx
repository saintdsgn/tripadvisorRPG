import React from "react";
import Character from "../Rpg/Character/Character";

import "./RpgMobile.css";
import SwiperVerical from "./SwiperVerical";
const RpgMobile = ({ castles }) => {
  return (
    <div className="rpg_mobile">
      <Character />
      <SwiperVerical castles={castles} />
    </div>
  );
};

export default RpgMobile;
