import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../../services/CampaignService';
import api from '../../services/api';

function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        async function fetchCampaigns() {
            try {
                const token = api.getToken(); 
                const data = await getCampaigns(token);
                setCampaigns(data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        }
        fetchCampaigns();
    }, []);

    return (
        <div>
            <h1>Campaign List</h1>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign.campaign_id}>
                         <p>Fundraiser Type: {campaign.fundraising_type}</p>
                         <p>Target Amount: {campaign.target_amount}</p>
                         <p>Current Amount: {campaign.current_amount}</p>
                         <p>Duration: {campaign.duration}</p>
                         <p>Country: {campaign.country}</p>
                         <p>Fundraiser Name: {campaign. campaign_name}</p>
                         <p>Description: {campaign.description}</p>
                         <p>Poster Image URL: {campaign.poster_image_url}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CampaignList;
