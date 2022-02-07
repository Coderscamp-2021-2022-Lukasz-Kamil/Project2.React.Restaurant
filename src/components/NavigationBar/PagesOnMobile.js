import React from "react";
import PageOnMobile from "./PageOnMobile";
import HomeIcon from "../../images/home-icon.png";
import MenuIcon from "../../images/menu-icon.png";
import ContactIcon from "../../images/contact-icon.png";

const PagesOnMobile = () => {
  const pagesOnMobile = [
    { source: "/", icon: HomeIcon },
    { source: "/menu", icon: MenuIcon },
    { source: "/contact", icon: ContactIcon },
  ];
  return pagesOnMobile.map(({pageOnMobile}) => (
    <PageOnMobile
      source={pageOnMobile.source}
      icon={pageOnMobile.icon}
      key={pageOnMobile.icon}
    />
  ));
};

export default PagesOnMobile;
