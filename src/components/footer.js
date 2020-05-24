import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      Powered by Nix Codes
      <style jsx>
        {`
          .footer {
            height: 50px;
            margin-top: -50px;
            overflow: hidden;
            width: 100%;
            z-index: 2;
            bottom: 0px;
            text-align: center;
            background: #000000;
            color: white;
            opacity: 0.8;
            line-height: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
