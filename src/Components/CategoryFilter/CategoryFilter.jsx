
import ProgressBar from "../Progress Bar/ProgressBar";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCampaigns } from "../../services/CampaignService";

const CategoryFilter = () => {
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
                console.log(campaignsWithFullImageURLs); // Debugging
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

    const handleCampaignClick = () => {
        navigate("/campaign");
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closemenu = () => {
        setIsOpen(false);
    };

    return (
        <>
        <Helmet>
            <title>Our Campaigns | Fund Nest</title>
            <meta name="description" content="Our Campaigns" />
        </Helmet>
        <div id='learning' className="  bg-opacity-50 ">
        <div className="my-[30px] justify-center pt-[20px] hidden lg:flex font-semibold font-Main">
            {['All', 'Health', 'Education', 'Religious', 'Floods', 'Wedding', 'Funeral', 'Civil Society', 'Business', 'Other'].map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 mr-2 ${selectedCategory === category ? 'border-b-2 border-[#4FC0E8] text-black' : 'border-b-0 transition-all duration-2000'}`}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
        <section className=''>
            <div className='lg:hidden text-3xl flex flex-col items-end p-4'>
                <FaBarsStaggered onClick={toggleMenu}/>
            </div>
            <div className='relative'>
                <div
                    className={`absolute top-0 right-5 w-[45%] bg-white text-black divide-y z-50 text-lg shadow-lg transition-all duration-500 overflow-hidden origin-top-right ${isOpen ? 'scale-100' : 'scale-0'}`}
                >
                    <ul className='divide-y'>
                        {['All', 'Health', 'Education', 'Religious', 'Wedding', 'Funeral', 'Civil Society', 'Business', 'Other'].map(category => (
                            <li key={category} onClick={closemenu}>
                                <button
                                    className={`w-full py-1 ${selectedCategory === category ? 'bg-gray-400 border-[#4FC0E8] text-black' : 'border-b-0 transition-all duration-2000'}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        <div className='w-[90%] md:w-[98%] relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-[35px]'>
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
        </div>
        <ScrollToTop />
        </>
    );
};

export default CategoryFilter;
