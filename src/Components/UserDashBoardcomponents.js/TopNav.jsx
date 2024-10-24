import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { getLoggedInUseremail, getTempuser } from "../../services/api";

const TopNav = ({ logo, menuIcon, title, email, menuIconClickHandler,isLeftNavOpen }) => {
  const { tempuserEmail, tempuserId } = getTempuser();
  const loggedInEmail = getLoggedInUseremail();
  const emailToUse = tempuserEmail || loggedInEmail;
  return (
    <nav className={`flex fixed top-0 left-0 w-full h-20 sm:h-auto  sm:text-blue justify-between bg-white shadow-md z-10`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-between w-64 bg-gray-100 rounded-sm">

        <div className="flex items-center flex-col">
          <img src={logo || "https://iraady.com/static/media/FUND%20NEST%20LOGO-02.fefe70c6bccb8f298332.png"} alt="Logo" className="h-12" />
          <span className="ml-2 text-gray-700">{title || "My fundraisers"}</span>
        </div>
        <button className="px-2 focus:outline-none hover:bg-gray-200 rounded-sm transition duration-300" onClick={menuIconClickHandler}>
           `{isLeftNavOpen ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}`
          </button>
        </div>
        <div className="flex items-center px-4">
         
          <span className="ml-2 text-gray-700">{email ||emailToUse}</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;