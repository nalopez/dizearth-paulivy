import React from "react";

const BannerTitle = () => {
  return (
    <div className="banner-title">
      <h1 className="title"> DizEarth-Paulivy </h1>
      <h4 className="subtitle">Dessert for your tummy & eye</h4>
      <style jsx>
        {`
          .banner-title {
            color: #ffffff;
            text-shadow: 2px 2px 4px #000000;
            text-align: center;
          }

          .title {
            font-family: "Leckerli One", cursive;
            margin-bottom: 0;
            font-size: 60px;
          }
          .subtitle {
            margin-top: 0;
            font-family: "Sanchez", serif;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
};

export default BannerTitle;
