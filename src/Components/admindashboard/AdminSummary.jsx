import MonthlyProgress from "../../MonthlyProgressForDonations";
import MonthlyProgressForDonations from "../../MonthlyProgressForDonations";
import MonthlyProgressForTransactions from "../../MonthlyProgressTransactions";
import React, { useEffect, useRef } from "react";
import TransactionDetailsTable from "../../TransactionDetailsTable";
import UserSummaryChart from "../../GraphicsOnUser";
import { Line } from "react-chartjs-2";
import { useCampaigns } from "../UserDashBoardcomponents.js/UserDashboardPages/Campaign/CampaignContext";

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

import {
  MetricsCard,
  RecentActivity,
  TopDonors,
  Notifications,
  GoalsMilestones,
  ProfileCompletion,
  CampaignHeatmap,
  // RecentDonorsTable,
  TopCampaignsSection
} from '../UserDashBoardcomponents.js/UserDashboardPages/USerSummaryComponents'

// Dummy Data Imports
import {
  topDonors,
  notifications,
  goalsMilestones,
  profileCompletion,
  campaignHeatmap,
  recentDonations,
  Metrics
} from '../UserDashBoardcomponents.js/UserDashboardPages/RealUserSummaryData'

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
const AdminSummary = () => {
  const { filteredCampaigns, allCampaigns } = useCampaigns()
  const { metrics } = Metrics(allCampaigns)
  const chartRef = useRef(null)

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

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
          {/* Recent Updates Section */}
          <section className='mb-8'>
            <div>
               <UserSummaryChart/>
            </div>
               <div className='md:col-span-2 md:row-span-2'>
            <MonthlyProgressForDonations />
          </div>
          <div className='md:col-span-2 md:row-span-2'>
            <MonthlyProgressForTransactions />
          </div>
          </section>

          {/* Recent Donations Section */}
          <section>
            {/* <RecentDonorsTable data={recentDonations} /> */}
         
           
          </section>
        </div>

        {/* Right Column */}
        <div className=''>
          <TopCampaignsSection
            campaigns={allCampaigns}
            destination='/admin-dashboard/campaign-detail'
          />
        </div>
      </div>

      {/* Progress and Insights Section */}
      <section className='mb-8'>
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
         
        
        </div>
        <TransactionDetailsTable height="96" />
      </section>
    </div>
  )
}

export default AdminSummary
