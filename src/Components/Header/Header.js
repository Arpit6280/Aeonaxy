import React from "react";
import brilliant_logo from "../../Images/brilliant_logo.png";

function Header() {
  return (
    <div className="w-[96%] lg:w-[85%] mx-32">
      <ul className="flex justify-between px-3 py-6 ">
        <li className="text-xl flex">
          <img src={brilliant_logo} alt="" className="w-6 h-6 mt-[2px] mr-1" />{" "}
          <span>BRILLIANT </span>
        </li>
        <li>
          {" "}
          <button className="py-1 px-4 border-2 rounded-md border-black">
            Log In
          </button>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
