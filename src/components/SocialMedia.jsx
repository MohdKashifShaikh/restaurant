import React from "react";
import SocialImg1 from "../images/social-1.jpg";
import SocialImg2 from "../images/social-2.jpg";
import SocialImg3 from "../images/social-3.jpg";
import { AiOutlineInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <section className="social-section">
      <h2>Follow Jack on Instagram</h2>
      <div className="flex-box social-media-section">
        <div className="social-media-card">
          <img src={SocialImg1} alt="" width={350} />
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
        <div className="social-media-card">
          <img src={SocialImg2} alt="" width={350} />
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
        <div className="social-media-card">
          <img src={SocialImg3} alt="" width={350} />
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
