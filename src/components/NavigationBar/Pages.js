import React from "react";
import Page from "./Page";

const Pages = () => {
  const pages = [
    { source: "/", name: "Home" },
    { source: "/menu", name: "Menu" },
    { source: "/contact", name: "Contact" },
  ];
  return pages.map((page) => (
    <Page source={page.source} name={page.name} key={page.name} />
  ));
};

export default Pages;
