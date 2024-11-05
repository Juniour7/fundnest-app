import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Compnent
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';

const Page3 = () => {
  return (
    <>
        <Helmet>
            <title>Blog - 10 Things Donors Look for | Fund Nest</title>
        </Helmet>
        <body className='font-sen py-4 '>
            <h1 className='text-center text-xl md:text-3xl font-semibold w-[90%] mx-auto my-6'>10 Things Donors Look for Before Making a Donation (And How to Deliver Them)</h1>
            <section 
                className='bg-cover  bg-no-repeat bg-center h-[15.625rem] md:h-[40vh] lg:h-[70vh]'
                style={{backgroundImage: 'url(https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F2bbcf013-182c-4fc8-8981-cdfbe35c71f9%2Fpexels-rdne-6647016.jpg?table=block&id=133567ca-6c04-8008-b68d-f7866241560b&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2)'}}    
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
                    <div className='basis-[70%] pt-4'></div>

                    {/* Featured Posts */}
                    <FeaturedPost />
                </div>
            </section>
        </body>
    </>
  )
}

export default Page3;