import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { client } from "../client";
import logo from "../assets/logo.png";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [toggle, setToggleSidebar] = useState(false);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
