import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

//components
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa6';

const Page1 = () => {
    const navigate = useNavigate();
    const HandleSignUp = () => {
        navigate('/sign-up');
    };
  return (
    <>
        <body className='font-sen py-4 '>
            <h1 className='text-center text-xl md:text-3xl font-semibold w-[90%] mx-auto my-6'>Why Fund Nest is the Best Crowdfunding Platform for Nonprofits and Social Enterprises</h1>

            <section 
                className='bg-cover  bg-no-repeat bg-bottom h-[15.625rem] md:h-[40vh] lg:h-[70vh]'
                style={{backgroundImage: 'url(https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F783f9864-80e2-437d-8d0c-7b706e1c9964%2Fpexels-rdne-6646870.jpg?table=block&id=133567ca-6c04-802d-bd13-eb068f4e19e0&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2)'}}    
            >
            </section>
            <section className='w-[90%] mx-auto py-4'>
                <div className='  mx-auto flex items-center gap-2 my-3'>
                    <div>
                        <Link to='/'>
                            <span className='text-xl'>
                            <FaHome />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <span className='text-md text-gray-600'>
                            <IoChevronForwardSharp />
                        </span>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Blog</h3>
                    </div>
                </div>
                <div className='md:flex justify-center gap-3'>
                    {/* Left Side */}
                    <div className='basis-[70%] pt-4'>
                        <h1 className='text-3xl font-semibold mb-3'>The Fund Nest Difference</h1>
                        <p className='text-sm '>Looking for the perfect crowdfunding platform for your nonprofit or social enterprise? In today's digital fundraising landscape, choosing the right platform can mean the difference between meeting your goals and falling short. Fund Nest has emerged as the leading choice for impact-driven organizations, and here's why.</p>
                        <div className='mt-3'>
                            <h3 className='text-2xl'>Purpose-Built for Impact</h3>
                            <p className='text-sm '>While general crowdfunding platforms try to be everything to everyone, Fund Nest is specifically designed for nonprofits, churches, and social enterprises. Our laser focus means every feature is optimized for organizational success and donor engagement.</p>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <h3 className='text-2xl'>Industry-Leading Features</h3>
                            <ol className='ml-3 list-disc text-sm space-y-2'>
                                <li><p><span className='font-semibold'>Smart Donor Management:</span> Track, engage, and retain donors efficiently</p></li>
                                <li><p><span className='font-semibold'>Custom Branding:</span> Your campaigns reflect your unique identity</p></li>
                                <li><p><span className='font-semibold'>Automated Tax Receipts:</span> Save time and keep donors happy</p></li>
                                <li><p><span className='font-semibold'>Impact Reporting:</span> Show donors exactly how their money helps</p></li>
                                <li><p><span className='font-semibold'>Team Fundraising Tools:</span> Empower your supporters to raise funds</p></li>
                                <li><p><span className='font-semibold'>Multi-Campaign Management:</span> Run different campaigns simultaneously</p></li>
                            </ol>
                        </div>  
                        <div className='mt-3 space-y-2'>
                            <h3 className='text-2xl'>Unbeatable Value</h3>
                            <ol className='ml-3 list-disc text-sm space-y-2'>
                                <li>Lower fees than major platforms like GoFundMe and Donorbox</li>
                                <li>No hidden charges or surprise costs</li>
                                <li>Special rates for registered nonprofits</li>
                                <li>Free training and support</li>
                            </ol>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <h3 className='text-2xl'>Real Impact Stories</h3>
                            <div className='bg-[#F2F2F2] p-3 rounded-md shadow-md w-[90%] text-sm hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'>
                                <p>"Fund Nest helped us increase our monthly donations by 65% in just three months. The donor retention tools are game-changing for small nonprofits like us." - Maria Rodriguez, Hope Community Center</p>
                            </div>
                            <div className='bg-[#F2F2F2] p-3 rounded-md shadow-md w-[90%] text-sm hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'>
                                <p>"After switching to Fund Nest from our previous platform, we saw a 40% increase in average donation size. The platform makes it easy for donors to give and for us to show impact." - Rev. James Thompson, Grace Community Church</p>
                            </div>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <h1 className='text-3xl'>Why Organizations Choose Fund Nest</h1>
                            <div>
                                <h3 className='text-2xl'>1. Built for Growth</h3>
                                <ol className='list-disc ml-5 text-sm space-y-2'>
                                    <li>Scalable infrastructure</li>
                                    <li>Professional credibility features</li>
                                    <li>Integrated marketing tools</li>
                                    <li>Mobile-optimized campaigns</li>
                                </ol>
                            </div>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <div>
                                <h3 className='text-2xl'>2. Donor-Friendly Experience</h3>
                                <ol className='list-disc ml-5 text-sm space-y-2'>
                                    <li>Simple, secure donation process</li>
                                    <li>Multiple payment options</li>
                                    <li>Easy recurring donations</li>
                                    <li>Instant tax receipts</li>
                                </ol>
                            </div>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <div>
                                <h3 className='text-2xl'>3. Maximum Impact</h3>
                                <ol className='list-disc ml-5 text-sm space-y-2'>
                                    <li>Lower fees = more money for your mission</li>
                                    <li>Better donor engagement tools</li>
                                    <li>Comprehensive analytics</li>
                                    <li>Real-time reporting</li>
                                </ol>
                            </div>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <h1 className='text-3xl'>Getting Started is Easy</h1>
                            <div>
                                <ol className='list-disc ml-5 text-sm space-y-2'>
                                    <li>Create your free account</li>
                                    <li>Set up your first campaign in minutes</li>
                                    <li>Start accepting donations immediately</li>
                                    <li>Access free training and support</li>
                                </ol>
                            </div>
                        </div>
                        <div className='mt-3 space-y-2'>
                            <h1 className='text-3xl'>The Numbers Speak for Themselves</h1>
                            <div>
                                <ol className='list-disc ml-5 text-sm space-y-2'>
                                   <li>92% of organizations raise more on Fund Nest compared to previous platforms</li>
                                   <li>Average 45% increase in donor retention</li>
                                   <li>88% of donors say they're more likely to give again</li>
                                   <li>4.9/5 average customer satisfaction rating</li>
                                </ol>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h1 className='text-3xl'>Ready to Transform Your Fundraising?</h1>
                            <p className='text-sm'>Join thousands of successful organizations already using Fund Nest to make a bigger impact. Our platform combines powerful features, lower fees, and exceptional support to help you raise more funds and achieve your mission.</p>
                        </div>
                        <div className='mt-4'>
                            <button onClick={HandleSignUp} className='text-white bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                                Get Started 
                                <span>
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <FeaturedPost />
                </div>
            </section>
        </body>
    </>
  );
}

export default Page1;