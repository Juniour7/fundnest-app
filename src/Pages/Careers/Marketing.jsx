import React from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import ApplicationForm from '../../Components/CareerComponent/ApplicationForm';

//icon
import { FaCheck } from "react-icons/fa6";

const Marketing = () => {
    const Bullets = [
        {
            Title: "Key Responsibilities",
            Points: [
                'Create and manage content calendars for marketing campaigns',
                'Write compelling copy for email campaigns, social media, and website content',
                'Assist in developing marketing strategies for platform promotion',
                'Analyze campaign performance and prepare reports',
                'Support the creation of marketing materials for fundraisers and donors',
                'Collaborate with the design team on visual content',
                'Help maintain our content management system'
            ]
        },
        {
            Title: "Requirements",
            Points: [
                'Currently pursuing or recently completed a degree in Marketing, Communications, or related field',
                'Strong written and verbal communication skills',
                'Basic understanding of digital marketing principles',
                'Familiarity with social media platforms and marketing tools',
                'Ability to work independently and meet deadlines',
                'Interest in nonprofit sector and social impact',
                'Previous marketing experience is a plus but not required'
            ]
        },
        {
            Title: "Learning Opportunities",
            Points: [
                'Hands-on experience with digital marketing tools and analytics',
                'Content creation and campaign management',
                'Understanding of nonprofit marketing strategies',
                'Professional portfolio development',
                'Mentorship from experienced marketers'
            ]
        },
        {
            Title: "Program Benefits",
            Points: [
                'Certificate of Completion upon successful program completion',
                'Detailed recommendation letter based on performance',
                'Flexible remote work arrangement',
                'Weekly mentorship sessions',
                'Professional development workshops',
                'Networking opportunities within the nonprofit sector'
            ]
        },
        {
            Title: "Terms & Conditions",
            Points: [
                '3-month commitment required',
                'Weekly progress reports',
                'Confidentiality agreement required',
                'Professional conduct expected',
                'Regular check-ins with supervisor',
                'Adherence to company policies and procedures'
            ]
        },
    ]
  return (
    <>
        <Helmet>
            <title>Marketing Intern | Fund Nest</title>
        </Helmet>
        <body className='font-sen bg-[#FFFCF7]'>
            {/* Hero Section */}
            <section className=' bg-no-repeat w-full h-[17.5rem] md:h-[40vh] lg:h-[90vh] relative'>
                <img src='https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Fde37f7c7-cc66-46c8-99da-41ffe237787b%2F14.jpg?table=block&id=133567ca-6c04-80cc-b451-de1ed6656166&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2' alt='Hero' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                    <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                        <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Marketing Intern</h1>
                        <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Driven by compassion, united by purpose our volunteers are the heart of every impact we make.</p>
                    </div>
                </div>
            </section>

            <section className='w-[90%] mx-auto py-6 md:flex justify-center gap-3'>
            <div className='basis-[55%]'>
                <h1 className='text-[#00AEEF] font-bold text-2xl lg:text-4xl mb-2'>About the Role</h1>
                <p className='text-sm'>As a Marketing Intern at Fund Nest, you'll be at the forefront of promoting social impact initiatives and helping worthy causes reach their fundraising goals. This position offers hands-on experience in digital marketing within the nonprofit sector.</p>

                <div >
                    {Bullets.map((Info,index) => (
                        <div key={index} className='my-4'>
                            <h2 className='text-xl md:text-2xl font-medium'>{Info.Title}</h2>
                            <ul className='space-y-2 ml-1 mt-2 text-sm md:text-base'>
                                {Info.Points.map((point,indx) => (
                                    <li key={indx} className='flex gap-2 items-center'>
                                        <span className='text-[#00AEEF] text-xl'>
                                            <FaCheck />
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className='text-xl md:text-2xl font-medium mb-2'>How to Apply</h2>
                    <p className='text-sm'>Interested candidates can:</p>
                    <ol className='list-decimal space-y-2 mt-2 ml-4 text-sm'>
                        <li>
                            Email their application to <a href="mailto:info@iraady.com" className='underline underline-offset-1 hover:text-[#00AEEF] transition-colors duration-300 ease-in-out'>info@iraady.com</a>
                        </li>
                        <li>
                            Visit <a href="https://fundnest.org" className='underline underline-offset-1 hover:text-[#00AEEF] transition-colors duration-300 ease-in-out'>fundnest.org</a> and click "Apply Now"
                        </li>
                    </ol>
                    <p className='text-sm mt-3'>Required Application Materials:</p>
                    <ol className='text-sm list-disc space-y-2 ml-4'>
                        <li>Resume/CV</li>
                        <li>Cover letter expressing interest</li>
                        <li>Available start date</li>
                        <li>Two Professional or academic references</li>
                        <li>Writing samples (if available)</li>
                    </ol>
                    <p className='text-sm mt-3'>Join Fund Nest in revolutionizing fundraising and making a positive impact in the world!</p>
                </div>
            </div>

                <div className='basis-[45%]'>
                    <ApplicationForm />
                </div>
            </section>
        </body>
    </>
  )
}

export default Marketing;