import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

const Page = (props) => {
  return (
    <div className="categories-text mx-3 p-4 active-page">
      <NavLink
        to={props.source}
        className="text-decoration-none text-white "
        activeclassname="active"
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default Page;
