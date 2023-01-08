import React from "react";
import Image1 from "../images/not-easy.png";

const Reusable1 = () => {
  return (
    <section className="flex-box not-easy-section">
      <div className="content-div">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </div>
      <div className="flex-box not-easy-div">
        <img src={Image1} alt="food-image" style={{ width: "300px" }} />
      </div>
    </section>
  );
};

export default Reusable1;
