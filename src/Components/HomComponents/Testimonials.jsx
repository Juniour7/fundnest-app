import React from 'react';

//icons
import { ImQuotesLeft, ImQuotesRight  } from "react-icons/im";

//Image
import Bg from '../../assets/slideshow/hero2.jpg';

import Person1 from '../../assets/Homepage/Person1.png';
import Person2 from '../../assets/Homepage/Person2.png';
import Person3 from '../../assets/Homepage/Person3.png';



const Stories = [
    {
        image: Person1,
        name: "Emmanuel K.",
        role: "Community Development Leader",
        story: "Thanks to Fundnest, our community was able to cover the school fees for over 50 vulnerable children this year. The entire process was transparent, and the Fundnest team provided continuous support and updates, making us feel truly valued every step of the way."
    },
    {
        image: Person2,
        name: "Amina S.",
        role: "Flood Relief Beneficiary",
        story: "When floods hit our community in Kenya, Fundnest was a lifeline. We received immediate assistance with food, clean water, and temporary shelter. The transparent allocation of funds reassured us during such a difficult time and helped us rebuild with hope"
    },
    {
        image: Person3,
        name: "John R.",
        role: "Regular Contributor",
        story: "I love how Fundnest provides me with detailed reports and updates on the projects I support. Seeing the impact of my donations is incredibly motivating. It's fulfilling to know that my contributions are directly improving lives."
    },
    {
        image: "https://i.pinimg.com/564x/74/37/85/74378569db72b7d1922fca8e429c8b62.jpg",
        name: "Sarah M.",
        role: "Dedicated Supporter",
        story: "As a long-time donor, I’m continually impressed by Fundnest’s transparency. The real-time campaign updates and detailed fund reports give me full confidence in my donations. The user-friendly platform makes it easy to support causes I care about. Fundnest has truly improved my giving experience."
    },
]

const Testimonials = () => {
  return (
    <>
        <section
            className='bg-cover bg-no-repeat bg-center font-sen'
            style={{backgroundImage: `url(${Bg})`}}
        >
            <div className='w-full h-full bg-gradient-to-b from-[#00AEEF80] to-black bg-opacity-[50%]'>
                <div className='py-7 w-[90%] mx-auto'>
                    <div className='flex flex-col justify-center items-center text-white mt-6 mb-3 space-y-4'>
                        <button className='bg-[#00AEEF] rounded-lg px-4 py-2'>TESTIMONIALS</button>
                        <h1 className='text-2xl md:text-3xl font-light text-center'>Real Stories, Real Impact</h1>
                    </div>
                    <div className='mt-[5rem] mb-6 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-16 lg:gap-5 space-y-11 md:space-y-0 mt'>
                        {Stories.map((Data,index) => (
                            <div key={index} className='bg-white rounded-lg p-3 relative'>
                                <div className='flex flex-col justify-center items-center absolute -top-[3.125rem] left-1/2 transform -translate-x-1/2'>
                                    <img src={Data.image} alt="" className='w-[6.25rem] h-[6.25rem] rounded-full border-3 border-white object-cover shadow-md' />
                                </div>
                                <div className='text-center mt-12 pb-3'>
                                    <h1 className='font-semibold text-lg'>{Data.name}</h1>
                                    <p className='text-sm text-[#666666]'>{Data.role}</p>
                                    <div className='mt-2'>
                                        <p className='text-sm'>
                                            <span className='text-[#00AEEF] text-2xl'>
                                                <ImQuotesLeft />
                                            </span>
                                            {Data.story}
                                            <span className='text-[#00AEEF] text-2xl flex justify-end'>
                                                <ImQuotesRight  />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Testimonials;