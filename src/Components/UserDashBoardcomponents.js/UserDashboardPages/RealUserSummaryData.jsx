// import ReactTooltip from "react-tooltip";
import { FaBullseye, FaChartLine, FaCheckCircle, FaDollarSign, FaFlag, FaHandsHelping, FaMoneyBillWave, FaPercentage, FaUsers } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineCampaign, MdOutlineCheckCircle, MdOutlineDonutLarge, MdOutlineFlag, MdOutlineTableChart, MdOutlineTimer } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { getUsers, users } from "../../../services/UserService";
import { useCampaigns } from "./Campaign/CampaignContext";

const getMonthYear = (dateString) => {
  const date = new Date(dateString);
  return { month: date.getMonth() + 1, year: date.getFullYear() };
};

// Get current month and previous month
const currentDate = new Date();

// Helper function to calculate progress
const calculateProgress = (campaign) => {
  return (campaign.current_amount / campaign.target_amount) * 100;
};



// Calculate metrics for a given set of campaigns
export const Metrics = (campaigns) => {
  // const { filteredCampaigns,allCampaigns } = useCampaigns();


  const calculateMetrics = (campaigns = []) => {
    if (!Array.isArray(campaigns)) {
      campaigns = [];
    }
    const totalAmount = campaigns && campaigns.length > 0 
      ? campaigns.reduce((sum, campaign) => sum + (Number(campaign.current_amount) || 0), 0)
      : 0;
      const totalTargetAmount = campaigns && campaigns.length > 0 
      ? campaigns.reduce((sum, campaign) => sum + (Number(campaign.target_amount) || 0), 0)
      : 0;
      const newCampaigns = campaigns && campaigns.length > 0 ? campaigns.length : 0;
      const donors = campaigns && campaigns.length > 0 
      ? new Set(campaigns.map(campaign => campaign.campaign_user_email)).size 
      : 0;
      const completedCampaigns = campaigns.length > 0 
      ? campaigns.filter(campaign => Number(campaign.current_amount) >= Number(campaign.target_amount)).length 
      : 0;
    const averageDonation = newCampaigns > 0 ? (totalAmount / newCampaigns) : 0;
    const countries = new Set(campaigns.map(campaign => campaign.campaign_country)).size;
    const averageDuration = newCampaigns > 0 ? (campaigns.reduce((sum, campaign) => sum + campaign.campaign_duration, 0) / newCampaigns) : 0;
    const percentageTargetReached = newCampaigns > 0 ? (totalAmount / totalTargetAmount * 100) : 0;
    const averageTargetAmount = newCampaigns > 0 ? (campaigns.reduce((sum, campaign) => sum + campaign.target_amount, 0) / newCampaigns) : 0;
    const averageProgress = newCampaigns > 0 ? (campaigns.reduce((sum, campaign) => sum + (campaign.current_amount / campaign.target_amount * 100), 0) / newCampaigns) : 0;
    return {
      totalAmount,
      totalTargetAmount,
      newCampaigns,
      donors,
      completedCampaigns,
      averageDonation,
      countries,
      averageDuration,
      percentageTargetReached,
      averageTargetAmount,
      numberOfUsers: users,
    };
  };
  



  const allData = calculateMetrics(campaigns);


  const metrics = [
    {
      id: 1,
      title: 'Total Current Amount',
      description: 'Total amount raised so far',
      value: `$${allData.totalAmount}`,
      icon: <FaDollarSign className="text-green-500 text-2xl" />  // Changed icon
    },
    {
      id: 2,
      title: 'Total Target Amount',
      description: 'Total target amount for all campaigns',
      value: `$${allData.totalTargetAmount}`,
      icon: <FaBullseye className="text-red-500 text-2xl" />  // Changed icon
    },
    {
      id: 3,
      title: 'Campaigns',
      description: 'Total number of campaigns',
      value: `${allData.newCampaigns}`,
      icon: <FaChartLine className="text-blue-500 text-2xl" />  // Changed icon
    },
    {
      id: 5,
      title: 'Completed Campaigns',
      description: 'Campaigns that have reached their target',
      value: `${allData.completedCampaigns}`,
      icon: <FaCheckCircle className="text-green-500 text-2xl" />  // Changed icon
    },
    {
      id: 6,
      title: 'Average Donation per Campaign',
      description: 'Average amount raised per campaign',
      value: `$${allData.averageDonation.toFixed(2)}`,
      icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />  // Changed icon
    },
    {
      id: 9,
      title: 'Percentage of Campaigns Reaching Target',
      description: 'Percentage of campaigns that reached their target',
      value: `${allData.percentageTargetReached.toFixed(2)}%`,
      icon: <FaPercentage className="text-purple-500 text-2xl" />  // Changed icon
    },
    {
      id: 10,
      title: 'Average Target Amount',
      description: 'Average target amount for all campaigns',
      value: `$${allData.averageTargetAmount.toFixed(2)}`,
      icon: <FaBullseye className="text-red-500 text-2xl" />  // Changed icon
    },
    // {
    //   id: 11,
    //   title: 'Number of Users',
    //   description: 'Total number of users',
    //   value: `${allData.numberOfUsers}`,
    //   icon: <FaUsers className="text-blue-500 text-2xl" />  // Changed icon
    // },
  ];

  return { metrics }; // Return both metrics and campaigns
};

// Add progress to each campaign and sort by progress
const campaignsWithProgress =  (campaigns = []) => {
  return campaigns.map(campaign => ({
    ...campaign,
    progress: calculateProgress(campaign)
  }));
};
export const topCampaigns = (campaigns = []) => {


  const campaignsWithProgressList = campaignsWithProgress(campaigns);
  const sortedCampaigns = campaignsWithProgressList.sort((a, b) => b.progress - a.progress);
  return sortedCampaigns.slice(0, 3)

};






  export const activities = [
    'Campaign 1 reached its goal.',
    'New donation from John Doe.',
    'Campaign 2 has 3 days left.',
    'New campaign "Help the Homeless" started.'
  ];
  
  export const monthlyProgress = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Funds Raised',
        data: [500, 700, 1000, 1200, 900, 1500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'New Donors',
        data: [5000, 1500, 1000, 2000, 2500, 3000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  export const topDonors = [
    { id: 1, name: 'Campaign 1', fundsRaised: 5000, goal: 10000 },
    { id: 2, name: 'Campaign 2', fundsRaised: 7500, goal: 10000 },
    { id: 3, name: 'Campaign 3', fundsRaised: 10000, goal: 10000 },
  ];
  
  export const goalsMilestones = [
    { id: 1, campaign: 'Campaign 1', goal: '$5000', progress: '$3000', deadline: '2024-07-01' },
    { id: 2, campaign: 'Campaign 2', goal: '$4000', progress: '$2500', deadline: '2024-07-15' },
  ];
  
  export const profileCompletion = 80;
  export const campaignHeatmap = [
    { region: 'North America', donations: 500 },
    { region: 'Europe', donations: 300 },
    { region: 'Asia', donations: 200 },
  ];
  export const notifications = [
    { category: 'Info', message: 'No upcoming maintenance.' },
    { category: 'Alert', message: 'Your campaign "School Supplies" is ending soon.' },
    { category: 'Reminder', message: 'Update your profile information.' }
  ];

  export const recentDonations = [
    { id: 1, donor: 'John Doe', amount: '$100', date: '2024-06-01' },
    { id: 2, donor: 'Jane Smith', amount: '$200', date: '2024-06-02' }
  ];
  export const upcomingDeadlines = [
    { id: 1, name: 'Campaign 1', deadline: '2024-06-30', daysRemaining: 5 },
    { id: 2, name: 'Campaign 2', deadline: '2024-07-01', daysRemaining: 6 }
  ];
  export const donorInsights = [
    { id: 1, donor: 'John Doe', totalDonated: '$1000', frequency: '5 times' },
    { id: 2, donor: 'Jane Smith', totalDonated: '$800', frequency: '3 times' }
  ]; 
  export const feedbackReviews = [
    { id: 1, review: 'Great campaign, happy to contribute!', reviewer: 'John Doe' },
    { id: 2, review: 'Loved the cause, well organized.', reviewer: 'Jane Smith' }
  ];
  export const campaignPerformance = [
    { month: 'January', fundsRaised: 500, fundsSpent: 300, fundsStarted: 2000, donors: 50 },
    { month: 'February', fundsRaised: 700, fundsSpent: 400, fundsStarted: 2500, donors: 60 },
    { month: 'March', fundsRaised: 1000, fundsSpent: 500, fundsStarted: 3000, donors: 70 },
    { month: 'April', fundsRaised: 1200, fundsSpent: 1500, fundsStarted: 3500, donors: 75 },
    { month: 'May', fundsRaised: 900, fundsSpent: 1000, fundsStarted: 4000, donors: 80 },
    { month: 'June', fundsRaised: 1500, fundsSpent: 1200, fundsStarted: 4500, donors: 85 },
    { month: 'July', fundsRaised: 1800, fundsSpent: 1300, fundsStarted: 5000, donors: 90 },
    { month: 'August', fundsRaised: 2000, fundsSpent: 1500, fundsStarted: 5500, donors: 95 },
  ]; 
  export const performanceData = {
    labels: campaignPerformance.map(data => data.month),
    datasets: [
      {
        label: 'Funds Raised',
        data: campaignPerformance.map(data => data.fundsRaised),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Funds Spent',
        data: campaignPerformance.map(data => data.fundsSpent),
        fill: false,
        backgroundColor: 'rgb(220, 220, 220)',
        borderColor: 'rgba(220, 220, 220, 220)',
      },
      {
        label: 'Funds Started',
        data: campaignPerformance.map(data => data.fundsStarted),
        fill: false,
        backgroundColor: 'rgb(100, 100, 100)',
        borderColor: 'rgba(100, 100, 100, 100)',
      },
      {
        label: 'Number of Donors',
        data: campaignPerformance.map(data => data.donors),
        fill: false,
        backgroundColor: 'rgb(150, 150, 150)',
        borderColor: 'rgba(150, 150, 150, 150)',
      },
    ],
    options: {
      tooltips: {
        mode: 'x',
        intersect: false,
      },
    },
  };
  