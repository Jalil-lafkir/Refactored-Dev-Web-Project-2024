import React from "react";
import departmentsIntros from "../../public/assets/data/departmentsData.js";
import DepartmentCard from "./DepartmentCard.jsx";
const departmentsData = departmentsIntros();
const [math, computerScience, physics, NaturalScience] = departmentsData;

const Home = () => {
  return (
    <section>
      <div className="SiteIntroStyle">
        <p className="BigTextStyle">Hey there!</p>
        <br />
        <p className="OtherTextStyle">
          Welcome to our website for The Higher School of Teachers in Kouba,
          Algeria!
          <br />
          Explore our services, including departments, sections , groups ,
          timetables , exams , degrees! <br />
          designed with easy access to help you become a successful educator or
          researcher.
          <a href="#Departments" className="OtherTextStyleLink">
            Check it out!
          </a>
        </p>
      </div>

      <div className="Departments" id="Departments">
        <p className="DepartmensTitleStyle">Departments</p>
        <div className="DepartmentsCardsStyle">
          <DepartmentCard departmentObj={math} />
          <DepartmentCard departmentObj={computerScience} />
          <DepartmentCard departmentObj={physics} />
          <DepartmentCard departmentObj={NaturalScience} />
        </div>
      </div>
    </section>
  );
};

export default Home;
