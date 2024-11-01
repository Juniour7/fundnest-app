import React, { useEffect, useState } from 'react';


//components
import { getCampaigns } from '../../services/CampaignService';

//icons
import { IoSearch } from "react-icons/io5";


const SearchBar = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

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
                setFilteredCampaigns(campaignsWithFullImageURLs); // Initialize with all campaigns
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        }
        fetchCampaigns();
    }, []);

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        const searchQuery = searchTerm.toLowerCase();

        // Filter campaigns based on the search term
        const filtered = campaigns.filter(campaign =>
            campaign.title.toLowerCase().includes(searchQuery)
        );

        setFilteredCampaigns(filtered); // Update the filtered campaigns
    };
  return (
    <>
        <section className='my-3'>
            <form onSubmit={handleSearch}>
                <div className='border rounded-lg flex justify-between items-center px-2'>
                    <input 
                        type="text" 
                        required
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Type name of the campaign'
                        className='w-full py-2 px-2 rounded-lg  outline-none'
                    />
                    <button type='submit' className='text-2xl'>
                        <IoSearch />
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default SearchBar;