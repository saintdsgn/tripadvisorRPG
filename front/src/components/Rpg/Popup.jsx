import React from "react";
import "./Rpg.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Map from "./Map/Map";
const Popup = ({ castles, setPopUp }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  // const history = useHistory();

  return (
    <>
      {castles
        .filter((e) => e.id === id)
        .map((item) => {
          return (
            <div className="popup_outer">
              <div className="popup_wrapper">
                <img src={item.img} alt={item.title} />
                <h3>
                  <strong>{item.section}</strong>
                </h3>
                {/* <Map parent={item.id} /> */}
                <a className="phone" href={`tel:${item.call}`}>
                  {item.number}
                </a>
                <a className="visit" href={item.visitPlace} target="_blank">
                  Visit place
                </a>
                <button onClick={() => navigate(`/rpg`)}>Exit</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Popup;
