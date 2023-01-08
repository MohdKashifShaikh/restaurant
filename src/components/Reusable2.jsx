import React from "react";
import HiJack from "../images/hi-jack.png";

const Reusable2 = () => {
  return (
    <section className="flex-box jackfruit-section">
      <div className="flex-box jackfruit-image-div">
        <img src={HiJack} alt="food-image" style={{ width: "360px" }} />
      </div>
      <div className="middle-div"></div>
      <div className="jackfruit-content-div">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>
        <button className="btn-green">Jackfruit Products</button>
      </div>
    </section>
  );
};

export default Reusable2;
