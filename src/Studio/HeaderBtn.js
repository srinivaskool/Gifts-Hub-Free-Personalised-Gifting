import React from "react";
import "./HeaderBtn.css";

function HeaderBtn({ selected, Icon, title, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className={`HeaderBtn ${selected && "selected"}`}
    >
      <Icon className="HeaderBtn__icon" />
      <h2 className="HeaderBtn__title"> {title} </h2>{" "}
    </div>
  );
}

export default HeaderBtn;
