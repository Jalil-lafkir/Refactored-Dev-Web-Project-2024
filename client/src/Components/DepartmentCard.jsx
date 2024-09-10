import React from "react";

const DepartmentCard = (departmentObj) => {
  const { title, DepatmentCover, intro, id } = departmentObj;
  return (
    <div className="DepartmentCardStyle">
      <img src={DepatmentCover} />
      <div className="info">
        <h1>{title}</h1>
        <p>{intro}</p>
        <button id={id}>Read More</button>
      </div>
    </div>
  );
};

export default DepartmentCard;
