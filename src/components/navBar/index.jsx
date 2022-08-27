import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact,FaBars } from "react-icons/fa";
import { HiX} from "react-icons/hi";
import { navMenus } from "../config";

// css
import './style.scss'

export const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick =()=>{
        setClick(!click);
    }
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
        <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
          {navMenus.map((item, index) => {
            return (
              <li key={index} className="navbar__container__menu__item">
                <Link className="navbar__container__menu__item__links" to={item.to}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar_icon" onClick={handleClick}>
          {click ? <HiX size={30}/> : <FaBars size={30}/>}
        </div>
      </div>
    </nav>
  );
};
