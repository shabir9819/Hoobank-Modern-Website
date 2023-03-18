import React, { useState } from "react";
import styles from "../../../styles";
import { logo, close, menu } from "../../assets/index";
import { navLinks } from "../../constants";

export default function () {
  const [toggle, settoggle] = useState(false);

  //toggleEvent function
  const toggleEvent = () => {
    settoggle((preVal) => !preVal);
  };

  return (
    <header className="header text-white w-full ">
      <nav
        className={`navbar w-full overflow-hidden  flex justify-between items-center py-6 `}
      >
        <div className={`logo `}>
          <img className="w-[82px] h-[23px]" src={logo} alt="logo" />
        </div>
        <div className="menu">
          {/*Desktop menulink */}
          <ul className="menu__list list-none hidden md:flex justify-center items-center">
            {navLinks.map((link, index) => {
              return (
                <li
                  className={`menu__listitems-desktop font-poppins font-normal cursor-pointer text-[16px] ${
                    index < navLinks.length - 1 ? "mr-10" : "mr-0"
                  }`}
                  key={link.id}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>

          {/* hamburger icon*/}
          <div className="menu__link list-none flex md:hidden flex-1  justify-center items-center">
            <img
              src={toggle ? close : menu}
              alt="hamburger"
              className="w-[28px] h-[28px] object-contain"
              onClick={toggleEvent}
            />
            <div className={`${toggle ? "flex" : "hidden"} bg-black-gradient absolute top-20 right-0 p-6 mx-4 my-2 rounded-xl sidebar`}>
                {/*Mobile menulink */}
          <ul className="menu__list list-none flex flex-col md:hidden justify-center items-center">
            {navLinks.map((link, index) => {
              return (
                <li
                  className={`menu__listitems font-poppins font-normal cursor-pointer text-[16px]`}
                  key={link.id}
                >
                  <a href={`#${link.id}`} onClick={toggleEvent}>{link.title}</a>
                </li>
              );
            })}
          </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
