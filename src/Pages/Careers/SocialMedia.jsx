import React from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import ApplicationForm from '../../Components/CareerComponent/ApplicationForm';

//icon
import { FaCheck } from "react-icons/fa6";

const SocialMedia = () => {
    const Bullets = [
        {
            Title: "Key Responsibilities",
            Points: [
                'Manage and create content for all social media platforms (LinkedIn, Twitter, Instagram, Facebook)',
                'Develop and implement social media strategy',
                'Monitor and engage with community interactions',
                'Create and schedule regular posts',
                'Track social media metrics and prepare reports',
                'Collaborate with marketing team on campaign promotion',
                'Research industry trends and best practices',
                'Support influencer outreach initiatives',
                'Create engaging captions and copy',
                'Monitor and respond to social media inquiries'
            ]
        },
        {
            Title: "Requirements",
            Points: [
                'Strong understanding of social media platforms',
                'Excellent written and verbal communication skills',
                'Basic knowledge of social media analytics',
                'Creative mindset and attention to detail',
                'Ability to create engaging content',
                'Interest in community management',
                'Knowledge of social media scheduling tools',
                'Understanding of social media best practices',
                'Experience with content creation tool',
                'Strong organizational skills'
            ]
        },
        {
            Title: "Learning Opportunities",
            Points: [
                'Social media strategy development',
                'Community management experience',
                'Content creation and curation',
                'Analytics and reporting skills',
                'Campaign management experience',
                'Influencer collaboration',
                'Crisis management',
                'Social listening techniques'
            ]
        },
        {
            Title: "Program Benefits",
            Points: [
                'Certificate of Completion upon successful program completion',
                'Detailed recommendation letter based on performance',
                'Hands-on platform management experience',
                'Flexible remote work arrangement',
                'Weekly mentorship sessions',
                'Professional development workshops',
                'Access to social media tools and resources'
            ]
        },
        {
            Title: "Terms & Conditions",
            Points: [
                '3-month commitment required',
                'Weekly progress reports',
                'Confidentiality agreement required',
                'Professional conduct expected',
                'Regular check-ins with social media manager',
                'Adherence to social media policies',
                'Content ownership agreement'
            ]
        },
    ]
  return (
    <>
        <Helmet>
            <title>Social Media Management Intern | Fund Nest</title>
        </Helmet>
        <body className='font-sen bg-[#FFFCF7]'>
            {/* Hero Section */}
            <section className=' bg-no-repeat w-full h-[17.5rem] md:h-[40vh] lg:h-[90vh] relative'>
                <img src='https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F3c0289b4-926e-4c2d-8ba2-57b044a835b8%2Fpexels-tracy-le-blanc-67789-607812.jpg?table=block&id=133567ca-6c04-80e3-ae48-e29bb6187a9a&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2' alt='Hero' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                    <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                        <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Social Media Management Intern</h1>
                        <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Driven by compassion, united by purpose our volunteers are the heart of every impact we make.</p>
                    </div>
                </div>
            </section>

            <section className='w-[90%] mx-auto py-6 md:flex justify-center gap-3'>
            <div className='basis-[55%]'>
                <h1 className='text-[#00AEEF] font-bold text-2xl lg:text-4xl mb-2'>About the Role</h1>
                <p className='text-sm'>Lead our social media presence and help build an engaged community around Fund Nest's mission. This role provides hands-on experience in social media marketing while making a positive impact in the fundraising and nonprofit sector.</p>

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
                        <li>Cover letter</li>
                        <li>Social media handles/portfolio</li>
                        <li>Available start date</li>
                        <li>Two professional or academic references</li>
                        <li>Writing samples</li>
                        <li>Examples of social media work (if available)</li>
                    </ol>
                    <p className='text-sm mt-3'>Join Fund Nest in building a community of changemakers and amplifying social impact through effective social media management!</p>
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

export default SocialMedia;
