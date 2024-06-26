import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
