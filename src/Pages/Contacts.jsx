import React from 'react'
import { Helmet } from 'react-helmet-async';

//Icons
import { FaMap, FaHeadset  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiTelevisionDuotone } from "react-icons/pi";
import { IoChevronForward } from "react-icons/io5";


//Images
import Hero from '../assets/Contact/Heo.png';
import Image from '../assets/Contact/Hero1.png';
import Frame1 from '../assets/Contact/Frame1.png';
import Frame2 from '../assets/Contact/Frame2.png';

const Contacts = () => {
    const Help = [
        {
            icon: <TfiHeadphoneAlt />,
            Title: "Support",
            Description: "We’re here to you any question about product info@fundnest.org"
        },
        {
            icon: <PiTelevisionDuotone />,
            Title: "Media",
            Description: "Get our news, company info and media resources info@fundnest.org"
        },
        {
            icon: <FaRegCreditCard />,
            Title: "Payment",
            Description: "We’re love to talk about how we can work together info@fundnest.org"
        },
    ];

  return (
    <>
        <Helmet>
            <title>Contact Us | Fund Nest</title>
        </Helmet>
        <body className='bg-[#FFFCF7] font-sen'>
           {/* Hero Scetion  */}
           <section className='md:flex justify-center  lg:h-[90vh]'>
                <div className='basis-[50%] px-4 py-4'>
                    <div className='w-[90%] mx-auto'>
                        <h1 className='text-3xl md:text-5xl font-bold mt-5'>Hello, Let's Connect!</h1>
                        <p className='text-[#5F5F75] text-sm mt-4 w-[80%]'>Whether you're looking to make an impact or have questions about our program, we're here to help shape your journey in social impact.</p>
                        <div className='mt-11 space-y-4'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#00AEEF] rounded-full w-[45px] h-[45px] text-white flex flex-col justify-center items-center'>
                                    <span className='text-2xl'>
                                        <FaMap />
                                    </span>
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>Address</h1>
                                    <p className='text-sm'>London, UK | Kigali, Rwanda</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#00AEEF] rounded-full w-[45px] h-[45px] text-white flex flex-col justify-center items-center'>
                                    <span className='text-3xl'>
                                        <IoIosMail />
                                    </span>
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>Email</h1>
                                    <a href='mailto:info@fundnest.org' className='text-sm'>info@fundnest.org</a>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#00AEEF] rounded-full w-[45px] h-[45px] text-white flex flex-col justify-center items-center'>
                                    <span className='text-3xl'>
                                        <FaHeadset  />
                                    </span>
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>Phone number</h1>
                                    <a href='tel:+250 787 171 273' className='text-sm text-[#5F5F75]'>+250 787 171 273</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] bg-[#F5EFE0] flex flex-col justify-center items-center'>
                    <div>
                        <img src={Hero} alt="" className='h-[95%] w-[90%] mx-auto' />
                    </div>
                </div>
           </section>

           {/* Contact Form */}
           <section className='bg-[#00AEEF] text-white py-6'>
                <div className=' md:w-[70%] mx-auto px-1'>
                    <h1 className='text-2xl md:text-4xl font-semibold mt-5 text-center'>Feel free to contact us.</h1>
                    <h1 className='text-2xl md:text-4xl font-semibold text-center'>We’ll be glad to hear from you.</h1>

                    {/* Form  */}
                    <form action="https://api.web3forms.com/submit" method="POST" className='w-[90%] relative lg:w-[70%] mx-auto bg-white shadow-md rounded-md text-black p-4 py-6 mt-4 space-y-4 z-20'>
                        {/* Access Key */}
                        <input
                            type="hidden"
                            name="access_key"
                            value="6862bfff-bd69-4866-b854-1f0dcee7429a"
                        ></input>
                        <div>
                            <label htmlFor="">Your name</label>
                            <input type="text" name='Respondent Name' className='w-full border rounded-md py-1 px-2 outline-none' required />
                        </div>
                        <div>
                            <label htmlFor="">Your role</label>
                            <select name="Your Role" id="Your Role" className='w-full border rounded-md py-2 px-2 outline-none bg-transparent' required>
                                <option value="">Potential Volunteer</option>
                                <option value="">Intern</option>
                                <option value="">Organization</option>
                                <option value="">Donor</option>
                                <option value="">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Your Email</label>
                            <input type="email" name='Respondent Email' className='w-full border rounded-md py-1 px-2 outline-none' required/>
                        </div>
                        <div>
                            <label htmlFor="">Subject</label>
                            <input type="text" name='Respondent Subject' className='w-full border rounded-md py-1 px-2 outline-none' required/>
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea rows='7' type="text" name='Respondent Message' className='w-full border rounded-md py-1 px-2 outline-none' required />
                        </div>
                        <div>
                            <button type='submit' className='bg-[#00AEEF] text-white w-full py-2 rounded-lg hover:bg-black'>Send</button>
                        </div>
                    </form>
                </div>
           </section>

           {/* Got a question */}
           <section className='relative'>
                <svg
                    className="absolute -top-[5rem] md:-top-[18.5rem] w-full z-0"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#FFFCF7"
                        fillOpacity="1"
                        d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <div className='pt-20 w-[90%] md:w-[80%] mx-auto'>
                    <div className='my-4 space-y-3'>
                        <h1 className='text-4xl font-semibold text-center'>Got a question?</h1>
                        <p className='text-sm text-[#5F5F75] text-center'>Contact our support department to solve your problem.</p>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-3 mt-4 mb-10'>
                        {Help.map((Data , index) => (
                            <div key={index} className='bg-[#00AEEF] p-5 text-white rounded-md flex flex-col  items-center'>
                                <div className='my-3 bg-white rounded-full p-4 text-[#00AEEF]'>
                                    <span className='text-5xl'>
                                        {Data.icon}
                                    </span>
                                </div>
                                <h1 className='text-3xl font-semibold'>{Data.Title}</h1>
                                <p className='text-center mt-3 text-sm'>{Data.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
           </section>

           <section className='bg-[#F5EFE0] md:flex py-5'>
                <div className='basis-[50%] flex flex-col justify-center items-center mb-3 md:mb-0'>
                    <img src={Image} alt="" className='w-[90%]'/>
                </div>
                <div className='basis-[50%] pl-3'>
                    <h1 className='text-2xl md:text-4xl font-semibold w-[50%]'>We Work Worldwide.</h1>
                    <div className='my-7 flex gap-3'>
                        <div className='basis-[50%] md:basis-[40%]'>
                            <h1 className='text-xl font-semibold'>United Kingdom</h1>
                            <p className='text-sm text-[#5F5F75]'>85 Great Portland Street, London, W1W 7LT, United Kingdom.</p>
                        </div>
                        <div className='basis-[50%] md:basis-[40%]'>
                            <h1 className='text-xl font-semibold'>Rwanda</h1>
                            <p className='text-sm text-[#5F5F75]'>1 KN 78 St, Kigali Norrsken House Kigali.</p>
                        </div>
                    </div>
                </div>
           </section>

           <section className='py-11 md:flex justify-around w-[80%] mx-auto space-y-4 md:space-y-0'>
                <div>
                    <div className='bg-[#F2EAE1] mb-2 rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center p-2'>
                        <div className=''>
                            <img src={Frame1} alt="" className='w-[40px] h-[40px] mx-auto' />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='font-extrabold text-2xl'>Documentation</h1>
                        <p className='text-sm text-[#5F5F75] w-[60%]'>Find documents related to products and your account.</p>
                        <button className='bg-[#00AEEF] text-white px-3 py-2 flex justify-center items-center gap-2 rounded-lg'>
                            <h3>Find a tutorial</h3>
                            <span>
                                <IoChevronForward />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='bg-[#F2EAE1] mb-2 rounded-full h-[60px] w-[60px] flex flex-col justify-center items-center p-2'>
                        <div className=''>
                            <img src={Frame2} alt="" className='w-[40px] h-[40px] mx-auto' />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='font-extrabold text-2xl'>Support Desk</h1>
                        <p className='text-sm text-[#5F5F75] w-[60%]'>Contact our technical experts for customer support.</p>
                        <button className='bg-[#00AEEF] text-white px-3 py-2 flex justify-center items-center gap-2 rounded-lg'>
                            <h3>Create a ticket</h3>
                            <span>
                                <IoChevronForward />
                            </span>
                        </button>
                    </div>
                </div>
           </section>
        </body>
    </>
  );
}

export default Contacts;