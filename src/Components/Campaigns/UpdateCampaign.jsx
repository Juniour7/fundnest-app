import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { getCampaignById, updateCampaign } from "../../services/CampaignService";

function UpdateCampaign() {
    const { id } = useParams();
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

    useEffect(() => {
        async function fetchCampaign() {
            try {
                const campaign = await getCampaignById(id);
                setCampaignData(campaign);
            } catch (error) {
                console.error('Error fetching campaign:', error);
            }
        }
        fetchCampaign();
    }, [id]);

    const handleChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            const updatedCampaign = await updateCampaign(id, campaignData, token);
    
        } catch (error) {
            console.error('Error updating campaign:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update Campaign</h1>
            <input type="text" name="email" value={campaignData.email} onChange={handleChange} />
            <input type="text" name="fundraising_type" value={campaignData.fundraising_type} onChange={handleChange} />
            <input type="number" name="target_amount" value={campaignData.target_amount} onChange={handleChange} />
            <input type="number" name="current_amount" value={campaignData.current_amount} onChange={handleChange} />
            <input type="number" name="duration" value={campaignData.duration} onChange={handleChange} />
            <input type="number" name="country" value={campaignData.country} onChange={handleChange} />
            <input type="text" name="campaign_name" value={campaignData.campaign_name} onChange={handleChange} />
            <input type="text" name="description" value={campaignData.description} onChange={handleChange} />
            <input type="text" name="poster_image_url" value={campaignData.poster_image_url} onChange={handleChange} />
            <button type="submit">Update Campaign</button>
        </form>
    );
}

export default UpdateCampaign;
