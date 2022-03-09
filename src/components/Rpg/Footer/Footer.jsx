import React from "react";
import "./Footer.css";
const Footer = ({ setCastlesData, castles }) => {
  const filterFromFooter = (value) => {
    value === "All"
      ? setCastlesData(castles)
      : setCastlesData(
          castles.filter((item) => {
            return item.category === value;
          })
        );
  };
  return (
    <footer>
      <div className="footer_btns">
        <button onClick={() => filterFromFooter("All")}>All Places</button>
        <button onClick={() => filterFromFooter("Where to Stay")}>
          Where to Stay
        </button>
        <button onClick={() => filterFromFooter("Where to Eat")}>
          Where to Eat
        </button>
        <button onClick={() => filterFromFooter("Where to Shop")}>
          Where to Shop
        </button>
        <button onClick={() => filterFromFooter("Fun")}>Fun</button>
        <button onClick={() => filterFromFooter("Extra")}>Extra places</button>
        <button onClick={() => filterFromFooter("Tour Operator")}>
          Hire a Guide
        </button>
      </div>
    </footer>
  );
};

export default Footer;
