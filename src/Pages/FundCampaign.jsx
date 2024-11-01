import React, { useCallback, useEffect, useRef, useState } from 'react';
import {  useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

//components
import { getCampaigns } from '../services/CampaignService';
import ProgressBar from '../Components/Progress Bar/ProgressBar';
import SearchBar from '../Components/CampaignComponents/SearchBar';
import CategorySelect from '../Components/CampaignComponents/CategorySelect';

//icon


const FundCampaign = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const intervalRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
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
  }, []);

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



    const filteredCampaigns = selectedCategory === 'All'
        ? campaigns
        : campaigns.filter(campaign => campaign.campaign_fundraising_type === selectedCategory);

    const { hash } = useLocation();

    useEffect(() => {
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
        <Helmet>
          <title>Campaigns | Fund Nest</title>
        </Helmet>
        <body className='font-sen pt-11 w-[90%] lg:w-[85%] mx-auto'>
          {/* Campaigns' Search */}
          <section className='my-6'>
            <h1 className='text-3xl font-semibold'>Campaigns</h1>
            <SearchBar />
            <CategorySelect />
          </section>

          {/* Campaigns */}
          <div className='w-[90%] md:w-[98%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[35px]'>
            {filteredCampaigns.length === 0 && <p>No campaigns available.</p>}
            {filteredCampaigns.map((campaign) => (
                <div key={campaign.id}  onClick={() => handleViewInformation(campaign)} className='bg-white relative shadow-md font-sen transition-all duration-300 ease-linear hover:shadow-lg rounded-md h-[550px]'>
                <div className="w-full mx-auto h-[12.5rem] md:h-[13.75rem] overflow-hidden rounded-tr-md rounded-tl-md">
                  <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full rounded-tr-md rounded-tl-md object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer' />
                </div>
                <div className="p-2 ">
                  <p className='text-sm text-[#5F5F75]'>{campaign.campaign_fundraising_type}</p>
                  <div className='h-[4.938rem]'>
                    <h1 className='text-lg font-semibold mt-[0.4rem] '>{campaign.campaign_name}</h1>
                  </div>
                  <div className='h-[70px] overflow-hidden mt-[0.625rem] w-full'>
                    <p className="font-light text-sm text-[#5F5F75] overflow-hidden text-ellipsis line-clamp-3">
                        {campaign.campaign_description}
                    </p>
                  </div>
                  <div className='mt-[1.25rem] '>
                    <p className="mt-2 text-sm text-gray-700">${campaign.current_amount} raised of ${campaign.target_amount}</p>
                    <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <button
                        className="text-white absolute bottom-4 bg-[#4FC0E8] text-xl font-medium w-[50%] py-1 border border-[#4FC0E8] rounded-lg mt-[1.25rem] hover:bg-black hover:text-white transition"
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
        </body>
    </>
  )
}

export default FundCampaign;