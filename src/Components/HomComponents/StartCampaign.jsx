import React from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { FaFeather } from "react-icons/fa";


//images 
import Image from '../../assets/slideshow/Frame1.png';


const StartCampaign = () => {
    const navigate = useNavigate();

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

  return (
    <>
        <section className='bg-[#00AEEF] py-9  font-sen'>
            <div className='bg-[#EBF0EF] rounded-md py-4 px-7 w-[90%] md:w-[80%] mx-auto md:flex justify-center  '>
                <div className='relative basis-[]'>
                    <h1 className='text-[#00AEEF] text-xl font-semibold'>Ready to Make Your Impact?</h1>
                    <p className='text-[#667672] text-base mt-4 mb-6 md:w-[65%]'>Join changemakers worldwide who are launching impactful campaigns, mobilizing passionate supporters, and creating lasting solutions. Our platform connects you with decision-makers and donors ready to support your cause.</p>
                    <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] hidden absolute bottom-0 text-white rounded-lg py-2 px-3 text-lg md:flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                        <span className='my-auto text-xl'>
                            <FaFeather />
                        </span>
                        Launch Your Campaign
                    </button>
                </div>
                <div className='md:w-[60rem] md:h-[20rem] '>
                    <img src={Image} alt="" className='w-full h-full' />
                </div>
                <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] mt-3 md:hidden bottom-0 text-white rounded-lg py-2 px-3 text-lg flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                    <span className='my-auto text-xl'>
                        <FaFeather />
                    </span>
                    Launch Your Campaign
                </button>
            </div>
        </section>
    </>
  )
}

export default StartCampaign;