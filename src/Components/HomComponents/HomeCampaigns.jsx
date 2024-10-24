import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

//Icons
import { GoChevronRight } from "react-icons/go";

import { getCampaigns } from '../../services/CampaignService';

//Components
import ProgressBar from '../Progress Bar/ProgressBar';

const HomeCampaigns = () => {
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
      <section className='font-sen'>
        <div id='campaign' className="w-[98%] mx-auto">
          <div className='my-7 '>
            <h1 className='text-[#00AEEF] text-3xl font-semibold'>You can help lots of people by donating little</h1>
            <p className='my-3 text-base'>These campaigns need your help to achieve victory.</p>
            <button className='bg-[#00AEEF] text-white px-4 py-2 text-lg rounded-lg'>Popular Campaigns</button>
          </div>

          <div className='relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-[65px]'>
            {/* Most Recent Campaigns Created */}
            {campaigns
              .sort((a,b) => new Date(b.campaign_created_at) - new Date(a.campaign_created_at))
              .slice(0, 8)
              .map((campaign) => (
              <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-white  shadow-md font-sen transition-all duration-300 ease-linear hover:shadow-lg rounded-md'>
                <div className="w-full mx-auto h-[200px] md:h-[220px] overflow-hidden rounded-tr-md rounded-tl-md">
                  <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full rounded-tr-md rounded-tl-md object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer' />
                </div>
                <div className="p-2">
                  <p className='text-sm text-[#5F5F75]'>{campaign.campaign_fundraising_type}</p>
                  <div className=''>
                    <h1 className='text-lg font-semibold mt-[0.4rem]'>{campaign.campaign_name}</h1>
                  </div>
                  <div className='h-[70px] overflow-hidden mt-[10px] w-full'>
                    <p className="font-light text-sm text-[#5F5F75] overflow-hidden text-ellipsis line-clamp-3">
                        {campaign.campaign_description}
                    </p>
                  </div>
                  <div className='mt-[20px]'>
                  <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                    <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <button
                        className="text-white  bg-[#4FC0E8] text-xl font-medium w-[50%] py-1 border border-[#4FC0E8] rounded-lg mt-[20px] hover:bg-black hover:text-white transition"
                        onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                        disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
                    >
                        {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
                    </button> 
                  </div>            
                </div>
              </div>
            ))}
        </div>
      </div>

        {/* Amount Remainig */}
      <div className="w-[98%] mx-auto">
        <button className='bg-[#00AEEF] text-white px-4 py-2 text-xl rounded-lg my-5'>Latest Campaigns</button>
        <div className=' relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-[75px]'>
          {campaigns.slice().sort((a, b) => {
              const percentageA = (a.current_amount / a.target_amount) * 100;
              const percentageB = (b.current_amount / b.target_amount) * 100;
              return percentageB - percentageA;
            }).slice(0, 8).map((campaign) => (
                <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-white  shadow-md font-sen transition-all duration-300 ease-linear hover:shadow-lg rounded-md'>
                <div className="w-full mx-auto h-[200px] md:h-[220px] overflow-hidden rounded-tr-md rounded-tl-md">
                  <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full rounded-tr-md rounded-tl-md object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer' />
                </div>
                <div className="p-2">
                  <p className='text-sm text-[#5F5F75]'>{campaign.campaign_fundraising_type}</p>
                  <div className=''>
                    <h1 className='text-lg font-semibold mt-[0.4rem]'>{campaign.campaign_name}</h1>
                  </div>
                  <div className='h-[70px] overflow-hidden mt-[10px] w-full'>
                    <p className="font-light text-sm text-[#5F5F75] overflow-hidden text-ellipsis line-clamp-3">
                        {campaign.campaign_description}
                    </p>
                  </div>
                  <div className='mt-[20px]'>
                  <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                    <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <button
                        className="text-white  bg-[#4FC0E8] text-xl font-medium w-[50%] py-1 border border-[#4FC0E8] rounded-lg mt-[20px] hover:bg-black hover:text-white transition"
                        onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                        disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
                    >
                        {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
                    </button> 
                  </div>            
                </div>
              </div>
          ))}
          <div className='absolute bottom-4 right-0'>
            <button onClick={handleCampaignClick} className='border bg-[#4FC0E8] px-3 py-2  rounded-md text-white hover:bg-black flex justify-center items-center gap-1 transition-colors transform duration-300 ease-in-out'>Discover More Campaigns</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomeCampaigns;
