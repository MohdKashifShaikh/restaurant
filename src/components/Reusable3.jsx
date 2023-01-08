import React from "react";
import TextImg from "../images/text-section.png";
import AndImg from "../images/and.png";
import FavDishImg from "../images/fav-dish.png";

const Reusable3 = () => {
  return (
    <section className="flex-box multi-img-section">
      <div className="text-div">
        <img src={TextImg} alt="text-img" width={350}  />
      </div>
      <div className="flex-box and-div">
        <img src={AndImg} alt="text-img" width={80} />
      </div>
      <div className="fav-div">
        <img src={FavDishImg} alt="text-img" width={400} />
      </div>
    </section>
  );
};

export default Reusable3;
