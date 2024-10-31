import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { LuCopyright } from "react-icons/lu";
import { FaFacebookF, FaLinkedin, FaInstagram  } from 'react-icons/fa';

//images
import Logo from '../../assets/Logo/FUND NEST LOGO-04.png';

import partner1 from '../../assets/Logo/gdrp.png';
import partner2 from '../../assets/Logo/wise.png';
import partner3 from '../../assets/Logo/stripe.png';
import partner4 from '../../assets/Logo/image 8.png';
import partner5 from '../../assets/Logo/dpo.png';


const PartnerLogo = [
    {
        image: partner1,
    },
    {
        image: partner2,
    },
    {
        image: partner3,
    },
    {
        image: partner4,
    },
    {
        image: partner5,
    },
]

const Footers = () => {
  return (
    <>
        <footer className='bg-black text-white font-sen pt-11'>
            <section className='w-[90%] mx-auto grid md:grid-cols-3 gap-3 justify-center pb-3'>
                {/* 1st Section */}
                <div className=''>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={Logo} alt="logo" className='w-[100px] h-[90px]' />
                        </div>
                        <div>
                            <h1 className='text-[#00AEEF] font-bold text-2xl'>Fund Nest</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className='text-sm'>Fund Nest is a trusted crowdfunding platform designed to empower non-profits by simplifying their fundraising efforts. With a secure and transparent process, we help organizations connect with donors, maximize their impact, and achieve their mission. Join us to make a difference.</p>
                    </div>
                    <div className='flex flex-wrap gap-3 mt-5'>
                        {PartnerLogo.map((Data,index) => (
                            <div key={index}>
                                <img src={Data.image} alt="" className='max-w-[150px]' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2nd Section */}
                <div className='flex flex-col md:items-center'>
                    <div>
                        <h1 className='text-[#00AEEF] font-bold text-2xl'>Company</h1>
                        <ul className='mt-6 text-left space-y-3'>
                            <li>
                                <Link to='/about-us'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact-us'>Contact Us</Link>
                            </li>
                            <li>
                                <Link to='/career'>Careers</Link>
                            </li>
                            <li>
                                <Link to=''>Impact</Link>
                            </li>
                            <li>
                                <Link to=''>Testimonials</Link>
                            </li>
                            <li>
                                <Link to='/contact-us'>Support Desk</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3rd Section */}
                <div className='flex flex-col md:items-center'>
                    <div>
                        <h1 className='text-[#00AEEF] font-bold text-2xl'>Resource</h1>
                        <ul className='mt-6 text-left space-y-3 underline underline-offset-4'>
                            <li>
                                <Link to=''>Guide</Link>
                            </li>
                            <li>
                                <Link to='/refund-policy'>Refund Policy</Link>
                            </li>
                            <li>
                                <Link to='/terms-conditions'>Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link to='/anti-money-laundering'>Anti-Money Laundry Policy</Link>
                            </li>
                            <li>
                                <Link to='/privacy-policy'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='/know-your-customer'>Know Your Customers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='w-[90%] mx-auto flex justify-between py-2 mt-6'>
                <div className='flex gap-2'>
                    <span className='text-white text-xl'>
                        <LuCopyright />
                    </span> 
                    <p className='text-sm'>2024 Fund Nest. Powered by IRAADY LTD</p>
                </div>
                <div className='flex justify-center gap-2 my-auto'>
                        <div>
                            <a href='https://www.linkedin.com/showcase/fund-nest/?viewAsMember=true' target='_blank'>
                                <span className='text-lg'>
                                    <FaLinkedin />
                                </span>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/people/Fund-Nest/61564352366324/' target='_blank'>
                                <span className='text-lg'>
                                    <FaFacebookF  />
                                </span>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/fundnestofficial/' target='_blank'>
                                <span className='text-lg'>
                                    <FaInstagram   />
                                </span>
                            </a>
                        </div>
                    </div>
            </section>
        </footer>
    </>
  )
}

export default Footers;