import React from "react";
import { Image, Button } from "react-bootstrap";
import { BrowserRouter, NavLink } from "react-router-dom";

const PageOnMobile = (props) => {
  return (
    <NavLink
      to={props.source}
      className="text-decoration-none text-white"
      activeclassname="active"
    >
      <Button className="bg-transparent shadow-none border-none">
        <Image src={props.icon}></Image>
      </Button>
    </NavLink>
  );
};

export default PageOnMobile;
