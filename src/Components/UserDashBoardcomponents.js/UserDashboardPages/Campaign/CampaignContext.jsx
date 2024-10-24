import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCampaigns } from "../../../../services/CampaignService";
import { getLoggedInUseremail } from "../../../../services/api";

const CampaignContext = createContext();

export const useCampaigns = () => {
  return useContext(CampaignContext);
};

export const CampaignProvider = ({ children }) => {
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns = await getCampaigns();
        const loggedInUserEmail = await getLoggedInUseremail();
    

        const filtered = campaigns.filter(campaign => {
      
          return campaign.campaign_user_email === loggedInUserEmail;
        });

     

        let role = localStorage.getItem("role");
        if (role === "admin") {
          setAllCampaigns(campaigns);
        } else if (role === "user") {
          setFilteredCampaigns(filtered);
        } else {
          setFilteredCampaigns(filtered);
        }
        setFilteredCampaigns(filtered);
        setAllCampaigns(campaigns);
      } catch (error) {
        toast.error("Failed to fetch campaigns");
      }
    };

    fetchCampaigns();
  }, []); // Empty dependency array to ensure this runs once on mount

  return (
    <CampaignContext.Provider value={{ filteredCampaigns, allCampaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};
