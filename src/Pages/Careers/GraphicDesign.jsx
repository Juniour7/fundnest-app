import React from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import ApplicationForm from '../../Components/CareerComponent/ApplicationForm';

//icon
import { FaCheck } from "react-icons/fa6";

const GraphicDesign = () => {
    const Bullets = [
        {
            Title: "Requirements",
            Points: [
                'Portfolio demonstrating graphic design skills',
                'Proficiency in Adobe Creative Suite or similar design tools',
                'Understanding of design principles and typography',
                'Ability to work within brand guidelines',
                'Strong attention to detail',
                'Good time management skills',
                'Experience with digital and print design',
                'Knowledge of current design trends',
                'Ability to receive and implement feedback'
            ]
        },
        {
            Title: "Learning Opportunities",
            Points: [
                'Build a robust portfolio of nonprofit design work',
                'Experience with campaign-based design',
                'Understanding of brand development',
                'Collaboration with marketing professionals',
                'Social impact design experience',
                'Exposure to fundraising campaign design',
                'Skills in creating purpose-driven visuals'
            ]
        },
        {
            Title: "Program Benefits",
            Points: [
                'Certificate of Completion upon successful program completion',
                'Detailed recommendation letter based on performance',
                'Portfolio-worthy projects',
                'Flexible remote work arrangement',
                'Weekly mentorship sessions',
                'Professional development opportunities',
                'Access to design resources and tools'
            ]
        },
        {
            Title: "Terms & Conditions",
            Points: [
                '3-month commitment required',
                'Weekly progress reports',
                'Confidentiality agreement required',
                'Professional conduct expected',
                'Regular check-ins with creative director',
                'Adherence to brand guidelines and design standards',
                'Intellectual property agreement'
            ]
        },
    ]
  return (
    <>
        <Helmet>
            <title>Graphic Design Volunteer | Fund Nest</title>
        </Helmet>
        <body className='font-sen bg-[#FFFCF7]'>
            {/* Hero Section */}
            <section className=' bg-no-repeat w-full h-[17.5rem] md:h-[40vh] lg:h-[90vh] relative'>
                <img src='https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2Ffd2ffbd3-e78a-448a-87a6-fb589caa29f7%2F18.jpg?table=block&id=133567ca-6c04-800e-b242-dfbed295dd90&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2' alt='Hero' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                    <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                        <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Graphic Design Volunteer</h1>
                        <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Driven by compassion, united by purpose our volunteers are the heart of every impact we make.</p>
                        <div className='flex justify-center gap-3 mt-[1.25rem]'>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[90%] mx-auto py-6 md:flex justify-center gap-3'>
            <div className='basis-[55%]'>
                <h1 className='text-[#00AEEF] font-bold text-2xl lg:text-4xl mb-2'>About the Role</h1>
                <p className='text-sm'>Join our creative team in designing visually com pelling materials that help nonprofits and fundraisers tell their stories effectively. This role offers real-world experience in nonprofit design while building your professional portfolio.</p>
                <div className='my-4'>
                    <h2 className='text-xl md:text-2xl font-medium'>Key Responsibilities</h2>
                    <ul className='space-y-2 ml-1 mt-2 text-sm md:text-base'>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Create engaging graphics for social media platforms
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Design marketing materials including infographics, presentations, and email templates
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Develop visual assets for fundraising campaigns
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Maintain brand consistency across all materials
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Collaborate with marketing team on campaign visuals
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Create illustrations and icons for platform use
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Support the design of promotional materials
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span className='text-[#00AEEF] text-xl'>
                                <FaCheck />
                            </span>
                            Participate in creative brainstorming sessions
                        </li>
                    </ul>
                </div>

                <div >
                    {Bullets.slice(0,9).map((Info,index) => (
                        <div key={index} className='mb-4'>
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
                        <li>Portfolio of design work (required)</li>
                        <li>Available start date</li>
                        <li>Professional or academic references</li>
                        <li>Link to online portfolio (if available)</li>
                    </ol>
                    <p className='text-sm mt-3'>Join Fund Nest in creating visual stories that inspire giving and support worthy causes!</p>
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

export default GraphicDesign;