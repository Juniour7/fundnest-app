import "./Dashboard.css";
import React from "react";
import React, { useState } from "react";
import SummaryMetrics from "../UserDashBoardcomponents.js/UserDashboardPages/SummaryMetrics";
import amountImage from "../Assets/Amount.png";
import daysLeftImage from "../Assets/Calendar.png";
import donorsImage from "../Assets/Donors.png";
import targetImage from "../Assets/Target.png";
import { useState } from "react";

const Summary = () => {
  // defined variables to set the campaign data values collected from db
  const [raisedAmount, setRaisedAmount] = useState("100");
  const [donors, setDonors] = useState("2");
  const [target, setTarget] = useState("8000");
  const [daysLeft, setdaysLeft] = useState("0");

  const [donations, setDonations] = useState([
    {
    donor: "John Doe",
    contact: "john@example.com",
    amount: "$100",
    transactionRef: "ABC123",
    date: "2024-05-08",
  },
  {
    donor: "Jane Smith",
    contact: "jane@example.com",
    amount: "$50",
    transactionRef: "DEF456",
    date: "2024-05-09",
  },
  {
    donor: "Alice Johnson",
    contact: "alice@example.com",
    amount: "$200",
    transactionRef: "GHI789",
    date: "2024-05-10",
  },

  ]);

  // Function to add a new donation to the table
  const addDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  // Calculate the percentage of target amount reached
  const percentageReached = target !== "0" ? (raisedAmount / target) * 100 : 0;

  return (
    <div className="summary-container">
        <div className="Summary-intro">
          <div>
              <h2 className="text-color">Summary</h2>
          </div>
          <p>
            Your campaign is at {percentageReached.toFixed(2)}%
          </p>
        </div>

        <div className="summary-widgets">
            <div className="widget-item">
                <div>
                    <img src={amountImage} alt="wallet" />
                </div>
                <div>
                    <p>Amount Raised</p>
                    <p>USD: ${raisedAmount}</p>
                </div>

            </div>

            <div className="widget-item"> 
                <div>
                     <img src={donorsImage} alt="people" />
                </div>
                <div>
                    <p>Donors</p>
                    {donors}
                </div>
            </div>

            <div className="widget-item">
                <div>
                    <img src={targetImage} alt="target" />
                </div>
                <div>
                   <p>Target</p>
                   <p>USD: ${target}</p>
                </div>
            </div>

            <div className="widget-item">
                <div>
                    <img src={daysLeftImage} alt="calendar" />
                </div>
                <div>
                    <p>Days Left</p>
                    {daysLeft}
                </div>
            </div>
        </div>

        <div className="donors">
           <div>
               <h3 className="text-color">Latest Donations</h3>
           </div>

           <div>
               {/*Table of donors summary*/}
                           <div>
      <table className="donation-table">
        <thead>
          <tr>
            <th>Donor</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Transaction Ref</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.donor}</td>
              <td>{donation.contact}</td>
              <td>{donation.amount}</td>
              <td>{donation.transactionRef}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
           </div>

        </div>
    </div>
  );
};

// export default Summary;

const Summarytrue = () => {
  const [filter, setFilter] = useState('all');


  // Dummy data for campaigns
  const campaigns = [
    { id: 1, name: 'Campaign 1', status: 'completedd', targetedMoney: 5000, reachedMoney: 5000, startDate: new Date('2024-01-01'), endDate: new Date('2024-01-31'), photo: 'https://images.unsplash.com/photo-1517329782449-810562a4ec2f?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Campaign 2', status: 'pending', targetedMoney: 3000, reachedMoney: 1500, startDate: new Date('2024-02-15'), endDate: new Date('2024-03-15'), photo: 'https://images.unsplash.com/photo-1603201101485-e232d22ad18b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Campaign 3', status: 'succeeded', targetedMoney: 8000, reachedMoney: 6000, startDate: new Date('2024-03-10'), endDate: new Date('2024-04-10'), photo: 'https://images.unsplash.com/photo-1603134281085-cf0c4b61a65d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Campaign 4', status: 'failed', targetedMoney: 2000, reachedMoney: 600, startDate: new Date('2024-04-01'), endDate: new Date('2024-04-30'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
    { id: 5, name: 'Campaign 6 with a very long name Campaign 6 with a very long nameCampaign 6 with a very long name', status: 'failed', targetedMoney: 10000, reachedMoney: 2000, startDate: new Date('2024-05-15'), endDate: new Date('2024-06-15'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
    { id: 6, name: 'Campaign 7', status: 'failed', targetedMoney: 5000, reachedMoney: 1000, startDate: new Date('2024-06-01'), endDate: new Date('2024-06-30'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
    { id: 7, name: 'Campaign 8', status: 'failed', targetedMoney: 3000, reachedMoney: 0, startDate: new Date('2024-07-01'), endDate: new Date('2024-07-31'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
    { id: 8, name: 'Campaign 9', status: 'failed', targetedMoney: 4000, reachedMoney: 1000, startDate: new Date('2024-08-01'), endDate: new Date('2024-08-31'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
    { id: 9, name: 'Campaign 10', status: 'failed', targetedMoney: 6000, reachedMoney: 3000, startDate: new Date('2024-09-01'), endDate: new Date('2024-09-30'), photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1W9dsjCUBYjNLXLTIkdC1NQuOKhRmifYdg&s' },
  ];
  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Truncate campaign name if longer than maxLength characters
  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + '...'; // Truncate and add ellipsis
    }
    return name;
  };
  // Calculate average success based on money
  const averageSuccessMoney = () => {
    const successfulCampaigns = campaigns.filter(campaign => campaign.status === 'succeeded');
    if (successfulCampaigns.length === 0) return 0;
    const totalMoney = successfulCampaigns.reduce((acc, campaign) => acc + campaign.reachedMoney, 0);
    return totalMoney / successfulCampaigns.length;
  };

  // Calculate average success based on days collected
  const averageSuccessDays = () => {
    const successfulCampaigns = campaigns.filter(campaign => campaign.status === 'succeeded');
    if (successfulCampaigns.length === 0) return 0;
    const totalDays = successfulCampaigns.reduce((acc, campaign) => acc + calculateRemainingDays(campaign.endDate), 0);
    return totalDays / successfulCampaigns.length;
  };
   // Calculate progress based on reached money and targeted money
   const calculateProgress = (reached, targeted) => {
    return (reached / targeted) * 100;
  };
// Calculate remaining days based on today's date and campaign end date
const calculateRemainingDays = (endDate) => {
  const today = new Date();
  const diffTime = Math.abs(endDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
// Get unique status options from campaigns
const statusOptions = ['all', ...new Set(campaigns.map(campaign => campaign.status))];
  // Filter campaigns based on the selected filter
  const filteredCampaigns = campaigns.filter(campaign => filter === 'all' || campaign.status === filter);

  return (
    <>
      <div className=" flex">
      <SummaryMetrics />
         </div>
    <div className="w-full">
      <div className="border-2  pt-4 mt-4">
        <div className="flex items-center mb-4 bg-gray-200 p-4  w-80 gap-8 rounded-lg">
          <h2 className="text-xl">Campaigns</h2>
          <select onChange={handleFilterChange} value={filter} className="ml-auto px-4 py-2 rounded bg-gray-300">
            {statusOptions.map((status, index) => (
              <option key={index} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
            ))}
          </select>
          <h2 className="text-xl">{filteredCampaigns.length}</h2>
        </div>
        <div className="flex gap-4  relative overflow-auto">
          {filteredCampaigns.map(campaign => (
            <div key={campaign.id} className="border rounded-lg flex-shrink-0 w-64 p-4 hover:shadow-lg">
              <img src={campaign.photo} alt={campaign.name} className="w-48 h-48 mb-4 mx-auto rounded-lg cursor-pointer transform hover:scale-105 transition duration-300" />
              <span className="flex justify-between">
             
              <div className="relative">
              <h3 className="text-lg font-semibold text-center overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={campaign.name}>
                  {truncateName(campaign.name, 10)}
                  <span className="tooltip absolute bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-6 -ml-2 opacity-0 pointer-events-none transition-opacity duration-300">
                    {campaign.name}
                  </span>
                </h3>
              </div>
              <div className="text-gray-500 text-center mb-2">{campaign.status}</div>
              </span>
              <div className="text-center mb-2">{calculateProgress(campaign.reachedMoney, campaign.targetedMoney)}% Complete</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-gray-400 h-full rounded-full" style={{ width: `${calculateProgress(campaign.reachedMoney, campaign.targetedMoney)}%` }}></div>
              </div>
              <div className="text-center mb-2">Remaining Days: {calculateRemainingDays(campaign.endDate)}</div>
              <button className="px-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600 transition duration-300">View All</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Summary;