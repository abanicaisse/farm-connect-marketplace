import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1>Farm-Connect Project</h1>

        <div className="footer__container--links">
          <div className="footer__container--links-left">
            <div>
              <p>Links</p>
              <a>Contact</a>
              <a>Affiliation </a>
              <a>Terms of Use</a>
            </div>
            <div>
              <p>Company</p>
              <a>Blog</a>
              <a>Shop</a>
              <a>About</a>
            </div>
            <div>
              <p>Categories</p>
              <a>Eggs</a>
              <a>Fruits</a>
              <a>Drinks</a>
              <a>Eatables</a>
            </div>
            <div>
              <p>Terms</p>
              <a>Privacy Policy</a>
              <a>Terms and Conditions</a>
            </div>
          </div>
          <div className="footer__container--links-right">
            <p>subscribe to NewsLetter</p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button className="button">Submit</button>
            </div>
          </div>
        </div>

        <div className="footer__container--copyright">
          <p>All Right Reserved - Farm-Connect</p>
          <div className="footer__container--copyright-payment">
            <div>
              <img
                src="../../../src/assets/payments/mastercard.png"
                alt="Master Card"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/payments/visa-logo.png"
                alt="Master Card"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/payments/UnionPay.png"
                alt="Master Card"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/payments/ApplePay.png"
                alt="Master Card"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/payments/GooglePay.png"
                alt="Master Card"
              />
            </div>
          </div>
          <p>Terms and Conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
