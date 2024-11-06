import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Compnent
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';

const Page3 = () => {
    const navigate = useNavigate();
    const HandleSignUp = () => {
        navigate('/sign-up');
    };
  return (
    <>
        <Helmet>
            <title>Blog - 10 Things Donors Look for | Fund Nest</title>
        </Helmet>
        <body className='font-sen py-4 '>
            <h1 className='text-center text-xl md:text-3xl font-bold w-[90%] mx-auto my-6 text-[#4FC0E8]'>The Ultimate Guide to Church Fundraising in the Digital Age</h1>
            <section 
                className='bg-cover  bg-no-repeat bg-top h-[15.625rem] md:h-[40vh] lg:h-[89vh]'
                style={{backgroundImage: 'url(https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Fe3ffe64b-565e-4027-8729-f5846f5e37bc%2Fpexels-pavel-danilyuk-8815217.jpg?table=block&id=133567ca-6c04-80ae-be06-d27090831d0b&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2)'}}    
            >
            </section>

            {/* Main Content */}
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
                    {/* Blog */}
                    <div className='basis-[70%] pt-4'>
                        <p>In today's increasingly digital world, churches need to embrace modern fundraising methods while maintaining their spiritual mission. This comprehensive guide will show you how to effectively raise funds online while strengthening your church community.</p>
                        <div className='mt-4'>
                            <h1 className='text-2xl font-semibold'>Why Digital Fundraising Matters for Churches</h1>
                            <div className='mt-3'>
                                <h3 className='text-xl font-semibold'>The Changing Landscape</h3>
                                <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                    <li>67% of church members prefer giving digitally</li>
                                    <li>Online giving increased by 21% in the past year</li>
                                    <li>Young members expect digital giving options</li>
                                    <li>Remote attendance requires virtual donation options</li>
                                </ol>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-semibold my-3'>Essential Digital Fundraising Strategies for Churches</h1>
                                <div className=''>
                                    <h3 className='text-xl font-semibold'>1. Implement Multiple Giving Options</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Online donations through platforms like Fund Nest</li>
                                        <li>Text-to-give capabilities</li>
                                        <li>Mobile app giving</li>
                                        <li>Traditional methods for those who prefer them</li>
                                    </ol>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='text-xl font-semibold'>2. Create Compelling Campaign</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Building fund drives</li>
                                        <li>Mission trip fundraising</li>
                                        <li>Community outreach programs</li>
                                        <li>Special project campaigns</li>
                                        <li>Emergency response funds</li>
                                    </ol>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='text-xl font-semibold'>3. Engage Your Congregation</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Share regular updates</li>
                                        <li>Tell impact stories</li>
                                        <li>Recognize contributors</li>
                                        <li>Create giving communities</li>
                                        <li>Offer volunteer opportunities</li>
                                    </ol>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-2xl font-semibold my-3'>Best Practices for Church Fundraising</h1>
                                <div className='mt-3'>
                                    <h3 className='text-xl font-semibold'>Be Transparent</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Clear financial reporting</li>
                                        <li>Regular updates</li>
                                        <li>Specific project costs</li>
                                        <li>Impact measurements</li>
                                        <li>Future planning</li>
                                    </ol>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='text-xl font-semibold'>Make Giving Easy</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Simple donation process</li>
                                        <li>Multiple payment options</li>
                                        <li>Recurring giving setup</li>
                                        <li>Mobile-friendly forms</li>
                                        <li>Mobile-friendly forms</li>
                                    </ol>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='text-xl font-semibold'>Build Community</h3>
                                    <ol className='list-disc ml-4 space-y-1 font-light text-sm'>
                                        <li>Member recognition</li>
                                        <li>Volunteer opportunities</li>
                                        <li>Family involvement</li>
                                        <li>Youth participation</li>
                                        <li>Community events</li>
                                    </ol>
                                </div>

                                {/* Success Stories */}
                                <div className='mt-3 space-y-2'>
                                    <h3 className='text-2xl font-semibold'>Success Stories</h3>
                                    <div className='bg-[#F2F2F2] p-3 rounded-md shadow-md w-[90%] text-sm hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out'>
                                        <p>"Fund Nest helped us exceed our building fund goal by 25%. The platform made it easy for members to give regularly and stay engaged with our progress." - Pastor Michael Roberts</p>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <h1 className='text-2xl font-semibold my-3'>Ready to Modernize Your Church Fundraising?</h1>
                                    <p className='my-2 text-sm'>Fund Nest offers everything your church needs to succeed with digital fundraising.</p>
                                    <button onClick={HandleSignUp} className='text-white bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                                        Get Started 
                                        <span>
                                            <FaArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Posts */}
                    <FeaturedPost />
                </div>
            </section>
        </body>
    </>
  )
}

export default Page3;