import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//icons
import { FaHome, FaRegCalendarAlt, FaComments , FaClock   } from "react-icons/fa";
import { IoChevronForwardSharp } from "react-icons/io5";


//images
import hero from '../assets/Blog/Frame1.png';

import image1 from '../assets/Blog/image.png';
import image2 from '../assets/Blog/image2.png';
import image3 from '../assets/Blog/image3.jpg';
import image4 from '../assets/Blog/image4.jpg';
import image5 from '../assets/Blog/image5.jpg';
import image6 from '../assets/Blog/image6.jpg';



import Rectangle1 from '../assets/Blog/Rectangle1.jpg';
import Rectangle2 from '../assets/Blog/Rectangle2.jpg';
import Rectangle3 from '../assets/Blog/Rectangle3.jpg';
import Rectangle4 from '../assets/Blog/Rectangle4.png';
import Rectangle5 from '../assets/Blog/Rectangle5.jpg';
import Rectangle6 from '../assets/Blog/Rectangle 6.jpg';
import Rectangle7 from '../assets/Blog/Rectangle 7.jpg';
import Rectangle8 from '../assets/Blog/Rectangle 8.jpg';
import Rectangle9 from '../assets/Blog/Rectangle 9.jpg';



const Blog = () => {
  const BlogCard = [
    {
      Path: 'blog1',
      Category: "Petitions",
      Date: "September 8, 2024",
      Photo: 'https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F783f9864-80e2-437d-8d0c-7b706e1c9964%2Fpexels-rdne-6646870.jpg?table=block&id=133567ca-6c04-802d-bd13-eb068f4e19e0&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2',
      Title: "Why Fund Nest is the Best Crowdfunding Platform for Nonprofits and Social Enterprises",
      Description: "Looking for the perfect crowdfunding platform for your nonprofit or social enterprise? In today's digital fundraising landscape, choosing the right platform can mean the difference between meeting your goals and falling short. Fund Nest has emerged as the leading choice for impact-driven organizations, and here's why.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Path: 'blog2',
      Category: "Petitions",
      Date: "September 16, 2024",
      Photo: 'https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F2bbcf013-182c-4fc8-8981-cdfbe35c71f9%2Fpexels-rdne-6647016.jpg?table=block&id=133567ca-6c04-8008-b68d-f7866241560b&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2',
      Title: "10 Things Donors Look for Before Making a Donation (And How to Deliver Them)",
      Description: "Understanding what motivates donors to give is crucial for any successful fundraising campaign. As a donor-centric platform, Fund Nest has analyzed thousands of successful campaigns to identify what really matters to donors. Here's what we've learned about what donors look for before opening their wallets.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Path: 'blog3',
      Category: "Petitions",
      Date: "September 20, 2024",
      Photo: 'https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Fe3ffe64b-565e-4027-8729-f5846f5e37bc%2Fpexels-pavel-danilyuk-8815217.jpg?table=block&id=133567ca-6c04-80ae-be06-d27090831d0b&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=2000&userId=&cache=v2',
      Title: "The Ultimate Guide to Church Fundraising in the Digital Age",
      Description: "In today's increasingly digital world, churches need to embrace modern fundraising methods while maintaining their spiritual mission. This comprehensive guide will show you how to effectively raise funds online while strengthening your church community.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    // {
    //   Path: 'blog4',
    //   Category: "Petitions",
    //   Date: "September 23, 2024",
    //   Photo: 'https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F8c007ae9-1276-43b3-9b90-aa109a746514%2Fpexels-rdne-6646816.jpg?table=block&id=133567ca-6c04-8093-95d0-f3305bc2974a&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2',
    //   Title: "Fund Nest vs GoFundMe vs Donorbox: A Complete Comparison Guide for 2024",
    //   Description: "Choosing the right fundraising platform can significantly impact your organization's success. In this comprehensive comparison guide, we'll break down how Fund Nest stacks up against popular alternatives GoFundMe and Donorbox, helping you make an informed decision for your nonprofit, church, or social enterprise.",
    //   Comments: "29 Comments",
    //   Time: "4 mins read"
    // },
    {
      Path: 'blog5',
      Category: "Petitions",
      Date: "September 25, 2024",
      Photo: 'https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Fae2f04cf-b8fb-4ba7-a4ea-cfb7c79bab2c%2Fpexels-rdne-7414273.jpg?table=block&id=133567ca-6c04-80b8-bc50-fa8b8ed2515b&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2',
      Title: "The Complete Guide to Social Enterprise Crowdfunding: Strategies That Actually Work",
      Description: "Are you a social entrepreneur looking to fund your impact-driven venture? Crowdfunding has emerged as a powerful tool for social enterprises, combining fundraising with community building and impact demonstration. This comprehensive guide will show you exactly how to succeed with social enterprise crowdfunding.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 2, 2024",
      Photo: image6,
      Title: "7 Proven Strategies to Increase Donor Retention (With Real Examples)",
      Description: "Did you know that increasing donor retention by just 10% can increase your fundraising revenue by 200%? Yet many organizations struggle to keep donors engaged after their first gift. In this guide, we'll share proven strategies to turn one-time donors into loyal supporters using Fund Nest's powerful platform.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 5, 2024",
      Photo: Rectangle6,
      Title: "How to Create a High-Converting Fundraising Campaign (Step-by-Step Guide)",
      Description: "Did you know that increasing donor retention by just 10% can increase your fundraising revenue by 200%? Yet many organizations struggle to keep donors engaged after their first gift. In this guide, we'll share proven strategies to turn one-time donors into loyal supporters using Fund Nest's powerful platform.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 5, 2024",
      Photo: Rectangle7,
      Title: "How to Create a High-Converting Fundraising Campaign (Step-by-Step Guide)",
      Description: "Want to create a fundraising campaign that actually reaches its goals? With the average online fundraising campaign only achieving 31% of its target, knowing how to structure your campaign for success is crucial. This comprehensive guide will show you exactly how to create, launch, and manage a high-converting fundraising campaign using Fund Nest's powerful platform.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 13, 2024",
      Photo: Rectangle8,
      Title: "Monthly Giving Programs: The Complete Setup Guide for Nonprofits",
      Description: "Want to create predictable, sustainable funding for your nonprofit? Monthly giving programs are proven to increase donor lifetime value by 440% compared to one-time gifts. This comprehensive guide will show you how to set up and grow a successful monthly giving program using Fund Nest's powerful platform.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 17, 2024",
      Photo: Rectangle9,
      Title: "Small Nonprofit Guide: How to Compete with Large Organizations Using Technology",
      Description: "Are you a small nonprofit wondering how to compete with larger organizations for donations and attention? Technology is the great equalizer. This guide shows how small nonprofits can use Fund Nest's platform to punch above their weight and achieve impressive results with limited resources.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 19, 2024",
      Photo: image6,
      Title: "Impact Measurement: A Complete Guide for Nonprofits and Social Enterprises",
      Description: "Want to show donors exactly how their support makes a difference? Effective impact measurement is crucial for attracting and retaining donors, with 87% of supporters saying they're more likely to give again when they understand their donation's impact. This comprehensive guide shows you how to measure and communicate your impact using Fund Nest's powerful tools.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 23, 2024",
      Photo: image6,
      Title: "The Ultimate Guide to Year-End Fundraising: Strategies That Work",
      Description: "Did you know that 30% of annual giving occurs in December, with 10% happening in the last three days of the year? Make the most of this crucial fundraising period with our comprehensive guide to year-end fundraising success using Fund Nest's powerful platform.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "October 28, 2024",
      Photo: image6,
      Title: "Digital Marketing for Nonprofits: A Complete Strategy Guide",
      Description: "Want to reach more donors and supporters online? Effective digital marketing is crucial for modern nonprofits, with 55% of donors discovering nonprofits through digital channels. This comprehensive guide shows you how to create and implement a successful digital marketing strategy using Fund Nest's integrated tools.",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
  ];

  const FeaturedPost = [
    {
      Photo: Rectangle1,
      Title: "Want your governor to take action on climate? This toolkit is for you.",
      Date: "December 8, 2017"
    },
    {
      Photo: Rectangle2,
      Title: "Meet Crystal, an Indigenous Pipeline Fighter in Texas",
      Date: "March 26, 2016"
    },
    {
      Photo: Rectangle3,
      Title: "A Victory for Women’s Pay Equity in New York",
      Date: "April 23, 2017"
    },
    {
      Photo: Rectangle4,
      Title: "Vancouver Ulara Nakagawa inspires petition to save elephant in Japan",
      Date: "June 25, 2017"
    },
    {
      Photo: Rectangle5,
      Title: "NDP statement following the Brussels attacks",
      Date: "May 25, 2017"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Fund Nest</title>
      </Helmet>
      <body className='font-sen'>
        {/* Hero Section */}
        <section className='pt-5 h-[21.875rem] md:h-[40vh] lg:h-[85vh] relative'>
          <h1 className='text-center text-2xl md:text-4xl font-semibold px-[1px] '>Join Us in Empowering Change Through Crowdfunding</h1>
          <p className='mt-2 text-sm text-[#5F5F75] text-center'>Be a part of a dynamic team that's revolutionizing fundraising for non-profits and social enterprises worldwide.</p>
          <div className='absolute bottom-0'>
            <img src={hero} alt="" className='w-[100%] h-[8.125rem] md:h-full md:w-[100%]' />
          </div>
        </section>

        {/* Main Section */}
        <section className='border-t-[1.5rem] border-[#00AEEF] py-11'>
          <div className='w-[85%] md:w-[95%] lg:w-[85%]  mx-auto flex items-center gap-2 my-3'>
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
          <div className='w-[85%] md:w-[95%] lg:w-[85%] mx-auto md:flex justify-center gap-3'>
            {/* Left Hand-side */}
            <div className='basis-[70%] grid grid-cols-1 gap-4'>
              {BlogCard.map((Data, index) => (
                <div key={index} className='bg-white rounded-md shadow-md md:flex '> 
                  <div className='basis-[35%] rounded-tl-md rounded-bl-md'>
                    <img src={Data.Photo} alt="" className='w-full h-[14.625rem] md:h-[16.875rem] lg:h-[20rem] object-cover md:rounded-tl-md md:rounded-bl-md' />
                  </div>
                  <div className='p-2 pt-3 md:p-3 basis-[70%]'>
                    <div className='flex gap-3'>
                      {/* <button className='bg-[#00AEEF] text-white px-3 py-2 rounded-lg text-sm'>{Data.Category}</button> */}
                      <button className='bg-[#F2EAE1] text-[#5F5F75] text-sm font-semibold px-3 py-2 flex items-center gap-2 rounded-md cursor-not-allowed'>
                        <span>
                          <FaRegCalendarAlt  />
                        </span>
                        <h3>{Data.Date}</h3>
                      </button>
                    </div>
                    <Link to={Data.Path}>
                      <h1 className='text-xl md:text-2xl font-extrabold my-3 hover:text-[#00AEEF] cursor-pointer transition-colors duration-500 ease-in-out'>{Data.Title}</h1>
                    </Link>
                    <p className='text-sm text-[#5F5F75] overflow-hidden text-ellipsis line-clamp-3'>{Data.Description}</p>
                    <div className='mt-4 flex gap-1 md:gap-3'>
                      <button className='bg-[#F2EAE1] text-[#5F5F75] text-sm font-semibold px-3 py-2 flex items-center gap-2 rounded-lg cursor-not-allowed'>
                        <span>
                          <FaComments   />
                        </span>
                        <h3>{Data.Comments}</h3>
                      </button>
                      <button className='bg-[#F2EAE1] text-[#5F5F75] text-sm font-semibold px-3 py-2 flex items-center gap-2 rounded-lg cursor-not-allowed'>
                        <span>
                          <FaClock />
                        </span>
                        <h3>{Data.Time}</h3>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right-hand side */}
            <div className='basis-[30%] pl-2 mt-4 md:mt-0'>
              <h1 className='text-2xl font-extrabold mb-3'>Featured Posts</h1>
              <div className='grid grid-cols-1 gap-4'>
                {FeaturedPost.map((Data, index) => (
                  <div key={index} className='flex gap-  items-center'>
                    <div className='basis-[30%]'>
                      <img src={Data.Photo} alt="" />
                    </div>
                    <div className='basis-[70%]'>
                      <h1 className='text-md font-bold'>{Data.Title}</h1>
                      <p className='text-sm text-[#5F5F75] mt-2'>{Data.Date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Blog;