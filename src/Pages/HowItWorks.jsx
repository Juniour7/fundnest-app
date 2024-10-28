import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//components
import MailingList from '../Components/HomComponents/MailingList';

//images
import hero from '../assets/HIW/hero.png';
import hero2 from '../assets/HIW/hero2.jpg';
import frame from '../assets/HIW/frame.png';
import { FaFeather } from 'react-icons/fa';

const HowItWorks = () => {
    const navigate = useNavigate();

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

    const handleCausesClick = () => {
        navigate('/campaign');
    };

    const ForFundraiser = [
        {
            number: '01',
            title: "Start your fundraiser",
            content: "Create a compelling story for your cause, set a clear funding goal, and  add photos or videos to help donors connect with your mission."
        },
        {
            number: '02',
            title: "Share with your network",
            content: "Spread the word through social media, email, and messaging apps. Every share increases your chance of reaching potential donors."
        },
        {
            number: '03',
            title: "Grow your support",
            content: "Watch your community grow as donors contribute and share your cause. Keep supporters updated with regular progress posts."
        },
        {
            number: '04',
            title: "Amplify your reach",
            content: "Get featured in FundNest's newsletter and social channels. We help promote inspiring causes to our wider community."
        },
        {
            number: '05',
            title: "Track your progress",
            content: "Monitor donations, engage with supporters, and update your goal as needed. Our dashboard makes management simple."
        },
        {
            number: '06',
            title: "Achieve your goal",
            content: "Receive funds securely and easily. Share your success story to inspire others and keep building your supporting community."
        }
    ];

    const ForDonor = [
        {
            number: '01',
            title: "Discover causes",
            content: "Browse through various categories or search for specific causes that resonate with your values and interests."
        },
        {
            number: '02',
            title: "Show your support",
            content: "Choose your donation amount and leave words of encouragement. Every contribution, big or small, makes a difference."
        },
        {
            number: '03',
            title: "Stay connected",
            content: "Receive updates about the causes you support and see the direct impact of your generosity."
        },
        {
            number: '04',
            title: "Join the conversation",
            content: "Engage with the community, share stories, and inspire others to contribute to meaningful causes."
        },
        {
            number: '05',
            title: "Secure giving",
            content: "Donate confidently with our secure payment system. Track all your contributions in one place."
        },
        {
            number: '06',
            title: "Build community",
            content: "Connect with like-minded donors and create lasting impact together. Share successful campaigns with your network."
        }
    ];

  return (
    <>
        <Helmet>
            <title>How It Works | Fund Nest</title>
        </Helmet>
        <body className='font-sen'>
            {/* Hero Section */}
            <section className=' bg-no-repeat w-full h-[17.5rem] lg:h-[90vh] relative'>
                <img src={hero} alt='Hero' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                    <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                        <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Making Impact Simple & Effective</h1>
                        <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Whether you're launching a campaign or supporting a cause, we've made the process seamless and secure.</p>
                        <div className='flex justify-center gap-3 mt-[1.25rem]'>
                            <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] text-white rounded-lg py-2 px-3 md:px-6 sm:text-sm lg:text-lg shadow-md hover:bg-black transition-colors ease-in-out duration-300'>
                                 Start Campaign
                            </button>
                            <button onClick={handleCausesClick} className='bg-white text-[#00AEEF] rounded-lg py-2 px-3 md:px-6 text-sm md:text-lg shadow-md'>
                                Browse Verified Causes
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcoming  */}
            <section className='border-t-[1.25rem] border-[#00AEEF] font-sen'>
                <div className='w-[90%] mx-auto py-4'>
                    <h1 className='text-center text-[#00AEEF] font-bold text-3xl md:text-5xl'>EMPOWERING DREAMS, TOGETHER</h1>
                    <p className='mt-2'>FundNest brings together passionate fundraisers and compassionate donors to make meaningful change happen. Whether you're starting a cause or  supporting one, our platform makes it easy to create lasting impact in  your community and beyond.</p>
                </div>
                <div className='mt-4 w-full h-[15.625rem] lg:h-[90vh]'>
                    <img src={hero2} alt="" className='w-full h-full object-cover'/>
                </div>
                
            </section>

            {/* How It Works */}
            <section>
                <div className='py-4'>
                    <h1 className='text-center text-[#00AEEF] font-bold text-3xl md:text-5xl'>HOW IT WORKS</h1>
                </div>

                {/* For Fundraisers */}
                <div className='bg-[#00AEEF] py-5'>
                    <div className='w-[80%] mx-auto'>
                        <h1 className='text-white font-bold text-xl md:text-3xl text-right'> FOR FUNDRAISERS</h1>
                        <div className='mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3  mx-auto'>
                            {ForFundraiser.map((Data , index) => (
                                <div key={index} className='bg-white rounded-lg p-4 shadow-md'>
                                    <div className='bg-[#00AEEF] text-white w-[50px] h-[50px] rounded-full'>
                                        <h4 className='text-3xl p-2 font-bold'>{Data.number}</h4>
                                    </div>
                                    <div className='mt-3 space-y-4'>
                                        <h1 className='text-xl font-semibold'>{Data.title}</h1>
                                        <p className='text-sm'>{Data.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* For Donors */}
                <div className='bg-[#F2F2F2] py-5'>
                    <div className='w-[80%] mx-auto'>
                        <h1 className='text-[#00AEEF] font-bold text-xl md:text-3xl '> FOR DONORS</h1>
                        <div className='mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3  mx-auto'>
                            {ForDonor.map((Data , index) => (
                                <div key={index} className='bg-white rounded-lg p-4 shadow-md'>
                                    <div className='bg-[#00AEEF] text-white w-[50px] h-[50px] rounded-full'>
                                        <h4 className='text-3xl p-2 font-bold'>{Data.number}</h4>
                                    </div>
                                    <div className='mt-3 space-y-4'>
                                        <h1 className='text-xl font-semibold'>{Data.title}</h1>
                                        <p className='text-sm'>{Data.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Start A campaign */}
            <section className='py-5'>
                <div className='w-[80%] mx-auto bg-[#00AEEF] rounded-lg md:flex'>
                    <div className='basis-[50%] pt-5'>
                        <img src={frame} alt="" />
                    </div>
                    <div className='basis-[50%] mt-6 pl-3 space-y-9'>
                        <h1 className='text-white text-2xl font-semibold'>Ready to make a difference?</h1>
                        <p>Whether you're starting a fundraiser or supporting a cause, join our community of changemakers today.</p>
                        <div className='flex gap-3'>
                            <button onClick={handleStartCampaignClick} className='text-[#00AEEF] bg-white rounded-lg py-2 px-3 text-lg md:flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                                <span className='my-auto text-xl'>
                                    <FaFeather />
                                </span>
                                Start Campaign
                            </button>
                            <button onClick={handleCausesClick} className='text-[#00AEEF] bg-white rounded-lg py-2 px-3 text-lg md:flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                                <span className='my-auto text-xl'>
                                    <FaFeather />
                                </span>
                                Explore Causes
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mailing List */}
            <MailingList />
        </body>
    </>
  )
}

export default HowItWorks;