import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate  } from 'react-router-dom';

//componets
import StartCampaign from '../Components/HomComponents/StartCampaign';
import HomeCampaigns from '../Components/HomComponents/HomeCampaigns';
import AskedQuery from '../Components/HomComponents/AskedQuery';
import Testimonials from '../Components/HomComponents/Testimonials';
import PartnerCarousel from '../Components/HomComponents/PartnerCarousel.jsx/partanerCaraousel';


//images
import hero from '../assets/slideshow/hero.jpg'
import Image1 from '../assets/Logo/microsoft.png';
import Image2 from '../assets/Logo/Nvidia.jpeg';
import Image3 from '../assets/Logo/ibm.png';
import Image4 from '../assets/Logo/tnoyelumelu.png';
import Image5 from '../assets/Logo/undp.png';
import Image6 from '../assets/Logo/hanga.png';

import rectangle1 from '../assets/slideshow/Rectangle1.png';
import rectangle2 from '../assets/slideshow/rectangle2.png';
import rectangle3 from '../assets/slideshow/rectangle3.png';
import rectangle4 from '../assets/slideshow/rectangle4.png';

import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.png';

import logo1 from '../assets/Logo/1.png';
import logo2 from '../assets/Logo/2.png';
import logo3 from '../assets/Logo/3.png';
import logo4 from '../assets/Logo/4.png';


//icons
import { MdArrowForward } from "react-icons/md";

const PartnerLogo = [
    {
        image: logo1
    },
    {
        image: logo2
    },
    {
        image: logo3
    },
    {
        image: logo4
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

    const FounderImages = [
        {
            url: Image1
        },
        {
            url: Image2
        },
        {
            url: Image3
        },
        {
            url: Image4
        },
        {
            url: Image5
        },
        {
            url: Image6
        },
    ];

    const TrustData = [
        {
            icon: icon1,
            title: 'Secure Transactions',
            content: "We use Stripe's latest technology to prevent fraud and ensure your donations are secure"
        },
        {
            icon: icon2,
            title: 'Transparent Processes',
            content: "Track every donation to see exactly how your contributions make an impact."
        },
        {
            icon: icon3,
            title: 'Verified Campaigns',
            content: "Each campaign is thoroughly vetted by our team for authenticity"
        },
        {
            icon: icon4,
            title: 'Trusted Partners',
            content: "In partnership with industry leaders like Microsoft, IBM, NVIDIA, UNDP, and the Tony Elumelu Foundation."
        },
        {
            icon: icon5,
            title: 'Dedicated Support',
            content: "Our support team is available 24/7 to assist you."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Home | Fund Nest</title>
                <meta name="description" content="FundNest Homepage" />
            </Helmet>
            <body className='font-sen'>
                {/* Hero Section */}
                <section className=' bg-no-repeat w-full h-[17.5rem] md:h-[40vh] lg:h-[90vh] relative'>
                    <img src={hero} alt='Hero' className='w-full h-full object-cover ' />
                    <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                        <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                            <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Your Trusted Partner in Making a Difference</h1>
                            <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Join a global community of donors and non-profits transforming lives through secure and transparent crowdfunding</p>
                            <div className='flex justify-center gap-3 mt-[1.25rem]'>
                                <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 md:px-6 text-sm lg:text-lg shadow-md hover:bg-black transition-colors ease-in-out duration-300'>
                                    Start Campaign
                                </button>
                                <button onClick={handleStartCampaignClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 md:px-6 text-sm md:text-lg shadow-md hover:bg-[#00AEEF]'>
                                    Browse Verified Causes
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Partners */}
                <section className='border-t-[1rem] border-b-[1rem] border-[#00AEEF] py-3 z-10'>
                    <div className='px-2 lg:w-[90%] mx-auto'>
                        <h4 className='text-md md:text-lg font-semibold md:w-[60%]'>Trusted by Non-Profits, churches and Social Enterprises in 4 Countries | Verified by Industry Leaders for Secure and Impactful Fundraising: </h4>
                        <h4 className='text-sm mt-3 text-[#00AEEF]'>Powered by</h4>                    
                    </div>
                    <PartnerCarousel />
                </section>

                {/* Get Started */}
                <section className='w-[90%] mx-auto py-11 md:flex justify-center '>
                    <div className='basis-[50%] flex flex-wrap gap-2 md:gap-3 relative mb-4 lg:mb-[7rem]'>
                        <div data-aos="zoom-in"  data-aos-duration="3000" className='w-[9.375rem] h-[12.5rem] lg:w-[13.375rem] lg:h-[15.875rem] overflow-hidden rounded-lg'>
                            <img src={rectangle1} alt="image" className='w-full h-full object-cover rounded-lg hover:scale-150 transition-all duration-[3s] cursor-pointer ease-in-out' />
                        </div>
                        <div className='w-[9.345rem] h-[12.5rem] lg:w-[13.375rem] lg:h-[15.875rem] relative top-[3rem] overflow-hidden rounded-lg'>
                            <img src={rectangle2} alt="image" className='w-full h-full object-cover rounded-lg hover:scale-150 transition-all duration-[3s] cursor-pointer ease-in-out' />
                        </div>
                        <div className='w-[9.345rem] h-[12.5rem] lg:w-[13.375rem] lg:h-[15.875rem] overflow-hidden rounded-lg'>
                            <img src={rectangle3} alt="image" className='w-full h-full object-cover rounded-lg hover:scale-150 transition-all duration-[3s] cursor-pointer ease-in-out' />
                        </div>
                        <div className='w-[9.345rem] h-[12.5rem] lg:w-[13.375rem] lg:h-[15.875rem] relative top-[3rem] overflow-hidden rounded-lg'>
                            <img src={rectangle4} alt="image" className='w-full h-full object-cover rounded-lg hover:scale-150 transition-all duration-[3s] cursor-pointer ease-in-out' />
                        </div>
                    </div>

                    {/* Left Side */}
                    <div className='basis-[50%] lg:basis-[65%] pt-[3rem] lg:space-y-[4rem]'>
                        <h1 className='text-2xl lg:text-4xl font-bold w-[90%] mb-[1rem] md:mb-[2rem] lg:mb-[4rem]'>We are the Powerful, <span className='text-[#00AEEF]'>Free Fundraising</span> Platform</h1>
                        <p className='lg:mt-4 mb-4 md:mb-[4rem] text-sm lg:text-base'>Unlock the power of seamless fundraising with our proven, multi-purpose crowdfunding platform. Designed for non-profits and individuals, Fund Nest helps you raise more, engage donors effectively, and achieve greater impact with ease. Boost your mission today!</p>
                        <div className=''>
                            <ul className='font-sen space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <span className='bg-[#00AEEF] text-white flex flex-col justify-center items-center rounded-full  w-[2.5rem] h-[2.5rem] text-3xl'>
                                        <MdArrowForward />
                                    </span>
                                    <h4 className='text-xl md:text-2xl font-semibold md:font-bold'>Start your campaigns</h4>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='bg-[#00AEEF] text-white flex flex-col justify-center items-center rounded-full  w-[2.5rem] h-[2.5rem] text-3xl'>
                                        <MdArrowForward />
                                    </span>
                                    <h4 className='text-xl md:text-2xl font-semibold md:font-bold'>Share with family and friends</h4>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='bg-[#00AEEF] text-white flex flex-col justify-center items-center rounded-full  w-[2.5rem] h-[2.5rem] text-3xl'>
                                        <MdArrowForward />
                                    </span>
                                    <h4 className='text-xl md:text-2xl font-semibold md:font-bold'>Manage Donations</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Start Today */}
                <StartCampaign />

                {/* HomeCampaigns */}
                <HomeCampaigns />

                {/* Trust Now */}
                <section className='bg-[#00AEEF] py-5 px-3 text-white'>
                    <h1 className='text-center text-2xl md:text-3xl font-bold'>WHY TRUST FUNDNEST</h1>
                    <div className='w-[90%] md:w-[85%] lg:w-[90%] mx-auto  mt-5 grid md:grid-cols-2 lg:grid-cols-5 gap-2'>
                        {TrustData.map((Data,index) => (
                            <div key={index} className='bg-white px-2 py-3  shadow-md  group hover:-translate-y-3 hover:cursor-pointer transition-all ease-in-out duration-300'>
                                <div className='flex flex-col justify-center items-center '>
                                    <img src={Data.icon} alt="logo" className='max-w-[3.125rem] h-[3.125rem] object-cover' />
                                </div>
                                <h1 className='text-black mt-3 text-center font-semibold text-lg'>{Data.title}</h1>
                                <p className='text-black text-sm mt-2 mb-3'>{Data.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Faqs */}
                <AskedQuery />

                {/* Testimonials */}
                <Testimonials />
            </body>
        </>
    );
}

export default HomePage;