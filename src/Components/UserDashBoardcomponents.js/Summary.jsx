import MonthlyProgressForTransactionsForUser from "./UserDashboardPages/MonthlyProgressTransactionForUser";
import MyStatement from "./UserDashboardPages/UserTransactions";
import React, { useEffect, useRef, useState } from "react";
import RecentDonorsTable from "./UserDashboardPages/RecentDonorsTable";
import { toast } from "react-toastify";
import { getCampaigns } from "../../services/CampaignService";
import { getLoggedInUseremail, getTempuser } from "../../services/api";
import { useCampaigns } from "./UserDashboardPages/Campaign/CampaignContext";
import { Metrics } from "./UserDashboardPages/RealUserSummaryData";

import"./Dashboard.css"
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

// Internal Component Imports
import {
  MetricsCard,

  MonthlyProgress,
 

  TopCampaignsSection
} from './UserDashboardPages/USerSummaryComponents'

// Dummy Data Imports
import {

  monthlyProgress,
 
  recentDonations,
  
} from './UserDashboardPages/UserSummaryDummyData'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const Summary = () => {
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  
    const { tempuserEmail, tempuserId } = getTempuser();
    const loggedInEmail = getLoggedInUseremail();
    const emailToUse = tempuserEmail || loggedInEmail;
    const { allCampaigns } = useCampaigns();
  const { metrics } = Metrics(filteredCampaigns);
  const fetchCampaigns = async () => {
    try {
      const campaigns = await getCampaigns(); // Assuming `getCampaigns` fetches all campaigns
      const filtered = campaigns.filter(campaign => campaign.campaign_user_email === emailToUse);
      setFilteredCampaigns(filtered);
    } catch (error) {
      toast.error("Failed to fetch campaigns");
    }
  };
  const chartRef = useRef(null)

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])
  useEffect(() => {
 

    fetchCampaigns();
  }, []); 

  return (
    <div className='px-4 py-8'>
      {/* Metrics Section */}
      <section className='mb-8'>
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {metrics.map(metric =>
            <MetricsCard
              key={metric.id}
              title={metric.title}
              description={metric.description}
              value={metric.value}
              icon={metric.icon}
              change={metric.change}
            />
          )}
        </div>
      </section>

      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
        {/* Left Column */}
        <div className='space-y-8'>
          <section className='mb-2 flex flex-col justify-between'>
          
          <MonthlyProgressForTransactionsForUser />
       
            <div className='md:col-span-2 md:row-span-2' />
          </section>
        
  
        </div>

        {/* Right Column */}
        <div className=''>
          <TopCampaignsSection   destination={"/user-dashboard/campaign-detail"} campaigns={filteredCampaigns}/>
        </div>
      </div>
      
      {/* <RecentDonorsTable/> */}
      <MyStatement/>
     
    </div>
  )
}