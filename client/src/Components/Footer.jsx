import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="FooterStyle" id="Contacts">
        <div className="">
          <nav className="FooterNavStyle">
            <a href="mail to:lafkir.abdeldjalile35@g.ens-kouba.dz">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </nav>
        </div>
        <div className="FooterTitelStyle">
          <p>&#169; 2024 All Rights Reserved</p>
          <p>
            This Site Developed by <span> Abdeljalil Lafkir </span>
          </p>
        </div>
      </footer>
      <div className="FooterVide"></div>
    </>
  );
};

export default Footer;
