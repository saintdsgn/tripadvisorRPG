import React from "react";
import Character from "../Rpg/Character/Character";

import "./RpgMobile.css";
import SwiperVerical from "./SwiperVerical";
const RpgMobile = ({ castlesData }) => {
  return (
    <div className="rpg_mobile">
      <Character />
      <SwiperVerical castlesData={castlesData} />
    </div>
  );
};

export default RpgMobile;
