import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";

//Images
import Logo from "../../assets/Logo/FUND NEST LOGO-02.png";


const Navbar = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/sign-in');
  };
  const handleSignUpClick = () => {
    navigate('/sign-up');
  };


  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closemenu = () => {
        setIsOpen(false);
    }

  return (
    <>
    <header className="w-full fixed top-0 z-50">
      <nav className="h-[60px] md:h-[90px] bg-white lg:shadow-md flex justify-between md:justify-around items-center ">
        <NavLink to="/">
          <div className="w-[90px] h-[75px] md:w-[130px] md:h-[100px]">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
        </NavLink>
        <div className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-3 lg:text-lg font-semibold font-Main">
            <li className="border-b-0 hover:border-[#4FC0E8] hover:border-b-2  transition-all duration-300 lg:px-5 py-2 my-auto">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="border-b-0 hover:border-[#4FC0E8] hover:border-b-2  transition-all duration-300 lg:px-5 py-2 my-auto">
              <Link 
                to="/#about"
                smooth={true}
                duration={1000}
                className='cursor-pointer'
              >
                Fundraising Guide
              </Link>
            </li>
            <li className="border-b-0 hover:border-[#4FC0E8] hover:border-b-2  transition-all duration-300 lg:px-5 py-2 my-auto">
              <Link 
                to="/#campaign"
                smooth={true}
                duration={1000}
                className='cursor-pointer'
              >
                Campaigns
              </Link>
            </li>
            <li className="border-b-0 hover:border-[#4FC0E8] hover:border-b-2  transition-all duration-300 lg:px-5 py-2 my-auto">
              <Link 
                to="/#faq"
                smooth={true}
                duration={1000}
                className='cursor-pointer'
              >
                FAQs
              </Link>
            </li>
            <li className="border-b-0 hover:border-[#4FC0E8] hover:border-b-2  transition-all duration-300 lg:px-5 py-2 my-auto">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:flex md:gap-2 lg:gap-4 text-lg hidden">
          <button className="bg-white hover:shadow-md text-[#4FC0E8] border border-[#4FC0E8] rounded-md px-3 lg:px-6 py-1 hover:text-[#4FC0E8] hover:bg-white hover:border hover:border-[#4FC0E8] transition-all duration-300 ease-linear" onClick={handleSignInClick}>Sign In</button>
          <button className="bg-[#4FC0E8] hover:shadow-md text-white border border-[#4FC0E8] rounded-md px-3 lg:px-6 py-1 transition" onClick={handleSignUpClick}>Sign Up</button>
        </div>

        {/* Mobile Screen */}
        <section className="md:hidden">
          <div className="text-5xl my-auto hover:cursor-pointer z-50 mr-3" onClick={toggleMenu}>
            <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
          </div>
        </section>
      </nav>
      <div className='w-full h-[5px] bg-[#4FC0E8]'/>


      {/* Mobile Screen Dropdown */}
      <section className="relative">
        <div
          className={`absolute top-0 right-0 w-full h-screen bg-[#4FC0E8]  bg-opacity-50 backdrop-blur-md text-black z-50 text-lg transition-all duration-500 overflow-hidden origin-top-right  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul className="p-4 flex flex-col justify-center space-y-[20px] divide-y">
            <li className="mt-[15px]">
              <NavLink to="/" onClick={closemenu}>
                <h1 className="text-xl">Home</h1>
              </NavLink>
            </li>
            <li className="mt-[15px]">
              <Link to="/#about" onClick={closemenu}>
                <h1 className="text-xl">Fundraising Guide</h1>
              </Link>
            </li>
            <li className="mt-[15px]">
              <Link to="/campaign" onClick={closemenu}>
                <h1 className="text-xl">Campaigns</h1>
              </Link>
            </li>
            <li className="mt-[15px]">
              <Link to="/#faq" onClick={closemenu}>
                <h1 className="text-xl">FAQS</h1>
              </Link>
            </li>
            <li className="mt-[15px]">
              <NavLink to="/contact-us" onClick={closemenu}>
                <h1 className="text-xl">Contact Us</h1>
              </NavLink>
            </li>
          </ul>
          <div className="p-4 space-y-4">
            <div>
              <button onClick={handleSignUpClick} className="bg-[#4FC0E8] text-white w-[90%] mx-auto px-6 py-1 rounded-lg">Sign Up</button>
            </div>
            <div>
              <button onClick={handleSignInClick} className="bg-[#4FC0E8] text-white w-[90%] mx-auto px-6 py-1 rounded-lg">Sign In</button>
            </div>
          </div>
        </div>
      </section>
    </header>
    </>
  );
};

export default Navbar;