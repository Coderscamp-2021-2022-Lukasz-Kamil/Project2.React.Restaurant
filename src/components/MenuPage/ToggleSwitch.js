import React from "react";
import "./ToggleSwitch.css"

const ToggleSwitch = ({ label, isVegeHandler }) => {
  return (
    <div className="d-flex">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onChange={isVegeHandler} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;