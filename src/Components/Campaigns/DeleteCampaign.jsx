import React from "react";
import api from "../../services/api";
import { deleteCampaign } from "../../services/CampaignService";

function DeleteCampaign({ campaignId }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            await deleteCampaign(campaignId, token);
       
        } catch (error) {
            console.log('Error deleting campaign:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Delete Campaign</h1>
            <p>Campaign ID: {campaignId}</p> 
            <button type="submit">Delete Campaign</button>
        </form>
    );
}

export default DeleteCampaign;
