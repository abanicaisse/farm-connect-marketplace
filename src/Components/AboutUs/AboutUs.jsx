import React from "react";

import { Slider } from "../";

import "./about-us.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us__container">
        <div className="about-us__container--detail">
          <h1>Who We are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a className="button" href="">
            Read More
          </a>
        </div>
        <div className="about-us__container--quote">
          <div>
            <img src="../../../src/assets/icons/quote-icon.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="../../../src/assets/icons/signature.svg" alt="" />
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default AboutUs;
