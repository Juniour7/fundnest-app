import "jspdf-autotable";
import "react-tooltip";
import * as XLSX from "xlsx";
import React, { useMemo, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { jsPDF } from "jspdf";
import { Line } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import { FaBell, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import { FcNegativeDynamic, FcPositiveDynamic } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import { topCampaigns } from "./RealUserSummaryData";

export const MetricsCard = ({ title, description, value, icon }) => {
  return (
    <div className='border-1   hover:shadow-xl   rounded-md p-3 mr-3 hover:bg-gray-50 hover:border hover:border-white-500 hover:scale-105 transform transition-all duration-300'>
      <div className='flex items-center justify-between mb-2'>
        <div className='bg-gray-200 rounded-md p-3 mr-3'>
          {icon}
        </div>

        <div className='flex flex-col'>
          {' '}<h1 className='text-xl  mb-0 text-color'>{title} </h1>
          <p className='text-2xl text--500 rounded-sm max-w-[150px] px-1 truncate'>
            {value}
          </p>
        </div>
      </div>

      <span className='text-gray-500 mb-1 block'>
        {description}
      </span>
    </div>
  )
}

// RecentActivity.js

export const RecentActivity = ({ activities }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Recent Activity</h2>
    <ul className='list-disc pl-5'>
      {activities.map((activity, index) =>
        <li key={index}>
          {activity}
        </li>
      )}
    </ul>
  </div>

// MonthlyProgress.js

export const MonthlyProgress = ({ data }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Monthly Progress</h2>
    <Line data={data} />
  </div>

// TopDonors.js

export const TopDonors = ({ topDonors }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Top Donors</h2>
    <ul className='list-disc pl-5'>
      {topDonors.map(donor =>
        <li key={donor.id}>
          {donor.name} - {donor.totalDonated}
        </li>
      )}
    </ul>
  </div>

// Notifications.js

export const Notifications = ({ notifications }) => {
  const getIconForCategory = category => {
    switch (category) {
      case 'Info':
        return <FaInfoCircle className='text-blue-500 mr-2' />
      case 'Warning':
        return <FaExclamationCircle className='text-yellow-500 mr-2' />
      case 'Alert':
        return <FaBell className='text-red-500 mr-2' />
      default:
        return <FaBell className='text-gray-500 mr-2' />
    }
  }
  return (
    <div className='border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 bg-white relative'>
      <div className='sticky top-0 bg-white pb-2 border-b mb-4'>
        <h2 className='text-2xl font-semibold'>Notifications</h2>
      </div>
      <ul className='list-none pl-0 h-64 overflow-auto'>
        {notifications.map((notification, index) =>
          <li
            key={index}
            className='flex items-start mb-4 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300'
          >
            {getIconForCategory(notification.category)}
            <div className='flex-1'>
              <strong className='block font-medium'>
                {notification.category}:
              </strong>
              <span className='text-gray-700'>
                {notification.message}
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
// GoalsMilestones.js

export const GoalsMilestones = ({ goalsMilestones }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Goals & Milestones</h2>
    <ul className='list-disc pl-5'>
      {goalsMilestones.map(goal =>
        <li key={goal.id}>
          {goal.campaign}: {goal.progress}/{goal.goal} by {goal.deadline}
        </li>
      )}
    </ul>
  </div>

// ProfileCompletion.js

export const ProfileCompletion = ({ completion }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Profile Completion</h2>
    <div className='w-full bg-gray-200 rounded-full h-4'>
      <div
        className='bg-green-500 h-4 rounded-full'
        style={{ width: `${completion}%` }}
      />
    </div>
    <span className='text-lg'>
      {completion}% complete
    </span>
  </div>

// CampaignHeatmap.js

export const CampaignHeatmap = ({ data }) =>
  <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-semibold mb-4'>Campaign Heatmap</h2>
    <ul className='list-disc pl-5'>
      {data.map((region, index) =>
        <li key={index}>
          {region.region}: {region.donations} donations
        </li>
      )}
    </ul>
  </div>

// UserDashboardPages.js

export const TopCampaignCard = ({ destination, campaign }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${destination}/${campaign.campaign_id}`, {
      state: { campaign }
    });
  };

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const progressPercentage = calculateProgress(
    campaign.current_amount,
    campaign.target_amount
  );

  return (
    <div
      onClick={handleClick}
      className='rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white overflow-hidden flex flex-col  justify-between gap-4 p-4 cursor-pointer border border-gray-100 align-center'
    >
      <div className='relative '>
        <img
          src={`https://backend.iraady.com${campaign.poster_image_url}`}
          alt={campaign.campaign_name}
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300'>
          <span className='text-white text-lg font-semibold p-2'>
            {campaign.campaign_name}
          </span>
        </div>
      </div>
      <div className='flex-1 p-4'>
        <h3 className='text-xl font-bold mb-2'>
          {campaign.campaign_name}
        </h3>
        <p className='text-gray-700 mb-2 text-sm'>
          <strong>Funds Raised:</strong> ${campaign.current_amount}
        </p>
        <p className='text-gray-700 mb-2 text-sm'>
          <strong>Goal:</strong> ${campaign.target_amount}
        </p>
        <div className='relative w-full bg-gray-200 rounded-full h-3 mb-4'>
          <div
            className='bg-green-500 h-full rounded-full'
            style={{ width: `${progressPercentage}%` }}
          />
          <span
            className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-xs text-gray-800 font-medium'
            style={{ left: `${progressPercentage}%` }}
          >
            {progressPercentage.toFixed(2)}%
          </span>
        </div>
        <p className='text-gray-700 text-sm'>
          <strong>Remaining:</strong> ${campaign.target_amount - campaign.current_amount}
        </p>
      </div>
    </div>
  );
};
export const TopCampaignsSection = ({ destination, campaigns }) => {

  const topCampaignsData = topCampaigns(campaigns);

  return (
    <section className='rounded-lg bg-white shadow-md p-4'>
      <h2 className='text-2xl font-bold mb-4'>Top Campaigns</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4'>
        {topCampaignsData.map(campaign => (
          <TopCampaignCard
            key={campaign.id}
            campaign={campaign}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
};
