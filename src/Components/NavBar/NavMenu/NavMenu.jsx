import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//Images
import Logo from '../../../assets/Logo/FUND NEST LOGO-02.png';
import Logo1 from '../../../assets/Logo/FUND NEST LOGO-03.png';
import group from '../../../assets/Logo/group1.png';

//Icons
import { CiMail, CiLocationOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp, FaFacebookF, FaFeather   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";


const NavSm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    const handleSignUpClick = () => {
        navigate('/sign-up');
    };

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-full py-1 px-3 flex justify-between items-center bg-[#00AEEF] text-white font-sen'>
            <Link to='/'>
                <div className='max-w-[4.575rem]'>
                    <img src={Logo1} className='w-full h-full' alt='Logo' />
                </div>
            </Link>
            <div className='flex items-center'>
                <button
                    onClick={toggleMenu}
                    className="text-4xl transition-all duration-[7s] ease-in-out"
                >
                    <span className="transition-transform duration-[7s] ease-in-out">
                        {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </span>
                </button>
            </div>

            {isMenuOpen && (
                <div className={`absolute top-16 left-0 right-0 bg-black text-white z-50 h-screen origin-right transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    
                    <ul className='flex flex-col text-lg  divide-y-[0.001rem] text-center'>
                    <Link to='/' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                Home
                            </li>
                        </Link>
                        <Link to='/about-us' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                About Us
                            </li>
                        </Link>
                        <Link to='/how-it-works' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                How It Works
                            </li>
                        </Link>
                        <Link to='/campaign' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                Campaigns
                            </li>
                        </Link>
                        <Link to='/blog' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                Blog
                            </li>
                        </Link>
                        <Link to='/career' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                Career
                            </li>
                        </Link>
                        <Link to='/contact-us' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-3'>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleSignInClick} className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign In
                        </button>
                        <button onClick={handleSignUpClick} className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign Up
                        </button>
                        <button onClick={() => {handleStartCampaignClick(); setIsMenuOpen(false); }}   className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Start Campaign
                        </button>
                        
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavMd = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    const handleSignUpClick = () => {
        navigate('/sign-up');
    };

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-full py-1 px-3 flex justify-between items-center bg-[#00AEEF] text-white'>
            <Link to='/'>
                <div className='max-w-[5.5rem]'>
                    <img src={Logo1} className='w-full h-full' alt='Logo' />
                </div>
            </Link>
            <div className='flex items-center'>
                <button
                    onClick={toggleMenu}
                    className="text-5xl transition-all duration-[7s] ease-in-out"
                >
                    <span className="transition-transform duration-[7s] ease-in-out">
                        {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </span>
                </button>
            </div>

            {isMenuOpen && (
                <div className='absolute top-20 right-0 bg-black z-50 w-[50%] h-screen'>
                    <ul className='flex flex-col text-lg  divide-y-[0.001rem] text-center'>
                        <Link to='/' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                Home
                            </li>
                        </Link>
                        <Link to='/about-us' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                About Us
                            </li>
                        </Link>
                        <Link to='/how-it-works' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                How It Works
                            </li>
                        </Link>
                        <Link to='/campaign' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                Campaigns
                            </li>
                        </Link>
                        <Link to='/blog' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                Blog
                            </li>
                        </Link>
                        <Link to='/career' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                Career
                            </li>
                        </Link>
                        <Link to='/contact-us' onClick={() => setIsMenuOpen(false)} className='block'>
                            <li className='py-4'>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleSignInClick} className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign In
                        </button>
                        <button onClick={handleSignUpClick} className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign Up
                        </button>
                        <button onClick={() => {handleStartCampaignClick(); setIsMenuOpen(false); }} className=' text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Start Campaign
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLg = () => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate('/sign-in');
      };
      const handleSignUpClick = () => {
        navigate('/sign-up');
      };
      const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
      };
    return (
        <>  
            <section className=''>
                {/* Right Side */}
                <div className='bg-[#00AEEF] w-full p-1 px-4 text-white flex justify-between font-sen'>
                    <div className='flex justify-center gap-2 divide-x-[0.063rem] divide-white'>
                        {/* <div className='my-auto'>
                            <img src={group} alt="logo" className='h-[1.55rem] ' />
                        </div> */}
                        <div className='flex justify-center gap-1 py-1'>
                            <span className='text-xl ml-[0.5rem]'>
                                <CiLocationOn />
                            </span>
                            <div className='flex divide-x-[0.063rem] divide-white'>
                                <p className='text-sm my-auto text-gray-200 pr-[0.5rem]'>
                                    85 Great Portland Street, London
                                </p>
                                <p className='text-sm my-auto text-gray-200 pl-[0.5rem]'>
                                    Kigali , Rwanda
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <span className='text-xl ml-[0.5rem]'>
                                <RiCustomerService2Fill />
                            </span>
                            <p  className='text-sm my-auto text-gray-200 hover:text-white transition-colors duration-300 ease-in-out'>
                                24/7 Support
                            </p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <span className='text-xl ml-[0.5rem]'>
                                <IoIosMail />
                            </span>
                            <a href='mailto:info@fundnest.org' className='text-sm my-auto text-gray-200 hover:text-white transition-colors duration-300 ease-in-out'>
                                info@fundnest.org
                            </a>
                        </div>
                    </div>

                    {/* Left Side */}
                    <div className='flex justify-center gap-2 my-auto'>
                        <div>
                            <a href='https://wa.me/+250787171273' target='_blank'>
                                <span className='text-lg hover:text-black transition-colors duration-300 ease-in-out'>
                                    <FaWhatsapp />
                                </span>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/people/Fund-Nest/61564352366324/' target='_blank'>
                                <span className='text-lg hover:text-black transition-colors duration-300 ease-in-out'>
                                    <FaFacebookF  />
                                </span>
                            </a>
                        </div>
                        <div>
                            <a href='https://x.com/fundnest_off' target='_blank'>
                                <span className='text-lg hover:text-black transition-colors duration-300 ease-in-out'>
                                    <FaXTwitter  />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <nav className='w-full py-1 px-3 flex justify-between bg-white shadow-md'>
                <Link to='/'>
                    <div className='max-w-[5.5rem]'>
                        <img src={Logo} className='w-full h-full' />
                    </div>
                </Link>
                <div className='my-auto'>
                    <ul className='flex gap-3 font-semibold text-lg'>
                        <li className=''>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black '}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about-us' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/how-it-works' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                How It Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/campaign' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/career' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                Career
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex my-auto gap-3'>
                    <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                        <span className='my-auto text-xl'>
                            <FaFeather />
                        </span>
                        Start Campaign
                    </button>
                    <button onClick={handleSignInClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm shadow-md hover:bg-black duration-300 ease-in-out transition-colors'>
                        Sign In
                    </button>
                    <button onClick={handleSignUpClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm shadow-md hover:bg-black duration-300 ease-in-out transition-colors'>
                        Sign Up
                    </button>
                </div>
            </nav>
        </>
    );
}

const NavMenu = () => {
  return (
    <>
        <div className='md:hidden fixed z-50 w-full shadow-md top-0'>
            <NavSm />
        </div>
        <div className='hidden md:block lg:hidden fixed z-50 top-0 w-full shadow-md'>
            <NavMd />
        </div>
        <div className='hidden lg:block fixed z-50 w-full top-0'>
            <NavLg />
        </div>
    </>
  )
}

export default NavMenu;