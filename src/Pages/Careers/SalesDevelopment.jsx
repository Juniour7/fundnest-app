import React from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import ApplicationForm from '../../Components/CareerComponent/ApplicationForm';

//icon
import { FaCheck } from "react-icons/fa6";

const SalesDevelopment = () => {
    const Bullets = [
        {
            Title: "Key Responsibilities",
            Points: [
                'Identify and reach out to potential platform users',
                'Conduct initial discovery calls with interested organizations',
                'Provide platform demonstrations to potential users',
                'Support the onboarding process for new organizations',
                'Maintain detailed records in CRM system',
                'Generate leads through various channels',
                'Assist in developing sales strategies',
                'Support the creation of sales materials',
                'Follow up with prospects and maintain relationships',
                'Document best practices and success stories'
            ]
        },
        {
            Title: "Requirements",
            Points: [
                'Excellent communication and interpersonal skills',
                'Basic understanding of sales principles',
                'Ability to learn and explain technical concepts',
                'Good organizational and follow-up skills',
                'Proficiency with CRM systems (training provided)',
                'Interest in nonprofit sector',
                'Professional demeanor',
                'Self-motivated and proactive attitude',
                'Ability to work independently',
                'Strong problem-solving skills'
            ]
        },
        {
            Title: "Learning Opportunities",
            Points: [
                'Sales process and strategy experience',
                'Relationship building skills',
                'CRM management',
                'Nonprofit sector knowledge',
                'Professional communication skills',
                'Lead generation techniques',
                'Sales pipeline management',
                'Customer success principles'
            ]
        },
        {
            Title: "Program Benefits",
            Points: [
                'Certificate of Completion upon successful program completion',
                'Detailed recommendation letter based on performance',
                'Sales development training',
                'Flexible remote work arrangement',
                'Weekly mentorship sessions',
                'Professional development workshops',
                'Access to sales tools and resources'
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
                'Data protection agreement'
            ]
        },
    ]
  return (
    <>
        <Helmet>
            <title>Sales Development Volunteer | Fund Nest</title>
        </Helmet>
        <body className='font-sen bg-[#FFFCF7]'>
            {/* Hero Section */}
            <section className=' bg-no-repeat w-full h-[17.5rem] md:h-[40vh] lg:h-[90vh] relative'>
                <img src='https://iraady.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83398eb6-e048-420e-b776-57b9b5fa6f93%2F94cf8600-0996-4544-869f-1978db57e72e%2Fpexels-goumbik-590022.jpg?table=block&id=133567ca-6c04-808d-960a-f7b8e91b9333&spaceId=83398eb6-e048-420e-b776-57b9b5fa6f93&width=1420&userId=&cache=v2' alt='Hero' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 bg-black bg-opacity-50'>
                    <div className='flex flex-col items-center justify-center absolute inset-0 text-white w-[90%] lg:w-[80%] mx-auto'>
                        <h1 className='text-2xl lg:text-6xl text-center font-semibold'>Sales Development Volunteer</h1>
                        <p className='text-sm text-center text-[#EDF7F5] foont-light mt-[0.625rem]'>Driven by compassion, united by purpose our volunteers are the heart of every impact we make.</p>
                    </div>
                </div>
            </section>

            <section className='w-[90%] mx-auto py-6 md:flex justify-center gap-3'>
            <div className='basis-[55%]'>
                <h1 className='text-[#00AEEF] font-bold text-2xl lg:text-4xl mb-2'>About the Role</h1>
                <p className='text-sm'>Help connect nonprofits and fundraisers with the tools they need to succeed. This role provides valuable experience in relationship-building and sales within the social impact sector while making a meaningful difference in how organizations raise funds.</p>

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
                        <li>Available start date</li>
                        <li>Brief statement of why you're interested in nonprofit sales</li>
                        <li>Previous sales experience (if available)</li>
                    </ol>
                    <p className='text-sm mt-3'>Join Fund Nest in connecting worthy causes with the tools and resources they need to make a bigger impact!</p>
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

export default SalesDevelopment;