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


const Blog = () => {
  const BlogCard = [
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image1,
      Title: "Meet Crystal, an Indigenous Pipeline Fighter in Texas",
      Description: "When Crystal Arrieta of El Paso, Texas, started fighting the construction of the Comanche Pipeline 8 months ago, she’d decided ...",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image2,
      Title: "Want your governor to take action on climate? This toolkit is for you.",
      Description: "Since Trump decided to withdraw the U.S. from the Paris Agreement, the Change.org community has been pushing state governors to reaffirm their ...",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image3,
      Title: "Is ’13 Reasons Why’ Causing More Harm Than Good?",
      Description: "When my father Victor died by suicide seven years ago, it completely changed the way I thought about the act. ...",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image4,
      Title: "Vancouver Ulara Nakagawa inspires petition to save elephant in Japan",
      Description: "A Vancouver woman's impassioned blog post about an elderly elephant living in a Japanese zoo has inspired an online petitionthat ...",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image5,
      Title: "NDP statement following the Brussels attacks",
      Description: "Today, President Obama nominated The Honorable Merrick B. Garland to be the newest Supreme Court Associate Justice. Garland currently serves as ...",
      Comments: "29 Comments",
      Time: "4 mins read"
    },
    {
      Category: "Petitions",
      Date: "December 8, 2022",
      Photo: image6,
      Title: "Student Starts Global Movement to Protect Waters from Plastic Waste",
      Description: "Tyler Doose is an environmental science student at Carleton University in Ottawa, Canada. He started “Protect Our Waters: Say No ...",
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
                    <img src={Data.Photo} alt="" className='w-full h-[14.625rem] md:h-[16.875rem] object-cover md:rounded-tl-md md:rounded-bl-md' />
                  </div>
                  <div className='p-2 md:p-3 basis-[70%]'>
                    <div className='flex gap-3'>
                      <button className='bg-[#00AEEF] text-white px-3 py-2 rounded-lg text-sm'>{Data.Category}</button>
                      <button className='bg-[#F2EAE1] text-[#5F5F75] text-sm font-semibold px-3 py-2 flex items-center gap-2 rounded-md cursor-not-allowed'>
                        <span>
                          <FaRegCalendarAlt  />
                        </span>
                        <h3>{Data.Date}</h3>
                      </button>
                    </div>
                    <h1 className='text-xl md:text-2xl font-extrabold my-3'>{Data.Title}</h1>
                    <p className='text-sm text-[#5F5F75]'>{Data.Description}</p>
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