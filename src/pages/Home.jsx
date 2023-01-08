import React from "react";
import Reusable1 from "../components/Reusable1";
import Img1 from "../images/meaty-texture.svg";
import Img2 from "../images/no-allergens.svg";
import Img3 from "../images/highFiber_icon.png";
import Img4 from "../images/vegan_icon.png";
import Reusable2 from "../components/Reusable2";
import Reusable3 from "../components/Reusable3";
import Display1 from "../images/display1.png";
import Reusable4 from "../components/Reusable4";
import SocialMedia from "../components/SocialMedia";
import FoodChop from "../images/food-1.jpg";

const Home = () => {
  document.title = "JackFruit";
  return (
    <>
      <section className="banner-section">
        <div className="banner-content">
          <h1 className="banner-heading">Jack for Restaurants</h1>
          <p>Serve Jackfruit dishes people love</p>
          <button className="btn-green">Get Inspired</button>
        </div>
      </section>
      <section className="flex-box multi-icon-section">
        <div className="flex-box icon-divs">
          <img src={Img1} alt="" width={100} />
        </div>
        <div className="flex-box icon-divs">
          <img src={Img2} alt="" width={100} />
        </div>
        <div className="flex-box icon-divs">
          <img src={Img3} alt="" width={100} />
        </div>
        <div className="flex-box icon-divs">
          <img src={Img4} alt="" width={100} />
        </div>
      </section>
      <Reusable1 />
      <Reusable2 />
      <Reusable3 />
      <section className="multi-display-section">
        <div className="flex-box display-img-div">
          <img src={Display1} alt="image" width={1100} />
        </div>
        <div className="flex-box display-img-div">
          <img src={Display1} alt="image" width={1100} />
        </div>
        <div className="flex-box display-img-div">
          <div className="food-chop-image">
            <img src={FoodChop} alt="jackfruit-image" />
          </div>
          <div className="raw-jack-div">
            <h3>Raw jack</h3>
            <p>
              Are you looking for bulks of fresh-frozen jackfruit to create your jackfruit
              masterpieces?
            </p>
            <button className="btn-green">Get Raw JackFruit</button>
          </div>
        </div>
      </section>
      <Reusable4 />
      <SocialMedia />
      <section className="flex-box form-section">
        <div className="form-left-content">
          <h3>KEEP AN EYE ON JACK</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="form-div">
          <form>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Email address" />
            <div>
              <button
                type="submit"
                className="btn-black"
                onClick={(e) => e.preventDefault()}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
