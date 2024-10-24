import React from 'react'
import { Link } from 'react-router-dom';


//Images
import Logo from '../../Assets/Logo/FUND NEST LOGO-02.png';

//Icons
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaFacebookSquare,FaRegCopyright, FaRegBuilding  } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline  } from "react-icons/io5";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { GoChevronRight } from "react-icons/go";




const Footer = () => {
  return (
    <>
        <footer className='w-full bg-[#102C57] relative pt-[30px]'>
            <section className='w-[97%] md:w-[90%] mx-auto text-white grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2 p-2 md:p-5 '>
                <div>
                    <div className='w-[150px] h-[130px]'>
                        <img src={Logo} alt='logo' className='w-full h-full' />
                    </div>
                    <p className='mt-[10px]'>Join Fundnest, the game-changing tech startup, empowering non-profits and social enterprises. Sign up now to access cutting-edge technologies and make a positive impact in your community today</p>
                    <div className='flex  gap-3 mt-[20px]'>
                        <div className='text-[#4FC0E8] text-2xl w-[40px] h-[40px] bg-[#D9D9D9] flex flex-col justify-center items-center rounded-full hover:bg-[#4FC0E8] hover:text-white transition-colors duration-300'>
                            <a href='https://x.com/fundnest_off' target='_blank'>
                                <FaXTwitter />
                            </a>
                        </div>
                        <div className='text-[#4FC0E8] text-2xl w-[40px] h-[40px] bg-[#D9D9D9] flex flex-col justify-center items-center rounded-full hover:bg-[#4FC0E8] hover:text-white transition-colors duration-300'>
                            <a href='https://www.linkedin.com/showcase/fund-nest/?viewAsMember=true' target='_blank'>
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className='text-[#4FC0E8] text-2xl w-[40px] h-[40px] bg-[#D9D9D9] flex flex-col justify-center items-center rounded-full hover:bg-[#4FC0E8] hover:text-white transition-colors duration-300'>
                            <a href='https://www.instagram.com/fundnestofficial/' target='_blank'>
                                <FaInstagram />
                            </a>
                        </div>
                        <div className='text-[#4FC0E8] text-2xl w-[40px] h-[40px] bg-[#D9D9D9] flex flex-col justify-center items-center rounded-full hover:bg-[#4FC0E8] hover:text-white transition-colors duration-300'>
                            <a href='https://www.facebook.com/people/Fund-Nest/61564352366324/' target='_blank'>
                                <FaFacebookSquare  />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl'>Information</h1>
                    <ol className='mt-[10px] text-lg font-normal space-y-1'>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/" className=''>
                                Home
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/#about" className='hover:text-[#4FC0E8]'>
                                Fundraising Guide
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/fundraising-form" className='hover:text-[#4FC0E8]'>
                                Start a Fundraiser
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/terms-conditions" className='hover:text-[#4FC0E8]'>
                                Terms and Conditions
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/privacy-policy" className='hover:text-[#4FC0E8]'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/anti-money-laundering" className='hover:text-[#4FC0E8]'>
                                Anti-Money Laundering Policy
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/know-your-customer" className='hover:text-[#4FC0E8]'>
                                Know Your Customer
                            </Link>
                        </li>
                        <li className='flex gap-1 group hover:text-[#4FC0E8]'>
                            <span className='text-[#4FC0E8] text-xl my-auto'>
                                <GoChevronRight/>
                            </span>
                            <Link to="/refund-policy" className='hover:text-[#4FC0E8]'>
                                Refund Policy
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className='text-md'>
                    <h1 className='text-3xl'>Contact Us</h1>
                    <div className='flex gap-2 mt-[20px] text-md'>
                        <div className='text-[#4FC0E8] text-2xl'>
                            <FaRegBuilding  />
                        </div>
                        <div>
                            <p>United Kingdom Office, Rwanda Office</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-[20px] '>
                        <div className='text-[#4FC0E8] text-3xl'>
                            <IoLocationOutline  />
                        </div>
                        <div>
                            <p >85 Great Portland Street, London, W1W 7LT, United Kingdom.</p>
                            <p>1 KN 78 St, Kigali Norrsken House Kigali.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-[20px] '>
                        <div className='text-[#4FC0E8] text-3xl'>
                            <IoCallOutline   />
                        </div>
                        <div>
                            <a href='tel:+250787171273 '>
                            +250787171273 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-[#17153B] flex justify-center items-center gap-1 text-white p-2'>
                <div className='text-xl'>
                    <FaRegCopyright />
                </div>
                <div>
                    <h4>Fundnest Ltd 2024. All rights reserved.</h4>
                </div>
            </section>
            <ScrollToTop />
        </footer>
    </>
  );
}

export default Footer;