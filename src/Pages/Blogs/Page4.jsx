import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Compnent
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';

const Page4 = () => {
  return (
    <>
        <Helmet>
            <title>Blog - 10 Things Donors Look for | Fund Nest</title>
        </Helmet>
        <body className='font-sen py-4 '>
            <h1 className='text-center text-xl md:text-3xl font-bold w-[90%] mx-auto my-6 text-[#00AEEF]'>Fund Nest vs GoFundMe vs Donorbox: A Complete Comparison Guide for 2024</h1>
            <section 
                className='bg-cover  bg-no-repeat bg-top h-[15.625rem] md:h-[40vh] lg:h-[90vh]'
                style={{backgroundImage: 'url(https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Fde37f7c7-cc66-46c8-99da-41ffe237787b%2F14.jpg?table=block&id=133567ca-6c04-80cc-b451-de1ed6656166&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2)'}}    
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
                        <p>Choosing the right fundraising platform can significantly impact your organization's success. In this comprehensive comparison guide, we'll break down how Fund Nest stacks up against popular alternatives GoFundMe and Donorbox, helping you make an informed decision for your nonprofit, church, or social enterprise.</p>
                        Quick Comparison Table
                        <div></div>
                    </div>

                    {/* Featured Posts */}
                    <FeaturedPost />
                </div>
            </section>
        </body>
    </>
  )
}

export default Page4;