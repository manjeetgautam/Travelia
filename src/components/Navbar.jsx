import React, { useEffect, useState } from "react";
import  "./Navbar.css";
import { MenuItems } from "./MenuItems";

export const Navbar = () => {
  const [hamicon, setHamicon] = useState(false);

  return (
    <nav className="navbarItems">
      <h1 className="navbarLogo">Travelia</h1>

      <div className="menuicon">
        <i
          className={hamicon === false ? "fas fa-bars" : "fas fa-times"}
          onClick={() => {
            hamicon === false ? setHamicon(true) : setHamicon(false);
          }}
        ></i>
      </div>

      <ul className={hamicon===false?"navbarMenu":"navbarMenu active"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="icon">
              <Link to={item.url} className="a">
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
