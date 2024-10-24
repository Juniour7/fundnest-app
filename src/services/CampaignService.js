import api from "./api";

const API_URL = '/campaigns';
 export const calculateEndDate = (startDate, duration) => {
  const start = new Date(startDate);
  const end = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000); // duration is in days
  return end.toLocaleDateString(); // Adjust date formatting as needed
};
// Function to calculate progress percentage
export const calculateProgress = (currentAmount, targetAmount) => {
  if (targetAmount > 0) {
    return Math.round((currentAmount / targetAmount) * 100).toFixed(2);
  
  } else {
    return 0;
  }
};
// Function to calculate remaining days
 export const calculateRemainingDays = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = start.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};  

export const submitForm = async (formData) => {
  try {
    const response = await api.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form', error);
    throw error;
  }
};

export const getCampaigns = async () => {
try{
    const response = await api.get(API_URL);
    return response.data.map(campaign => ({
      campaign_id: campaign.campaign_id,
      campaign_user_email: campaign.campaign_user_email,
      campaign_description: campaign.campaign_description,
        campaign_fundraising_type: campaign.campaign_fundraising_type,
        campaign_duration: campaign.campaign_duration,
        campaign_country: campaign.campaign_country,
        campaign_name: campaign.campaign_name,
        current_amount: campaign.current_amount,
        target_amount: campaign.target_amount,
        poster_image_url: campaign.poster_image_url,
       campaign_donors:campaign.donors,
       campaign_user_id: campaign.campaign_user_id,
       campaign_created_at: campaign.campaign_created_at,
       campaign_updated_at: campaign.campaign_updated_at,
       campaign_end_date:calculateEndDate(campaign.campaign_created_at, campaign.campaign_duration),
       progress_percentage: calculateProgress(campaign.current_amount, campaign.target_amount),
       remaining_days: calculateRemainingDays(calculateEndDate(campaign.campaign_created_at, campaign.campaign_duration)),
    }));}
    catch(error){
      console.log(error.message)
    }
};

export const createCampaign = async (campaignData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
    const response = await api.post(API_URL, campaignData);
    return response.data;
};

export const getCampaignDetails = async (campaignId) => {
  try {
    const response = await api.get(`${API_URL}/${campaignId}/`);
    const campaign = response.data;

    // Calculate the end date and remaining days
    const endDate = calculateEndDate(campaign.created_at, campaign.duration);
    const remainingDays = calculateRemainingDays(endDate);
    
    // Add remainingDays to the campaign data
    return {
      ...campaign,
      campaign_end_date: endDate,
      remaining_days: remainingDays,
      progress_percentage: calculateProgress(campaign.current_amount, campaign.target_amount),
      campaign_description: campaign.description,
      campaign_fundraising_type:campaign.fundraising_type,
      poster_image_url: `https://backend.iraady.com${campaign.poster_image_url}`
    };
  } catch (error) {
    console.error('Error fetching campaign details', error);
    throw error;
  }
};

export const updateCampaign = async (campaignId, campaignData) => {
    console.log();

  const formdata =  new FormData();


  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
    const response = await api.put(`${API_URL}/${campaignId}/`, campaignData,config);
    return response.data;
};

export const deleteCampaign = async (campaignId) => {
    await api.delete(`${API_URL}/${campaignId}/`);
};
export const getCampaignDonations = async (campaignId) => {
  try {
    const response = await api.get(`${API_URL}/${campaignId}/donations/`);
    return response.data; // Return the data directly without mapping
  } catch (error) {
    console.error('Error fetching campaign donations', error);
    throw error;
  }
};
export const getCampaignTransactions = async (campaignId) => {
  try {
    const response = await api.get(`${API_URL}/${campaignId}/transactions/`);
    return response.data; // Return the data directly without mapping
  } catch (error) {
    console.error('Error fetching campaign transactions', error);
    throw error;
  }
};
