import React from "react";
import "./Map.css";
const Map = ({ parent }) => {
  return (
    <div className="map_outer">
      <iframe
        src={
          parent === "gold"
            ? "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tbilisi Central Railway Station&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            : parent === "mtvrali_ku_apartment"
            ? "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tbilisi Central Railway Station&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            : parent === "pingeorgia" &&
              "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Batumi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        }
        width="540"
        height="250"
        frameborder="0"
        style={{ border: 0, borderRadius: "10px" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};

export default Map;
