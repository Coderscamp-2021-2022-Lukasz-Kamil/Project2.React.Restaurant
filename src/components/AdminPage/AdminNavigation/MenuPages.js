import { NavLink } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

const MenuPages = ({ source, icon, name }) => {
  return (
    <div
      className=" mb-3 p-2 active-page fs-6 bg-light w-10"
      style={{ fontFamily: "Roboto", maxHeight: "60px", maxWidth: "20vw" }}
    >
      <NavLink
        to={source}
        className="text-decoration-none border-3 d-flex w-100"
        activeclassname="active"
      >
        <Button className="text-decoration-none bg-transparent shadow-none border-none fw-bold">
          <Image src={icon} className="active-page d-inline"></Image>
          <div className="text-secondary d-inline mx-4">{name}</div>
        </Button>
      </NavLink>
    </div>
  );
};

export default MenuPages;
