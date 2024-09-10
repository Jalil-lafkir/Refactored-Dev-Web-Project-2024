import React from "react";
import logo from "../../public/assets/Imeges/Final Project Logo.png";

const Header = () => {
  return (
    <section className="HeaderSectionStyle">
      <header className="HeaderStyle">
        <div className="TitleStyle">
          <img className="LogoStyle" src={logo} alt="" />
          <h3 className="HeadingStyle">Higher School Of Teachers</h3>
        </div>
        <div className="">
          <nav className="NavBarStyle">
            <a href="#Home">Home</a>
            <a href="#">Services</a>
            <a href="">Sign In</a>
            <a href="#ContactUs">Contacts Us</a>
          </nav>
        </div>
      </header>
      <div className="headerVide"></div>
    </section>
  );
};

export default Header;
