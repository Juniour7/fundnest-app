import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../../services/CampaignService';

const CategorySelect = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [campaigns, setCampaigns] = useState([]);

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

    const handleCategoryChange = (event) => {
        const category = category; // Get the value from the event
        setSelectedCategory(category); // Update the selected category state
        console.log('Selected category:', category);
        
        // You may want to filter campaigns based on the selected category here
        // const filteredCampaigns = category === 'All' ? campaigns : campaigns.filter(campaign => campaign.category === category);
        // setCampaigns(filteredCampaigns);
    };

    const categories = [
        'All',
        'Health',
        'Education',
        'Religious',
        'Floods',
        'Wedding',
        'Funeral',
        'Civil Society',
        'Business',
        'Other'
    ];

    return (
        <section>
            <select
                value={selectedCategory}
                onChange={handleCategoryChange} // Correctly using onChange event
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#4FC0E8] transition duration-200"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default CategorySelect;
