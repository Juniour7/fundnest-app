import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

//Icons
import { GoChevronRight } from "react-icons/go";

import { getCampaigns } from '../services/CampaignService';

//Components
import ProgressBar from './Progress Bar/ProgressBar';


const Learning = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const calculateRemainingDays = (endDate) => {
    const today = new Date();
    const end = new Date(endDate); 
    const differenceInTime = end.getTime() - today.getTime(); 
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); 
    return differenceInDays;
  };

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const data = await getCampaigns();
        const campaignsWithFullImageURLs = data.map(campaign => ({
          ...campaign,
          poster_image_url: `https://backend.iraady.com${campaign.poster_image_url}`,
          remaining_days: calculateRemainingDays(campaign.end_date)
        }));
        setCampaigns(campaignsWithFullImageURLs);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    }
    fetchCampaigns();
  }, [campaigns]);

  const updateCurrent = useCallback(() => {
    setCurrent((prevCurrent) =>
      prevCurrent === campaigns.length - 1 ? 0 : prevCurrent + 1
    );
    intervalRef.current = requestAnimationFrame(updateCurrent);
  }, [campaigns.length]);

  useEffect(() => {
    function updateCurrent() {
      setCurrent((prevCurrent) =>
        prevCurrent === campaigns.length - 1 ? 0 : prevCurrent + 1
      );
      intervalRef.current = requestAnimationFrame(updateCurrent);
    }

    intervalRef.current = requestAnimationFrame(updateCurrent);

    return () => cancelAnimationFrame(intervalRef.current);
  }, [campaigns.length]);

  const handleDonateClick = () => {
    navigate('/donation-form');

  };

  const handleCampaignClick = () => {
    navigate("/campaign")
  };


  const { hash } = useLocation();
    React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  const handleViewInformation = (campaign) => {
    navigate(`/donation-desc/${campaign.campaign_id}`, { state: { campaign } });
  };

  return (
    <>
      <section className='bg-[#F5F8FD] bg-opacity-50'>
        <div id='campaign' className="mt-[30px] md:mt-[70px] ">
          <div className="w-[90%] md:w-[80%] mx-auto mb-[20px] text-center flex flex-col items-center justify-center">
            <h1 className="text-[#4FC0E8] font-semibold text-2xl md:text-5xl mb-[20px] mt-[25px]">Available Campaigns</h1>
          </div>

          <div className='w-[90%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[65px]'>
            {/* Most Recent Campaigns Created */}
            {campaigns
              .sort((a,b) => new Date(b.campaign_created_at) - new Date(a.campaign_created_at))
              .slice(0, 6)
              .map((campaign) => (
              <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-[#F9F7F6] shadow-md  transition-all duration-300 ease-linear hover:shadow-lg '>
                <div className="w-full mx-auto h-[200px] md:h-[250px] relative overflow-hidden">
                  <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer' />
                  <p className='my-auto absolute bottom-3 right-3 text-sm px-2 py-1 bg-[#4FC0E8] rounded-md text-white'>{campaign.campaign_fundraising_type}</p>
                </div>
                <div className="p-2">
                  <div className=''>
                    <h1 className='text-xl font-semibold mt-[0.4rem]'>{campaign.campaign_name}</h1>
                  </div>
                  <div className='h-[70px] overflow-hidden mt-[10px] w-full'>
                    <p className='text-ellipsis font-light text-md'>{campaign.campaign_description}</p>
                  </div>
                  <div className='mt-[20px]'>
                    <p className='text-md font-semibold mb-[5px]'>Target: ${campaign.target_amount}</p>
                    <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                    <p className='text-md font-semibold '>Amount Raised: ${campaign.current_amount}</p>
                    <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                  </div>
                  <di className="flex flex-col justify-center items-center text-center">
                  <button
                    className="text-white bg-[#4FC0E8] text-xl font-medium w-[98%] py-1 border border-[#4FC0E8] rounded-md mt-[20px] hover:bg-black hover:text-white transition"
                    onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                    disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
                  >
                    {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
                  </button> 
                  </di>            
                </div>
              </div>
            ))}
            <div className='absolute bottom-0 right-0'>
              <button onClick={handleCampaignClick} className='border bg-[#4FC0E8] px-3 py-2  rounded-md text-white hover:bg-black flex justify-center items-center gap-1 transition-colors transform duration-300 ease-in-out'>Discover More Campaigns <span className='text-lg'> <GoChevronRight /> </span></button>
            </div>
        </div>
      </div>

      <div className="">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[#0d0f0f] font-semibold text-2xl md:text-4xl my-[20px]">Popular Causes</h1>
        </div>

        {/* Amount Remainig */}
        <div className='w-[90%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[75px]'>
          {campaigns.slice().sort((a, b) => {
              const percentageA = (a.current_amount / a.target_amount) * 100;
              const percentageB = (b.current_amount / b.target_amount) * 100;
              return percentageB - percentageA;
            }).slice(0, 6).map((campaign) => (
            <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-[#F9F7F6] shadow-md  transition-all duration-300 ease-linear hover:shadow-lg'>
              <div className="w-full mx-auto h-[200px] md:h-[250px] relative overflow-hidden">
                <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer' />
                <p className='my-auto absolute bottom-3 right-3 text-sm px-2 py-1 bg-[#4FC0E8] rounded-md text-white'>{campaign.campaign_fundraising_type}</p>
              </div>
              <div className=" p-2">
                <div className=''>
                  <h1 className='text-xl font-semibold mt-[0.4rem]'>{campaign.campaign_name}</h1>
                </div>
                <div className='h-[70px] overflow-hidden mt-[10px] w-full'>
                  <p className='text-ellipsis font-light text-md'>{campaign.campaign_description}</p>
                </div>
                <div className='mt-[20px]'>
                  <p className='text-md font-semibold mb-[5px]'>Target: ${campaign.target_amount}</p>
                  <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                  <p className='text-md font-semibold '>Amount Raised: ${campaign.current_amount}</p>
                  <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                </div>
                <di className="flex flex-col justify-center items-center text-center">
                <button
                    className="text-white bg-[#4FC0E8] text-xl font-medium w-[98%] py-1 border border-[#4FC0E8] rounded-md mt-[20px] hover:bg-black hover:text-white transition"
                    onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                    disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
                  >
                    {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
                  </button>
                </di>            
              </div>
            </div>
          ))}
          <div className='absolute bottom-4 right-0'>
            <button onClick={handleCampaignClick} className='border bg-[#4FC0E8] px-3 py-2  rounded-md text-white hover:bg-black flex justify-center items-center gap-1 transition-colors transform duration-300 ease-in-out'>Discover More Popular Campaigns <span className='text-lg'> <GoChevronRight /> </span></button>
          </div>
        </div>
      </div>

      {/* Remainig Days */}
      {/* <div className="">
        <div className="w-[90%] mx-auto">
          <h1 className="text-[#0d0f0f] font-semibold text-2xl md:text-4xl my-[20px]">Featured Campaigns</h1>
        </div>

        <div className='w-[90%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[75px]'>
          {campaigns
            .sort((a, b) => Number(a.campaign_id) - Number(b.campaign_id))
            .slice(0,3)
            .map((campaign) => (
            <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-[#F9F7F6] shadow-md  transition-all duration-300 ease-linear hover:shadow-lg hover:scale-[103%]'>
              <div className="w-full mx-auto h-[200px] md:h-[250px]">
                <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full object-cover' />
              </div>
              <div className="text-left p-2">
                <div className='flex justify-between'>
                  <h1 className='text-xl font-semibold mt-[10px]'>{campaign.campaign_name}</h1>
                  <p className='my-auto text-sm px-2 py-1 bg-[#4FC0E8] rounded-md text-white'>{campaign.campaign_fundraising_type}</p>
                </div>
                <div className='h-[70px] overflow-hidden mt-[10px] w-full'>
                  <p className='text-ellipsis font-light text-md'>{campaign.campaign_description}</p>
                </div>
                <div className='mt-[20px]'>
                  <p className='text-md font-semibold mb-[5px]'>Target: ${campaign.target_amount}</p>
                  <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                  <p className='text-md font-semibold '>Amount Raised: ${campaign.current_amount}</p>
                  <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                </div>
                <di className="flex flex-col justify-center items-center text-center">
                  <button
                    className="text-[#4FC0E8] text-xl font-medium w-[98%] py-1 border border-[#4FC0E8] rounded-md mt-[20px] hover:bg-[#4FC0E8] hover:text-white transition"
                    onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                    disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
                  >
                    {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
                  </button>   
                </di>            
              </div>
            </div>
          ))}
          <div className='absolute bottom-4 right-0'>
            <button onClick={handleCampaignClick} className='border border-[#4FC0E8] px-3 py-2 bg-transparent rounded-md text-[#4FC0E8] hover:bg-black flex justify-center items-center gap-1'>Discover More Campaigns <span className='text-lg'> <GoChevronRight /> </span></button>
          </div>
        </div>
        
      </div> */}
    </section>
    </>
  );
};

export default Learning;
