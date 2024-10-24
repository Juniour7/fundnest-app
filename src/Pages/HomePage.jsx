import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate  } from 'react-router-dom';

//components


const HomePage = () => {
    const navigate = useNavigate();

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

    return (
        <>
            <Helmet>
                <title>Homepage | Fund Nest</title>
                <meta name="description" content="FundNest Homepage" />
            </Helmet>
            <body>
                {/* Hero Section */}
                <section className=' bg-no-repeat w-full h-[17.5rem] lg:h-[90vh] relative'>
                    <img src='https://i.pinimg.com/564x/0d/1c/7e/0d1c7eb91857896df3dacf61a901c7ae.jpg' alt='Hero' className='w-full h-full object-cover' />
                    <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                        <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                            <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Your Trusted Partner in Making a Difference</h1>
                            <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Join a global community of donors and non-profits transforming lives through secure and transparent crowdfunding</p>
                            <div className='flex justify-center gap-3 mt-[1.25rem]'>
                                <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 md:px-6 sm:text-sm lg:text-lg shadow-md hover:bg-black transition-colors ease-in-out duration-300'>
                                    Start Campaign
                                </button>
                                <button onClick={handleStartCampaignClick} className='bg-black text-white rounded-lg py-2 px-3 md:px-6 text-sm md:text-lg shadow-md'>
                                    Explore Causes
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Partners */}
                <section className='border-t-[1rem] border-b-[1rem] border-[#00AEEF] py-3'>
                    <div className='px-2'>
                        <h4 className='text-md'>Trusted by Non-Profits, churches and Social Enterprises in 4 Countries | Verified by Industry Leaders for Secure and Impactful Fundraising: </h4>
                    </div>
                </section>
            </body>
        </>
    );
}

export default HomePage;