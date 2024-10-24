import LeftNav from "./LeftNav";
import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { FaRegCopyright } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

const UserDashBoardLayout = () => {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(window.innerWidth >= 768);

  const toggleLeftNav = () => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };

  const handleTabClick = () => {
    if (window.innerWidth < 768) {
      setIsLeftNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsLeftNavOpen(true);
      } else {
        setIsLeftNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav menuIconClickHandler={toggleLeftNav} isLeftNavOpen={isLeftNavOpen} />
      <div className="flex flex-1 pt-16">
        <LeftNav className="fixed top-20 left-0 overflow-y-auto bg-gray-50" isLeftNavOpen={isLeftNavOpen} onTabClick={handleTabClick} />
        <div className={`mb-32 flex-1 p-4 overflow-y-auto transition-all duration-300 ${isLeftNavOpen ? "ml-64" : "ml-0"}`}>
          <Outlet />
        </div>
      </div>
      <section className="w-full bg-[#4FC0E8] flex justify-center items-center gap-1 text-white p-2 mdl:bg-black-400">
        <div className="text-xl">
          <FaRegCopyright />
        </div>
        <div>
          <h4 >Fund Nest 2024. All rights reserved.</h4>
        </div>
      </section>
    </div>
  );
};

export default UserDashBoardLayout;
