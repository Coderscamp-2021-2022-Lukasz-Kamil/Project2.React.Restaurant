import React from "react";
import { Button } from "react-bootstrap";

function MenuCategories({button, filter}) {
    return (
        button.map((cat, i) =>{
            return  <Button type="button" onClick={() => filter(cat)} className="menu-button shadow-none border-none btn " key={Math.floor(Math.random() * 2000)}>{cat}</Button>
        })
    );
};

export default MenuCategories; 