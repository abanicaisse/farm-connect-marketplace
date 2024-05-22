import React from "react";

import partner1 from "../../assets/partners/anchor-logo.png";
import partner2 from "../../assets/partners/ko-lee-logo.png";
import partner3 from "../../assets/partners/ktc-logo.png";
import partner4 from "../../assets/partners/woerle-logo.png";

import "./partners.css";

const Partners = () => {
  return (
    <div className="partners" id="partners">
      <h1>Our Partners</h1>
      <div className="partners__container">
        <div>
          <img src={partner2} alt="Ko-Lee" />
        </div>
        <div>
          <img src={partner4} alt="Woerle" />
        </div>
        <div>
          <img src={partner1} alt="Anchor" />
        </div>
        <div>
          <img src={partner3} alt="KTC" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
