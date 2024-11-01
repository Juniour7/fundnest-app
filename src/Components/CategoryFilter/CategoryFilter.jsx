import ProgressBar from "../Progress Bar/ProgressBar";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";
import {  FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronForwardSharp, IoSearch } from "react-icons/io5";
import { getCampaigns } from "../../services/CampaignService";

const CategoryFilter = () => {
    const navigate = useNavigate();
    const [campaigns, setCampaigns] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("Newest"); // State to manage date sorting order
    const intervalRef = useRef(null);

    const calculateRemainingDays = (endDate) => {
        const today = new Date();
        const end = new Date(endDate);
        return Math.ceil((end - today) / (1000 * 3600 * 24));
    };

    useEffect(() => {
        async function fetchCampaigns() {
            try {
                const data = await getCampaigns();
                const campaignsWithDetails = data.map((campaign) => ({
                    ...campaign,
                    poster_image_url: `https://backend.iraady.com${campaign.poster_image_url}`,
                    remaining_days: calculateRemainingDays(campaign.end_date),
                }));
                setCampaigns(campaignsWithDetails);
            } catch (error) {
                console.error("Error fetching campaigns:", error);
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
        intervalRef.current = requestAnimationFrame(updateCurrent);
        return () => cancelAnimationFrame(intervalRef.current);
    }, [updateCurrent]);

    const handleDonateClick = () => navigate("/donation-form");
    const handleViewInformation = (campaign) => navigate(`/donation-desc/${campaign.campaign_id}`, { state: { campaign } });

    const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
    const handleSortOrder = (order) => setSortOrder(order); // Handle date sorting

    const filteredCampaigns = campaigns
        .filter((campaign) => {
            const matchesCategory = selectedCategory === "All" || campaign.campaign_fundraising_type === selectedCategory;
            const matchesSearch = campaign.campaign_name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            const dateA = new Date(a.date_created);
            const dateB = new Date(b.date_created);
            return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
        });

    const categories = [
        "All",
        "Health",
        "Education",
        "Religious",
        "Floods",
        "Wedding",
        "Funeral",
        "Civil Society",
        "Business",
        "Other",
    ];

    return (
        <>
            <Helmet>
                <title>Campaigns | Fund Nest</title>
                <meta name="description" content="Our Campaigns" />
            </Helmet>
            <div id="learning" className="font-sen pt-11 w-[90%] lg:w-[85%] mx-auto">
                <section className="my-6">
                    <h1 className="text-3xl font-semibold">Campaigns</h1>
                    <section className="my-3">
                        <div className="border rounded-lg flex justify-between items-center px-2">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Type name of the campaign"
                                className="w-full py-2 px-2 rounded-lg outline-none"
                            />
                            <IoSearch className="text-2xl" />
                        </div>
                    </section>

                    {/* Category Selection Dropdown */}
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none transition duration-200"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </section>

                {/* Breadcrumb and Campaign List */}
                <section className="flex justify-between mt-7 mb-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <FaHome className='text-sm' />
                        </Link>
                        <IoChevronForwardSharp className='text-sm text-gray-600' />
                        <h3 className='font-semibold text-center text-sm'>Campaigns</h3>
                    </div>
                </section>

                {/* Campaign Display Grid */}
                <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[35px]">
                    {filteredCampaigns.length === 0 && <p>No campaigns available.</p>}
                    {filteredCampaigns.map((campaign) => (
                        <div key={campaign.id} onClick={() => handleViewInformation(campaign)} className="bg-white relative shadow-md font-sen transition-all duration-300 ease-linear hover:shadow-lg rounded-md h-[550px]">
                            <div className="w-full h-[12.5rem] md:h-[13.75rem] overflow-hidden rounded-tr-md rounded-tl-md">
                                <img src={campaign.poster_image_url} alt={campaign.campaign_name} className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer" />
                            </div>
                            <div className="p-2">
                                <p className="text-sm text-[#5F5F75]">{campaign.campaign_fundraising_type}</p>
                                <h1 className="text-lg font-semibold mt-[0.4rem]">{campaign.campaign_name}</h1>
                                <p className="font-light text-sm text-[#5F5F75] mt-[0.625rem] line-clamp-3">{campaign.campaign_description}</p>
                                <p className="mt-2 text-sm text-gray-700">
                                    ${campaign.current_amount} raised of ${campaign.target_amount}
                                </p>
                                <ProgressBar amountRaised={campaign.current_amount} targetAmount={campaign.target_amount} />
                                <button
                                    className="text-white absolute bottom-4 bg-[#4FC0E8] text-xl font-medium w-[50%] py-1 border border-[#4FC0E8] rounded-lg mt-[1.25rem] hover:bg-black hover:text-white transition"
                                    onClick={campaign.current_amount >= campaign.target_amount ? null : handleDonateClick}
                                    disabled={campaign.current_amount >= campaign.target_amount || campaign.remaining_days <= 0}
                                >
                                    {campaign.current_amount >= campaign.target_amount || campaign.remaining_days <= 0 ? "Completed" : "Donate"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryFilter;
