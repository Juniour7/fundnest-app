import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//Images
import Logo from '../../../assets/Logo/FUND NEST LOGO-02.png';
import Logo1 from '../../../assets/Logo/FUND NEST LOGO-03.png';


//Icons
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FaWhatsapp, FaFacebookF, FaFeather   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <div className='max-w-[4.575rem]'>
                <img src={Logo1} className='w-full h-full' alt='Logo' />
            </div>
            <div className='flex items-center'>
                <button onClick={toggleMenu} className='text-4xl transition-all duration-700'>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isMenuOpen && (
                <div className='absolute top-16 left-0 right-0 bg-[#00AEEF] text-white z-50'>
                    <ul className='flex flex-col items-center py-2 text-lg'>
                        <li className='py-1'>
                            <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        {/* <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        </li> */}
                        <li className='py-1'>
                            <Link to='/campaign' onClick={() => setIsMenuOpen(false)}>Campaigns</Link>
                        </li>
                        {/* <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        </li> */}
                        {/* <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Career</Link>
                        </li> */}
                        <li className='py-1'>
                            <Link to='/contact-us' onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className='flex flex-col items-center'>
                        <button onClick={handleStartCampaignClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Start Campaign
                        </button>
                        <button onClick={handleSignInClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign In
                        </button>
                        <button onClick={handleSignUpClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign Up
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
            <div className='max-w-[5.5rem]'>
                <img src={Logo} className='w-full h-full' alt='Logo' />
            </div>
            <div className='flex items-center'>
                <button onClick={toggleMenu} className='text-white'>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isMenuOpen && (
                <div className='absolute top-16 left-0 right-0 bg-[#00AEEF] z-10'>
                    <ul className='flex flex-col items-center py-2'>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        </li>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Campaigns</Link>
                        </li>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        </li>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Career</Link>
                        </li>
                        <li className='py-1'>
                            <Link onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className='flex flex-col items-center'>
                        <button onClick={handleStartCampaignClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Start Campaign
                        </button>
                        <button onClick={handleSignInClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign In
                        </button>
                        <button onClick={handleSignUpClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 text-sm my-1'>
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

            <div className={`hidden md:flex gap-3 ml-auto`}>
                <ul className='flex gap-3 font-semibold'>
                    <li><Link>Home</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Campaigns</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Career</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
                <div className='flex gap-3'>
                    <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm shadow-md'>
                        Start Campaign
                    </button>
                    <button onClick={handleSignInClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm shadow-md'>
                        Sign In
                    </button>
                    <button onClick={handleSignUpClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 text-sm shadow-md'>
                        Sign Up
                    </button>
                </div>
            </div>
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
            <section className=' '>
                {/* Right Side */}
                <div className='bg-[#00AEEF] w-full p-1 px-4 text-white flex justify-between font-sen'>
                    <div className='flex justify-center gap-2 divide-x-[1px] divide-white'>
                        <div className='flex justify-center gap-1'>
                            <span className='text-xl'>
                                <CiMail />
                            </span>
                            <a href='mailto:info@fundnest.org' className='text-sm my-auto text-gray-200 hover:text-white transition-colors duration-300 ease-in-out'>
                                info@fundnest.org
                            </a>
                        </div>
                        <div className='flex justify-center gap-1 '>
                            <span className='text-xl ml-[0.5rem]'>
                                <CiLocationOn />
                            </span>
                            <p className='text-sm my-auto text-gray-200'>
                                85 Great Portland Street, London
                            </p>
                        </div>
                        <div className='flex justify-center gap-1 '>
                            <span className='text-xl ml-[0.5rem]'>
                                <CiLocationOn />
                            </span>
                            <p className='text-sm my-auto text-gray-200'>
                                1 KN 78 St, Kigali Norrsken House Kigali.
                            </p>
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
                <div className='max-w-[5.5rem]'>
                    <img src={Logo} className='w-full h-full' />
                </div>
                <div className='my-auto'>
                    <ul className='flex gap-3 font-semibold text-lg'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                Home
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/about-us' className={({ isActive }) => isActive ? 'text-[#00AEEF]' : 'text-black'}>
                                About Us
                            </NavLink>
                        </li> */}
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
        <div className='md:hidden'>
            <NavSm />
        </div>
        <div className='hidden md:block lg:hidden'>
            <NavMd />
        </div>
        <div className='hidden lg:block'>
            <NavLg />
        </div>
    </>
  )
}

export default NavMenu;