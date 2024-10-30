import React from 'react';
import { Helmet } from 'react-helmet-async';

//components
import MailingList from '../Components/HomComponents/MailingList';


//images
import hero from '../assets/AboutPage/Frame.png';
import hero1 from '../assets/AboutPage/Frame2.png';

import icon1 from '../assets/AboutPage/icon1.png';
import icon2 from '../assets/AboutPage/icon2.png';
import icon3 from '../assets/AboutPage/icon3.png';
import icon4 from '../assets/AboutPage/icon4.png';

import image1 from '../assets/AboutPage/image2.png';

import flex1 from '../assets/AboutPage/imag1.png';
import flex2 from '../assets/AboutPage/image2.png';
import flex3 from '../assets/AboutPage/image3.png';
import flex4 from '../assets/AboutPage/image4.png';


const AboutUs = () => {
    const WhyUseUs = [
        {
            pic: icon1,
            title: 'Trusted Platform',
            content: "Secure and transparent fundraising for every cause"
        },
        {
            pic: icon2,
            title: 'Global Reach',
            content: "Connecting donors with causes worldwide"
        },
        {
            pic: icon3,
            title: 'Community Impact',
            content: "Making real change happen together"
        },
        {
            pic: icon4,
            title: 'Support System',
            content: "24/7 guidance for fundraisers and donors"
        },
    ];

    const OurValues = [
        {
            number: '01',
            title: "Transparency",
            content: "We prioritize clarity and honesty in all our processes to build trust with our users."
        },
        {
            number: '02',
            title: "Impact-Driven",
            content: "Every campaign on Fund Nest is about making a positive difference, no matter the size."
        },
        {
            number: '03',
            title: "Diversity & Inclusion",
            content: "Our platform supports diverse causes from around the world, and we believe in uplifting voices from all backgrounds."
        },
    ]

  return (
    <>
        <Helmet>
            <title>About Us | Fund Nest</title>
        </Helmet>
        <body className='font-sen bg-[#FFFCF7]'>
            {/* Hero Section */}
            <section className='bg-[#F5EFE0] pt-5 h-[21.875rem] lg:h-[90vh] relative'>
                <h1 className='text-center text-2xl md:text-4xl font-semibold'>World's Fundraising Platform</h1>
                <p className='mt-2 text-sm text-[#5F5F75] text-center'>Empowering communities to create lasting change through collective giving and impactful campaigns.</p>
                <div className='absolute bottom-0 flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2'>
                    <img src={hero} alt="" className='w-[100%] h-[200px] md:h-full md:w-[90%]' />
                </div>
            </section>  

            {/* Why Fund Nest?     */}
            <section className='py-16'>
                <div className='w-[90%] mx-auto gap-3 md:flex items-center justify-center'>
                    <div className='basis-[40%] space-y-4 mb-4 md:mb-0'>
                        <p className='text-sm text-[#5F5F75]'>Why use Fund Nest platform?</p>
                        <h1 className='font-bold text-xl md:text-3xl md:w-[60%]'>Fund Nest is more than a platform—it's a movement. We’re here to amplify the voices of individuals, non-profits, and social enterprises, helping them turn their visions into impactful realities.</h1>
                    </div>

                    <div className='basis-[45%] grid md:grid-cols-2 gap-3'>
                        {WhyUseUs.map((Data , index) => (
                            <div key={index} className='bg-[#00AEEF] text-white rounded-lg p-3'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='bg-white rounded-full p-3 my-4'>
                                        <img src={Data.pic} alt="" className='w-[30px]'/>
                                    </div>
                                    <h1 className='text-xl font-semibold text-center'>{Data.title}</h1>
                                    <p className='text-center text-sm my-4'>{Data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* We Believe  */}
            <section className='w-[80%] mx-auto py-4 mt-9'>
                <h1 className='text-4xl font-bold'>We believe in your choice</h1>
                <div className='my-6 md:flex justify-between text-[#5F5F75] space-y-3 md:space-y-0'>
                    <div className='basis-[50%]'>
                        <p className='text-sm '>We believe in the power of communities coming together to support causes that matter. Fund Nest is here to provide a simple, trustworthy crowdfunding platform that makes it easy for people to fundraise and contribute to impactful projects worldwide.</p>
                    </div>
                    <div className='basis-[40%]'>
                        <p className='text-sm'>Fund Nest is a global platform dedicated to supporting non-profits, social enterprises, and individuals in making a meaningful impact.</p>
                    </div>
                </div>
                <div className='h-[9.375rem] md:h-[21.875rem]'>
                    <img src={image1} alt="" className='rounded-md w-full h-full  object-cover'/>
                </div>
            </section>

            {/* Our Values */}
            <section className='relative mt-[5rem] md:mt-[16.5rem]'>
                <svg
                    className="absolute -top-[5rem] md:-top-[18.5rem] w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#00AEEF"
                        fillOpacity="1"
                        d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <div className='bg-[#00AEEF] pb-5 text-white font-sen'>
                    <div className='w-[85%] mx-auto'>
                        <h1 className='text-5xl font-semibold'>Our values</h1>
                        <div className='mt-6 grid md:grid-cols-3 gap-3 justify-center'>
                            {OurValues.map((Data , index) => (
                                <div key={index}>
                                    <h1 className='text-6xl mb-5'>{Data.number}</h1>
                                    <div className='space-y-3'>
                                        <h3 className='text-2xl font-semibold'>{Data.title}</h3>
                                        <p className='text-sm'>{Data.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className='py-12'>
                <div className='w-[85%] mx-auto md:flex justify-center gap-4 pb-4'>
                    <div className='basis-[50%]'>
                        <h1 className='text-4xl font-semibold'>Our story</h1>
                        <div className='mt-3 space-y-4 text-sm text-[#5F5F75]'>
                            <p>Fund Nest was founded with a simple but powerful vision: to make it easier for individuals and organizations to fundraise for meaningful causes. What began as a small project to support local communities quickly gained momentum, fueled by the passionate belief that everyone should have the opportunity to make a difference, regardless of their background or resources.</p>
                            <p>As we engaged with users, we recognized the need for a reliable, user-friendly platform that could bridge the gap between changemakers and supporters. With this insight, we set out to build a platform that prioritized accessibility, transparency, and community.</p>
                            <p>From our early days, we focused on creating a seamless experience that would empower people to share their stories, rally support, and achieve impact on a global scale. Today, Fund Nest is home to campaigns that range from personal projects to large-scale social initiatives, each one a testament to the collective power of individuals coming together to create change.</p>
                            <p>What started as a modest project has expanded into a thriving global platform. Fund Nest is now a trusted space for thousands of fundraisers and supporters across the world, all driven by a shared mission to make the world a better place. We’re proud to support the changemakers who inspire us daily, and we’re committed to growing alongside them, constantly innovating to meet the needs of our diverse community.</p>
                            <p>As we look toward the future, we remain dedicated to our founding principles: simplicity, impact, and community. We believe that through Fund Nest, anyone with a dream for positive change can find the support they need to bring it to life.</p>
                        </div>
                    </div>
                    <div className='basis-[50%] flex flex-wrap gap-2 pl-2 relative mt-3 md:mt-0'>
                        <div className='w-[8.345rem] h-[12.5rem] md:w-[15.375rem] md:h-[18.875rem]'>
                            <img src={flex1} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>
                        <div className='w-[8.345rem] h-[8.5rem] md:w-[15.375rem] md:h-[12.875rem] relative top-[5rem] md:top-[9rem]'>
                            <img src={flex2} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>
                        <div className='w-[8.345rem] h-[8.5rem] md:w-[15.375rem] md:h-[12.875rem]'>
                            <img src={flex3} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>
                        <div className='w-[8.345rem] h-[12.5rem] md:w-[15.375rem] md:h-[18.875rem] relative top-[1rem] md:top-[3rem]'>
                            <img src={flex4} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className='bg-[#F5EFE0] pt-5 h-[350px] lg:h-[90vh] relative'>
                <h1 className='text-center text-2xl md:text-4xl font-semibold'>Our vision</h1>
                <p className='mt-2 text-sm text-[#5F5F75] text-center'>Our vision is to be the best crowdfunding platform in the world.</p>
                <div className='absolute bottom-0 flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2'>
                    <img src={hero1} alt="" className='w-[100%] h-[200px] md:h-full md:w-[90%]' />
                </div>
            </section>

            {/* Mailing List */}
            <MailingList />
        </body>
    </>
  )
}

export default AboutUs;