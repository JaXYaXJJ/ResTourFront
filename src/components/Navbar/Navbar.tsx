import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiLighthouse } from "react-icons/gi";
import { BsGithub, BsSun } from "react-icons/bs"
import { BiSolidMoon } from "react-icons/bi"
import "./Navbar.scss";
import DarkModeContext from "../../contexts/DarkModeContext";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {

  const { isLoggedIn, isAdmin, logout } = useContext(AuthContext)
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  // const isActive = (o: any) =>
  //   o.isActive ? "underline decoration-4 underline-offset-8 decoration-orange-500" : "";
  // const isActivePlusIcon = (o: any) =>
  //   o.isActive ? "underline decoration-4 underline-offset-8 decoration-orange-500 flex items-center gap-1" : "gap-1 flex items-center";

  return (
    <nav
      id="app-nav"
      className="
    sm:p-8 sm:gap-5 sm:bg-gray-300 sm:text-gray-500 flex items-center
    p-8 gap-5 bg-green-200 text-green-800
    dark:bg-gray-800 dark:text-gray-500"
    >
      <NavLink className="gap-3 flex items-center" to={"/home"}>
        <GiLighthouse id="icon" className="text-3xl" />
        Home
      </NavLink>
      <NavLink to={"/tours"}>Tours</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <div className="flex-1"></div>
      {isAdmin && <NavLink to={"/admin"}>Admin</NavLink>}
      {isLoggedIn && <button onClick={() => {
        logout()
      }}>Logout</button>}
      {!isLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
      {!isLoggedIn && <NavLink to={"/register"}>Register</NavLink>}
      <div onClick={() => {
        toggleDarkMode()
      }}>
        {darkMode ?
          <BsSun className="text-2xl" /> :
          <BiSolidMoon className="text-2xl" />}
      </div>
      <a href="https://github.com/JaXYaXJJ">
        <BsGithub className="text-2xl" />
      </a>
    </nav>
  );
};

export default Navbar;
