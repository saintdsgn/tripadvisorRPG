import React, { useState } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

import "./Rpg.css";
const CastleItem = ({ item, setCancelFunction }) => {
  const navigate = useNavigate();

  const [popup, setPopUp] = useState(false);
  return (
    <>
      {item.id === "gold" ? (
        <>
          <div
            //   key={index}
            className="castle_item"
            style={{
              top: `${item.top}`,
              right: `${item.right}`,
              width: `${item.width}`,
              height: `${item.height}`,
            }}
            onClick={() =>
              setTimeout(() => {
                navigate(`/location/${item.id}`);
              }, 1000)
            }
          >
            <img src={item.img} alt={item.id} />
          </div>
          {/* {popup && <Popup item={item} setPopUp={setPopUp} />} */}
        </>
      ) : item.id === "pingeorgia" ? (
        <>
          <div
            onClick={() =>
              setTimeout(() => {
                navigate(`/location/${item.id}`);
              }, 1000)
            }
            className="castle_item"
            style={{
              bottom: `${item.bottom}`,
              right: `${item.right}`,
              width: `${item.width}`,
              height: `${item.height}`,
            }}
          >
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
          {/* {popup && <Popup item={item} setPopUp={setPopUp} />} */}
        </>
      ) : (
        <>
          <div
            onClick={() =>
              setTimeout(() => {
                navigate(`/location/${item.id}`);
              }, 1000)
            }
            className="castle_item"
            style={{
              bottom: `${item.bottom}`,
              right: `${item.right}`,
              width: `${item.width}`,
              height: `${item.height}`,
            }}
          >
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
          {/* {popup && <Popup item={item} setPopUp={setPopUp} />} */}
        </>
      )}
    </>
  );
};

export default CastleItem;
