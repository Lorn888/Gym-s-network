import React from "react";
import { logo } from "../assets";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-[white] sm:px-8 px-4 border margin border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain " />
      </Link>
      <div style={{ display: "flex" }}>
        <Link
          to="/login"
          className="font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4"
        >
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
