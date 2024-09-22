import React from "react";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Departments from "./Components/Departments.jsx";
import Contacts from "./Components/Contacts.jsx";
import QuickNav from "./Components/QuickNav.jsx";
import Footer from "./Components/Footer.jsx";

import "./Style.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Departments />
      <Contacts />
      <QuickNav />
      <Footer />
    </>
  );
};

export default App;
