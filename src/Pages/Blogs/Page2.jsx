import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Compnent
import FeaturedPost from '../../Components/Blog Components/FeaturedPost';

//icons
import { FaHome } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa6';

const Page2 = () => {
    const navigate = useNavigate();
    const HandleSignUp = () => {
        navigate('/sign-up');
    };
    const Content = [
        {
            Title: "1. Clear Impact Statements",
            Text: "Donors want to know exactly how their money will be used. Show them:",
            Points: [
                'Specific outcomes their donation will achieve',
                'Cost breakdown per impact unit',
                'Real stories of beneficiaries',
                'Visual representation of progress'
            ]
        },
        {
            Title: "2. Transparency and Trust Signals",
            Text: "Modern donors are savvy and want assurance their money is in good hands:",
            Points: [
                'Verified nonprofit status',
                'Clear financial reports',
                'Third-party endorsements',
                'Security certificates',
                'Professional website presence'
            ]
        },
        {
            Title: "3. Easy Donation Process",
            Text: "Nothing kills donor motivation like a complicated giving process:",
            Points: [
                'Mobile-friendly donation forms',
                'Multiple payment options',
                'Clear, simple steps',
                'Instant receipts',
                'Remember donor information for future giving'
            ]
        },
        {
            Title: "4. Regular Updates",
            Text: "Donors appreciate being kept in the loop:",
            Points: [
                'Progress updates',
                'Success stories',
                'Financial transparency',
                'Future plans',
                'Personal thank you messages'
            ]
        },
        {
            Title: "5. Community Connection",
            Text: "Donors want to feel part of something bigger:",
            Points: [
                'Active social media presence',
                'Donor community forums',
                'Volunteer opportunities',
                'Event invitations',
                'Recognition programs'
            ]
        },
        {
            Title: "6. Emotional Connection",
            Text: "Stories that touch the heart inspire giving:",
            Points: [
                'Personal beneficiary stories',
                'Behind-the-scenes glimpses',
                'Staff and volunteer profiles',
                'Video content',
                'Before and after comparisons'
            ]
        },
        {
            Title: "7. Professional Presentation",
            Text: "A polished presence builds confidence:",
            Points: [
                'Well-designed website',
                'Clear branding',
                'Professional photos',
                'Error-free content',
                'Consistent messaging'
            ]
        },
        {
            Title: "8. Easy Communication",
            Text: "Donors value accessible organizations:",
            Points: [
                'Quick response times',
                'Multiple contact options',
                'Personal touch',
                'Regular newsletters',
                'Open feedback channels'
            ]
        },
        {
            Title: "9. Efficiency Metrics",
            Text: "Smart donors look at organizational efficiency:",
            Points: [
                'Program expense ratios',
                'Administrative cost breakdown',
                'Impact per dollar',
                'Growth metrics',
                'Success rates'
            ]
        },
        {
            Title: "10. Long-term Vision",
            Text: "Donors invest in organizations with clear direction:",
            Points: [
                'Strategic plans',
                'Growth goals',
                'Sustainability measures',
                'Innovation initiatives',
                'Partnership opportunities'
            ]
        },
    ];

    const Expectations = [
        {
            Title: "Built-in Trust Features",
            Points: [
                'Verified organization badges',
                'Secure payment processing',
                'Transparent fee structure',
                'Impact tracking tools'
            ]
        },
        {
            Title: "Professional Presentation",
            Points: [
                'Customizable campaign pages',
                'Mobile-optimized design',
                'Integrated media galleries',
                'Brand consistency tools'
            ]
        },
        {
            Title: "Donor Engagement Tools",
            Points: [
                'Automated updates',
                'Easy communication systems',
                'Donor management dashboard',
                'Community features'
            ]
        }
    ]
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
                    <div className='basis-[70%] pt-4'>
                        <p className='text-sm my-2'>Understanding what motivates donors to give is crucial for any successful fundraising campaign. As a donor-centric platform, Fund Nest has analyzed thousands of successful campaigns to identify what really matters to donors. Here's what we've learned about what donors look for before opening their wallets.</p>
                        {Content.map((Data,index) => (
                            <div key={index} className='text-sm font-light mt-2'>
                                <h2 className='text-2xl font-semibold'>{Data.Title}</h2>
                                <p>{Data.Text}</p>
                                <ol className='list-disc space-y-1 ml-4'>
                                    {Data.Points.map((point, indx) => (
                                        <li key={indx}>{point}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>

                    {/* Featured Posts */}
                    <FeaturedPost />
                </div>
            </section>

            <div className='lg:h-[90vh]'>
                <img src="https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F3fa70434-a2a2-45fb-b134-ced541fec912%2F3.jpg?table=block&id=133567ca-6c04-8055-9682-e1bd7f10f895&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2" alt="" className='w-full h-full object-cover' />
            </div>

            <section className='w-[90%] mx-auto py-4'>
                <h1 className='text- text-3xl font-semibold text-[#00AEEF]'>How Fund Nest Helps Organizations Meet Donor Expectations</h1>
                <p className='text-sm my-3'>Fund Nest's platform is designed to help organizations deliver on all these donor preferences:</p>
                {Expectations.map((Info,index) => (
                    <div key={index}>
                        <h2 className='text-xl font-semibold'>{Info.Title}</h2>
                        <ol className='list-disc space-y-1 ml-4 text-sm'>
                            {Info.Points.map((point,indx) => (
                                <li key={indx}>{point}</li>
                            ))}
                        </ol>
                    </div>
                ))}
                <div className='mt-3'>
                            <h1 className='text-3xl'>Start Meeting Donor Expectations Today</h1>
                            <p className='text-sm'>Ready to transform your donor relationships? Fund Nest provides everything you need to meet and exceed donor expectations.</p>
                        </div>
                        <div className='mt-4'>
                            <button onClick={HandleSignUp} className='text-white bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                                Get Started 
                                <span>
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
            </section>
        </body>
    </>
  )
}

export default Page2;