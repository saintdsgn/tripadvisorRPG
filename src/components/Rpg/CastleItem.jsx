import React, { useState } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

import "./Rpg.css";
const CastleItem = ({ item, mobile }) => {
  const navigate = useNavigate();

  return (
    <>
      {mobile ? (
        <>
          {item.id === "gold" ? (
            <>
              <div
                //   key={index}
                className="castle_item"
                style={{
                  position: "static",
                  width: "40%",
                  height: "200px",
                  marginTop: "200px",
                  // height: "auto",
                }}
                onClick={() =>
                  setTimeout(() => {
                    navigate(`/location/${item.id}`);
                  }, 1000)
                }
              >
                <img src={item.img} alt={item.id} style={{ width: "100%" }} />
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
                  position: "static",
                  width: "40%",
                  height: "200px",
                  marginTop: "250px",
                  // height: "auto",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
                <h2
                  style={{
                    fontSize: "36px",
                    width: "100%",
                  }}
                >
                  {item.title}
                </h2>
              </div>
              {/* {popup && <Popup item={item} setPopUp={setPopUp} />} */}
            </>
          )}
        </>
      ) : (
        <>
          {item.id === "gold" ? (
            <>
              <div
                //   key={index}
                className="castle_item"
                style={{
                  marginTop: `${item.top}`,
                  marginRigth: `${item.right}`,
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
                  marginTop: `${item.bottom}`,
                  marginRight: `${item.right}`,
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
      )}
    </>
  );
};

export default CastleItem;
