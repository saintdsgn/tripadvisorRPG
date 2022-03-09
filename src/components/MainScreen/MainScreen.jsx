import React from "react";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div>
      <header>
        <h1>TripAdvisorRPG - Sales In Georgia</h1>
      </header>
      <div className="intro">
        <nav>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgrey",
              fontSize: "24px",
            }}
            to="/rpg"
          >
            Enter the game
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MainScreen;
