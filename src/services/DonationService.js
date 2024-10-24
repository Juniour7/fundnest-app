import api from "./api";
import axios from "axios";

const API_URL = '/donations';


export const getDonations = async () => {
    const response = await api.get(API_URL);
    return response.data;
};
export const getDonationsByCampaignId = async (campaignId) => {
    const donations = await api.get(`/campaigns/${campaignId}/donations/`)
  
    
    return donations;
};
export const getDonationsByCampaignIdAndEmail = async (campaignId, email) => {
    const donations = await getDonations();
    const filteredDonations = donations.filter(donation => donation.campaign === campaignId && donation.email === email);
    return filteredDonations;
};


export const createDonation = async (donationData) => {
    const response = await api.post(API_URL, donationData);
    return response.data;
};

export const getDonationDetails = async (donationId) => {
    const response = await api.get(`${API_URL}/${donationId}`);
    return response.data;
};

export const updateDonation = async (donationId, donationData) => {
    const response = await api.put(`${API_URL}/${donationId}`, donationData);
    return response.data;
};

export const deleteDonation = async (donationId) => {
    await api.delete(`${API_URL}/${donationId}`);
};

export const getDonationById = async (donationId) => {
    const response = await api.get(`${API_URL}/${donationId}`);
    return response.data;
};
export const getMyDonationns=async ()=>{
    const response=await api.get('/user-donations/');
return response.data;
}

const generateDummyData = () => {
    const dummyDonations = [];
    const year = new Date().getFullYear();

    for (let month = 1; month <= 12; month++) {
        const donationCount = Math.floor(Math.random() * 50) + 10; // Random donor count between 10 and 60
        for (let i = 0; i < donationCount; i++) {
            dummyDonations.push({
                timestamp: new Date(year, month - 1, Math.floor(Math.random() * 28) + 1).toISOString(),
                donation_amount: (Math.random() * 100).toFixed(2) // Random amount between 0 and 100
            });
        }
    }

    return dummyDonations;
};

export const getMonthlyProgress = async () => {
    // Fetch all real donations
    const donations = await getDonations();

    // Generate dummy donations for testing purposes
    // const dummyDonations = generateDummyData();

    // Combine real donations with dummy donations
    // const combinedDonations = [...donations, ...dummyDonations];

    // Initialize an object to store progress data grouped by month and year
    const progress = {};

    // Loop through each donation
    donations.forEach(donation => {
        // combinedDonations.forEach(donation => {
        const date = new Date(donation.timestamp);
        const month = date.getMonth() + 1; // Get the month (0-based, so add 1)
        const year = date.getFullYear();
        const key = `${year}-${month}`; // Create a key in the format "year-month"

        // If there's no entry for this month, create one
        if (!progress[key]) {
            progress[key] = { totalAmount: 0, donorCount: 0 };
        }

        // Add the donation amount to the total and increment the donor count
        progress[key].totalAmount += parseFloat(donation.donation_amount);
        progress[key].donorCount += 1;
    });

    return progress;
};
