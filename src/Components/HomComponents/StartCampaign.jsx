import React from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { FaFeather } from "react-icons/fa";


//images 
import Image from '../../assets/slideshow/Frame.png';

const StartCampaign = () => {
    const navigate = useNavigate();

    const handleStartCampaignClick = () => {
        navigate('/fundraising-form');
    };

  return (
    <>
        <section className='bg-[#00AEEF] py-9  font-sen'>
            <div className='bg-[#EBF0EF] rounded-md py-4 px-7 w-[80%] mx-auto md:flex justify-between '>
                <div className='relative'>
                    <h1 className='text-[#00AEEF] text-xl font-semibold'>Start one today!</h1>
                    <p className='text-[#667672] text-base mt-4 md:w-[50%]'>People everywhere are empowered to start campaigns, mobilize supporters, and work with Decision Makers to drive solutions.</p>
                    <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] hidden absolute bottom-0 text-white rounded-lg py-2 px-3 text-lg md:flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                        <span className='my-auto text-xl'>
                            <FaFeather />
                        </span>
                        Start Campaign
                    </button>
                </div>
                <div className='max-w-[20rem]'>
                    <img src={Image} alt="" className='w-full h-full' />
                </div>
                    <button onClick={handleStartCampaignClick} className='bg-[#00AEEF] mt-3 md:hidden bottom-0 text-white rounded-lg py-2 px-3 text-lg flex gap-2 shadow-md  hover:bg-black duration-300 ease-in-out transition-colors'>
                        <span className='my-auto text-xl'>
                            <FaFeather />
                        </span>
                        Start Campaign
                    </button>
            </div>
        </section>
    </>
  )
}

export default StartCampaign;