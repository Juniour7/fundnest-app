import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Compnent
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';

const Page5 = () => {
    const navigate = useNavigate();
    const HandleSignUp = () => {
        navigate('/sign-up');
    };
    const Bulltes = [
        {
            Title: "Perfect Market Fit",
            Points: [
                'Combines social impact with business model',
                'Builds community around your mission',
                'Validates market demand',
                'Creates brand ambassadors'
            ]
        },
        {
            Title: "Proven Track Record",
            Points: [
                '64% of social enterprises successfully crowdfund',
                'Average campaign raises 24% above goal',
                '47% gain repeat supporters',
                '38% find long-term investors'
            ]
        },
        {
            Title: "1. Compelling Story",
            Points: [
                'Clear social mission',
                'Demonstrated impact',
                'Personal connection',
                'Vision for change'
            ]
        },
        {
            Title: "2. Professional Presentation",
            Points: [
                'High-quality video',
                'Impact metrics',
                'Team credentials',
                'Clear business model'
            ]
        },
        {
            Title: "3. Engaged Community",
            Points: [
                'Pre-launch email list',
                'Social media presence',
                'Partner network',
                'Ambassador program'
            ]
        },
        {
            Title: "Pre-Launch Phase (4-6 Weeks)",
            Points: [
                'Build email list',
                'Create content calendar',
                'Engage potential supporters',
                'Prepare marketing materials'
            ]
        },
        {
            Title: "Launch Phase (Week 1)",
            Points: [
                'Activate core supporters',
                'Launch PR campaign',
                'Host kickoff event',
                'Engage social media'
            ]
        },
        {
            Title: "Momentum Phase (Weeks 2-3)",
            Points: [
                'Share updates regularly',
                'Release new content',
                'Engage media',
                'Activate partnerships'
            ]
        },
        {
            Title: "Final Push (Last Week)",
            Points: [
                'Create urgency',
                'Leverage social proof',
                'Contact major donors',
                'Plan celebration'
            ]
        },
        {
            Title: "Platform Features",
            Points: [
                'Custom campaign pages',
                'Impact tracking tools',
                'Investor dashboard',
                'Social sharing tools'
            ]
        },
        {
            Title: "Business Tools",
            Points: [
                'Financial reporting',
                'Donor management',
                'Marketing automation',
                'Analytics dashboard'
            ]
        },
        {
            Title: "1. Set Clear Goals",
            Points: [
                'Funding targets',
                'Impact metrics',
                'Timeline',
                'Use of funds'
            ]
        },
        {
            Title: "2. Offer Compelling Rewards",
            Points: [
                'Impact shares',
                'Product pre-orders',
                'Recognition',
                'Exclusive access'
            ]
        },
        {
            Title: "3. Build Trust",
            Points: [
                'Transparent financials',
                'Regular updates',
                'Team credentials',
                'Partner endorsements'
            ]
        },
        {
            Title: "4. Leverage Technology",
            Points: [
               'Multiple payment options',
               'Mobile optimization',
               'Social integration',
               'Analytics tracking'
            ]
        },
    ]
  return (
    <>
        <Helmet>
            <title>Blog - 10 Things Donors Look for | Fund Nest</title>
        </Helmet>
        <body className='font-sen py-4 '>
            <h1 className='text-center text-xl md:text-3xl font-bold w-[90%] mx-auto my-6 text-[#00AEEF]'>The Complete Guide to Social Enterprise Crowdfunding: Strategies That Actually Work</h1>
            <section 
                className='bg-cover  bg-no-repeat bg-top h-[15.625rem] md:h-[40vh] lg:h-[90vh]'
                style={{backgroundImage: 'url(https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F4ab47cf8-e9a6-4cd2-8913-9d32d1c02432%2F15.jpg?table=block&id=133567ca-6c04-807b-8255-caa53514ce05&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2)'}}    
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
                        <p>Are you a social entrepreneur looking to fund your impact-driven venture? Crowdfunding has emerged as a powerful tool for social enterprises, combining fundraising with community building and impact demonstration. This comprehensive guide will show you exactly how to succeed with social enterprise crowdfunding.</p>
                        <div>
                            <h2 className='my-3 font-semibold text-2xl'>Why Crowdfunding Works for Social Enterprises</h2>
                            {Bulltes.slice(0, 2).map((Info,index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xl font-semibold'>{Info.Title}</h3>
                                    <ol className='text-sm space-y-1 list-disc ml-4'>
                                        {Info.Points.map((point,indx) => (
                                            <li>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}

                            <h2 className='my-3 font-semibold text-2xl'>Essential Elements of Successful Campaigns</h2>
                            {Bulltes.slice(2, 5).map((Info,index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xl font-semibold'>{Info.Title}</h3>
                                    <ol className='text-sm space-y-1 list-disc ml-4'>
                                        {Info.Points.map((point,indx) => (
                                            <li key={indx}>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}

                            <h2 className='my-3 font-semibold text-2xl'>Step-by-Step Campaign Strategy</h2>
                            {Bulltes.slice(5, 9).map((Info,index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xl font-semibold'>{Info.Title}</h3>
                                    <ol className='text-sm space-y-1 list-decimal ml-4'>
                                        {Info.Points.map((point,indx) => (
                                            <li key={indx}>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}

                            <h2 className='my-3 font-semibold text-2xl'>How Fund Nest Supports Social Enterprises</h2>
                            {Bulltes.slice(9, 11).map((Info,index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xl font-semibold'>{Info.Title}</h3>
                                    <ol className='text-sm space-y-1 list-decimal ml-4'>
                                        {Info.Points.map((point,indx) => (
                                            <li key={indx}>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}


                            <h2 className='my-3 font-semibold text-2xl'>Best Practices for Maximum Impact</h2>
                            {Bulltes.slice(11, 16).map((Info,index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xl font-semibold'>{Info.Title}</h3>
                                    <ol className='text-sm  space-y-1 list-disc ml-4'>
                                        {Info.Points.map((point,indx) => (
                                            <li key={indx}>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}

                            <div className='mt-3'>
                                <h3 className='text-2xl font-semibold'>Common Pitfalls to Avoid</h3>
                                <ol className='list-decimal space-y-1 ml-4'>
                                    <li>Unclear value proposition</li>
                                    <li>Poor preparation</li>
                                    <li>Weak network activation</li>
                                    <li>Inconsistent communication</li>
                                    <li>Missing impact metrics</li>
                                </ol>
                            </div>

                            <div className='mt-3'>
                                <h3 className='text-2xl font-semibold'>Ready to Launch Your Campaign?</h3>
                                <p>Fund Nest provides everything social enterprises need to run successful crowdfunding campaigns:</p>
                                <ol className='list-disc space-y-1 ml-4'>
                                    <li>Professional platform</li>
                                    <li>Impact tracking</li>
                                    <li>Supporter engagement</li>
                                    <li>Expert guidance</li>
                                </ol>
                            </div>

                            <button onClick={HandleSignUp} className='text-white mt-4 bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                                Get Started 
                                <span>
                                    <FaArrowRight />
                                </span>
                            </button>
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

export default Page5;