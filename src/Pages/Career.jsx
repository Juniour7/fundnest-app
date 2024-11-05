import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import ApplicationForm from '../Components/CareerComponent/ApplicationForm';

//icons
import { FaArrowRight } from "react-icons/fa6";


//images
import Image1 from '../assets/Career/image1.png';
import image2 from '../assets/Career/image2.jpg';
import image3 from '../assets/Career/image3.png';


const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const Values = [
        {
            number: '01',
            title: "Impact First",
            content: "Every decision we make is guided by our mission to maximize positive change in communities."
        },
        {
            number: '02',
            title: "Community Driven",
            content: "We build bridges between causes and supporters, fostering meaningful connections."
        },
        {
            number: '03',
            title: "Innovation",
            content: "We constantly push boundaries to make giving and fundraising more effective and accessible."
        }
    ];

    const OpenPosition = [
        {
            title: "Marketing Intern",
            description: "Join our dynamic marketing team to create compelling campaigns that  connect donors with causes. You'll learn hands-on digital marketing  skills while helping nonprofits and fundraisers tell their stories and  reach their goals. This 3-month program provides real-world experience  in social impact marketing.",
            type: "Marketing",
            time: "10hrs/week",
            location: "Remote",
            status: "Ongoing"
        },
        {
            title: "Graphic Design Volunteer",
            description: "Help bring impactful stories to life through visual design. Create  compelling graphics and materials for fundraising campaigns, social  media, and platform materials. This 3-month program offers hands-on  experience in nonprofit design while building your portfolio.",
            type: "Creative",
            time: "10hrs/week",
            location: "Remote",
            status: "Ongoing"
        },
        {
            title: "Social Media Management Intern",
            description: "Drive engagement and build community through compelling social media  content. Learn to create strategies that amplify our impact and connect  with donors and fundraisers. This 3-month program provides practical  experience in social media marketing for social good.",
            type: "Marketing",
            time: "10hrs/week",
            location: "Remote",
            status: "Ongoing"
        },
        {
            title: "Sales Development Volunteer",
            description: "Join our sales team to help organizations and fundraisers maximize their impact through our platform. Learn valuable relationship-building  skills while connecting worthy causes with the tools they need to  succeed. This 3-month program offers real sales experience in the social impact sector.",
            type: "Sales",
            time: "10hrs/week",
            location: "Remote",
            status: "Ongoing"
        },
    ];

    const ApplicaionProcess = [
        {
            number: '01',
            title: "Submit Application",
            content: "Complete the online application form with your resume and portfolio (if applicable)"
        },
        {
            number: '02',
            title: "Initial Interview",
            content: "Virtual meeting to discuss your interests, experience, and alignment with our mission"
        },
        {
            number: '03',
            title: "Team Meeting",
            content: "Meet your potential team and learn more about specific projects and responsibilities"
        },
        {
            number: '04',
            title: "Onboarding",
            content: "Welcome to the team! Complete orientation and begin your FundNest journey"
        }
    ];

  return (
    <>
        <Helmet>
            <title>Career | Fund Nest</title>
        </Helmet>
        <body className='font-sen'>
            {/* Hero Section */}
            <section className='pt-5 h-[23.875rem] md:h-[40vh] lg:h-[95vh] relative px-2'>
                <h1 className='text-center text-xl md:text-4xl font-semibold'>Join Us in Empowering Change Through Crowdfunding</h1>
                <p className='my-2 text-sm text-[rgb(95,95,117)] text-center'>Be a part of a dynamic team that's revolutionizing fundraising for non-profits and social enterprises worldwide.</p>
                <div className='bg-[#F5EFE0] w-[90%] mx-auto rounded-lg h-[30%] lg:h-[50%] mt-[5rem] md:mt-[9.375rem] relative '>
                    <img src={Image1} alt="" className='absolute h-[100px] md:h-[200px] lg:h-full lg:w-[40%] bottom-[5rem] flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 ' />
                    <div className='absolute bottom-[1rem] flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 '>
                        <button className='bg-[#00AEEF] text-white px-2 md:px-3 py-2 rounded-md text-sm'>View Open Positions</button>
                    </div>
                </div>
            </section>

            {/* Join Our Mission */}
            <section className='border-t-[1rem] border-[#00AEEF] py-4 space-y-11'>
                <h1 className='text-2xl md:text-5xl font-bold text-[#00AEEF] text-center'>JOIN OUR MISSION</h1>
                <p className='text-lg w-[90%] mx-auto'>Gain valuable experience while making a real difference in people's  lives. Our internship and volunteer programs offer hands-on learning  opportunities in a dynamic social impact environment.</p>
                <h1 className='text-3xl md:text-5xl font-bold text-[#00AEEF] text-center'>OUR VALUES</h1>
            </section>

            {/* Our Values */}
            <section className='bg-[#00AEEF] py-11'>
                <div className='w-[80%] mx-auto'>
                    <div className='mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3  mx-auto'>
                        {Values.map((Data , index) => (
                            <div key={index} className='bg-white rounded-lg p-4 shadow-md hover:-translate-y-3 hover:cursor-pointer transition-all ease-in-out duration-300'>
                                <div className='bg-[#00AEEF] text-white w-[50px] h-[50px] rounded-full'>
                                    <h4 className='text-3xl p-2 font-bold'>{Data.number}</h4>
                                </div>
                                <div className='mt-3 space-y-4'>
                                    <h1 className='text-xl font-semibold'>{Data.title}</h1>
                                    <p className='text-sm'>{Data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Talented People */}
            <section className='bg-[#F5EFE0] py-7'>
                <div className='w-[90%] mx-auto'>
                    <h1 className='text-4xl font-semibold text-center mt-5'>We're looking for talented people</h1>
                    <p className='text-sm text-[#5F5F75] text-center w-[80%] mx-auto mt-3'>We're building an easy, impactful platform to empower people worldwide to share their stories and rally support—and we'd love your help in making it a reality!</p>
                    <div className='w-[90%] mx-auto mt-6 rounded-md'>
                        <img src={image2} alt="" className='rounded-md h-[12.5rem] lg:h-[25rem] w-full object-cover' />
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className='bg-[#D9F3FD] py-6'>
                <div className='w-[80%] mx-auto mb-4'>
                    <h1 className='text-4xl font-semibold'>Open Positions</h1>
                    <p className='text-sm text-[#5F5F75] mt-2'>Come join the team!</p>
                </div>
                <div className='grid grid-cols-1 gap-3 my-3 w-[90%] md:w-[80%] mx-auto'>
                    {OpenPosition.map((Data , index) => (
                        <div key={index} className='bg-white rounded-md shadow-md p-4'>
                            <h1 className='text-2xl font-semibold my-3'>{Data.title}</h1>
                            <div className='md:flex mb-3'>
                                <div className='basis-[70%]'>
                                    <p className='text-sm text-[#5F5F75]'>{Data.description}</p>
                                </div>
                                <div className='basis-[30%] flex justify-center mt-4 md:mt-0'>
                                    <div className='space-y-2'>
                                        <button onClick={toggleModal} className='text-white bg-[#00AEEF] px-4 py-2 text-base rounded-lg hover:bg-black transition-colors duration-500 ease-in-out'>Apply Now</button>
                                        <ApplicationForm isOpen={isModalOpen} onClose={toggleModal} />
                                        <p className='text-center text-sm text-[#5F5F75]'>{Data.status}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='my-2 flex gap-4 text-[#5F5F75] text-sm'>
                                <h4>{Data.type}</h4>
                                <h4>{Data.time}</h4>
                                <h4>{Data.location}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[90%] md:w-[80%] mx-auto bg-[#FFFCF7] p-4 shadow-md rounded-md mt-4 md:flex'>
                    <div className='basis-[60%] space-y-6'>
                        <h1 className='text-3xl font-bold'>Program Benefits</h1>
                        <div>
                            <ol className='list-disc ml-3 text-sm'>
                                <li>Certificate of Completion</li>
                                <li>Recommendation Letter</li>
                                <li>3-Month Duration</li>
                                <li>Remote Work</li>
                                <li>Flexible Schedule</li>
                                <li>Mentorship</li>
                            </ol>
                        </div>
                        <div>
                            <button className='text-white bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                                Join now
                                <span>
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='basis-[40%] mt-4 md:mt-0'>
                        <img src={image3} alt="" className='max-w-[15rem] md:max-w-[17rem]' />
                    </div>
                </div>
            </section>

             {/* Application Process */}
             <section className='bg-[#00AEEF] py-5 mb-3'>
                <div className='w-[90%] mx-auto'>
                    <h1 className='text-white text-center text-3xl md:text-5xl font-bold '>Application Process</h1>
                    <div className='mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-3  mx-auto'>
                        {ApplicaionProcess.map((Data , index) => (
                            <div key={index} className='bg-white rounded-lg p-4 shadow-md hover:-translate-y-3 hover:cursor-pointer transition-all ease-in-out duration-300'>
                                <div className='bg-[#00AEEF] text-white w-[50px] h-[50px] rounded-full'>
                                    <h4 className='text-3xl p-2 font-bold'>{Data.number}</h4>
                                </div>
                                <div className='mt-3 space-y-4'>
                                    <h1 className='text-xl font-semibold'>{Data.title}</h1>
                                    <p className='text-sm'>{Data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </body>
    </>
  );
}

export default Career;