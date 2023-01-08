import React from "react";
import FoodImg from "../images/pexels-1.jpg";

const Reusable4 = () => {
  return (
    <section className="flex-box delicious-recipes-div">
      <div className="">
        <h2 className="jackfruit-heading">
          <span>Delicious</span>
          Jackfruit <br />
          Recipes
        </h2>
        <p className="jackfruit-content">
          Get inspired by our mouth watering jackfruit recipes
          <br /> made by top chefs in our very own kitchen.
        </p>
        <button className="btn-black">Jackfruit Recipes</button>
      </div>
      <div>
        <img src={FoodImg} alt="food-image" width={350} />
      </div>
    </section>
  );
};

export default Reusable4;
