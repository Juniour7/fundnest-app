import React, { useState } from "react";
import api from "../../services/api";
import { createCampaign } from "../../services/CampaignService";

function CreateCampaign() {
    const [campaignData, setCampaignData] = useState({
        email: '',
        fundraising_type: '',
        target_amount: '',
        current_amount: '',
        duration: '',
        country: '', 
        campaign_name: '',
        description: '',
        poster_image_url: null, 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampaignData({ ...campaignData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            const newCampaign = await createCampaign(campaignData, token);
        
        } catch (error) {
            console.error('Error creating campaign:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Campaign</h1>
            <input type="text" name="email" placeholder="Campaign Name" onChange={handleChange} />
            <input type="text" name="fundraising_type" placeholder="Category" onChange={handleChange} />
            <input type="text" name="target_amount" placeholder="Target Amount" onChange={handleChange} />
            <input type="text" name="current_amount" placeholder="Current Amount" onChange={handleChange} />
            <input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} />
            <input type="text" name="campaign_name" placeholder="Fundraiser Name" onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} />
            <input type="text" name="poster_image_url" placeholder="Poster Image URL" onChange={handleChange} />
            <button type="submit">Create Campaign</button>
        </form>
    );
}

export default CreateCampaign;
