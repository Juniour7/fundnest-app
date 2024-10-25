import React, { useEffect, useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getCampaignDetails } from "../../services/CampaignService";



//components
import ProgressBar from "../Progress Bar/ProgressBar";

const DonationDesc = () => {
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    async function fetchCampaignDetails() {
      try {
        if (location.state && location.state.campaign) {
          setCampaign(location.state.campaign);
        } else {
          // Fetch campaign details from the API if not available in state
          const fetchedCampaign = await getCampaignDetails(campaignId);
          setCampaign(fetchedCampaign);
        }
      } catch (error) {
        console.log('Error fetching campaign details:', error);
      }
    }
    fetchCampaignDetails();
  }, [location.state, campaignId]);


  const handleDonateClick = () => {
    navigate(`/donation-form/${campaign.campaign_id}`, { state: { campaign } });
  };

  if (!campaign) {
    return <div>Loading...</div>;
  };

  return (
    <>
      <Helmet>
        <title>{campaign.campaign_name} | Fund Nest</title>
      </Helmet>
      <section className='py-[30px] '>
      <section className='w-[90%] mx-auto'>
        <div className='flex flex-wrap gap-3 justify-center'>
          <div className='lg:w-[60%]'>
            <h1 className='text-2xl md:text-4xl font-semibold text-[#4FC0E8]'>{campaign.campaign_name}</h1>
            <div className='w-[95%] h-[200px] md:h-[400px] mt-[15px] relative'>
              <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full object-cover' />
              <p className='my-auto absolute bottom-3 shadow-inner right-3 text-sm px-2 py-1 bg-[#4FC0E8] rounded-md text-white'>{campaign.campaign_fundraising_type}</p>
            </div>
            <div className='mt-[10px] w-[90%]'>
              <h1 className='text-xl font-semibold text-[#4FC0E8] my-[15px]'>Campaign Description</h1>
              <p className='mb-[5px]'>{campaign.campaign_description}</p>
            </div>
          </div>
          <div className='w-full lg:w-[35%] pt-[50px]'>
            <div className='my-[10px] bg-[#F7F7F7] w-full rounded-md py-4 px-2'>
              <h3 className='text-lf font-medium mb-2'>{campaign.current_amount} Raised of {campaign.target_amount}</h3>
              <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
              <h4 className='text-sm font-light mt-2 text-right'>
                {campaign.campaign_duration > 0
                  ? campaign.campaign_duration > 30 
                  ? `${Math.floor(campaign.campaign_duration / 30)} ${Math.floor(campaign.campaign_duration / 30) === 1 ? 'Month' : 'Months'} To Go`
                  : `${campaign.campaign_duration} Days To Go`
                  : campaign.campaign_duration === 0
                  ? 'Campaign Completed Today'
                  : Math.abs(campaign.campaign_duration) > 30
                  ? `Completed ${Math.floor(Math.abs(campaign.campaign_duration) / 30)} ${Math.floor(Math.abs(campaign.campaign_duration) / 30) === 1 ? 'Month' : 'Months'} Ago`
                  : `Completed ${Math.abs(campaign.campaign_duration)} ${Math.abs(campaign.campaign_duration) === 1 ? 'Day' : 'Days'} Ago`
                } 
              </h4>
            </div>
            <div>
              <button
                className="text-white bg-[#4FC0E8] text-xl font-medium w-[98%] py-1 border border-[#4FC0E8] rounded-md mt-[20px] hover:bg-black hover:text-white transition"
                onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                disabled={(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0)}
              >
                {(campaign.current_amount >= campaign.target_amount) || (campaign.remaining_days <= 0) ? 'Completed' : 'Donate'}
              </button>
            </div>
          </div>
        </div>
      </section>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DonationDesc;