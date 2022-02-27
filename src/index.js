import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rpg from "./components/Rpg/Rpg";
import Popup from "./components/Rpg/Popup";

let castles = [
  {
    id: "gold",
    title: "",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645541802/gold2222_gqjqql.png",
    visitPlace: "https://demo-ux.github.io/",
    // viewOnMap: false,
    howToContact: "",
    top: "30px",
    right: "50px",
    category: "vip",
    section: "Gold Shop",
    number: "+995 592 02 78 50",
    call: "+995592027850",
    width: "70px",
    height: "70px",
  },
  {
    id: "pingeorgia",
    title: "PinGeorgia",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645597270/pingeorgia_ddrkmw.png",
    visitPlace: "http://pingeorgia.ge/",
    // viewOnMap: false,
    howToContact: "",
    top: "",
    right: "150px",
    bottom: "170px",
    category: "vip",
    width: "70px",
    height: "70px",
    section: "Tour Operator",
    call: "+995555242266",
    number: "+995 555 24 22 66",
  },

  {
    id: "mtvrali_ku_apartment",
    title: "Mtvrali Ku Apartment",
    img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645954065/pngwing.com_mhy2d4.png",
    visitPlace:
      "https://www.airbnb.co.in/rooms/37653368?source_impression_id=p3_1645954148_sxiyD7gkQ6TW1%2BvH",
    // viewOnMap: false,
    howToContact: "",
    top: "",
    right: "500px",
    bottom: "270px",
    category: "vip",
    width: "70px",
    height: "70px",
    section: "Where To Stay",
    call: "+9955970266336",
    number: "+995 597 02 66 33",
  },
];
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="rpg" element={<Rpg castles={castles} />} />
        <Route path="/location/:id" element={<Popup castles={castles} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
