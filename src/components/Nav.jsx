import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "420px";
      }
    }
  };
  return (
    <nav className="w-full px-[5%] h-[60px] mx-auto flex overflow-hidden flex-wrap lg:items-center lg:justify-between duration-1000 z-10 bg-white border-b">
      <header className="w-full lg:w-fit h-[60px] text-[#1B1F2D] flex justify-between items-center">
        <p className="text-[18px] font-bold">
          largerthan<i>i</i>
        </p>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </header>
      <aside className="w-full lg:w-fit text-[#333333] flex flex-wrap gap-0 lg:gap-[40px]">
        <NavLink
          to="/"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit"
        >
          About us
        </NavLink>
        <NavLink
          to="/whatwedo"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit"
        >
          What we do
        </NavLink>
        <NavLink
          to="/media"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit"
        >
          Media
        </NavLink>
        <NavLink
          to="/contact"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit"
        >
          Contact
        </NavLink>
      </aside>
      <button className="w-[90px] h-[40px] bg-[#1D2130] text-white rounded">
        Donate
      </button>
    </nav>
  );
};

export default Nav;
