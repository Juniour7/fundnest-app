// import ReactTooltip from "react-tooltip";
import { FcMoneyTransfer } from "react-icons/fc";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineCampaign } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";

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
  
