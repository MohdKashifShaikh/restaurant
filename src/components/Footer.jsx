import React from "react";
import FooterLogo from "../images/footer-logo.svg";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-heading">
        <h2>SERVE JACKFRUIT DISHES THAT PEOPLE LOVE</h2>
        <button className="btn-green">Order Jackfruit</button>
      </div>
      <div className="flex-box footer-content-div">
        <div className="flex-box footer-logo">
          <img src={FooterLogo} alt="footer-logo" width={100} />
        </div>
        <div className="flex-box footer-text">
          <h2>
            Fruit <br />
            For Meat
            <br /> Lovers
          </h2>
        </div>
        <div className="flex-box footer-links">
          <label>Products</label>
          <label>Resellers</label>
          <label>Events</label>
          <label>Faqs</label>
          <label>Press</label>
          <label>Jobs</label>
        </div>
        <div className="flex-box footer-address">
          <h5>Address</h5>
          <span>
            Pieter Goedkoopweg 16 <br /> 2031 EL Haarlem <br />
            Netherlands
          </span>
        </div>
        <div className="flex-box footer-email">
          <h5>Get In Touch</h5>
          <span>jack@meetjack.nl</span>
        </div>
        <div className="flex-box footer-social-links">
          <AiOutlineInstagram />
          <CiFacebook />
          <AiOutlineLinkedin />
          <AiOutlineYoutube />
        </div>
      </div>
      <div className="flex-box footer-bottom-content">
        <div className="text-left">&copy; 2022 Meet Jack — All rights reserved</div>
        <div className="text-right">
          General Terms & Conditions I Privacy Policy & Cookies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
