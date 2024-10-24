import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getTransactionsByCampaignId } from "../../services/TransactionService";

import {
  faBullseye,
  faCalendar,
  faChartLine,
  faClock,
  faDollarSign,
  faFileAlt,
  faGlobe,
  faMoneyBillWave,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function CampaignDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [campaign, setCampaign] = useState(null);
  const [transactions, setTransactions] = useState([]); // Store transactions here
  const defaultImageUrl = "/default-campaign-image.jpg"; // Replace with your default image path

  useEffect(() => {
    async function fetchCampaignDetails() {
      try {
        const { campaign } = location.state || {};
        setCampaign(campaign);
        
        // Fetching transactions for the current campaign
        const transactions = await getTransactionsByCampaignId(id);
        setTransactions(transactions); // Store the transactions
        
      } catch (error) {
     
        console.log("Error fetching campaign details:", error);
        console.log("Error fetching campaign details:", id);
      }
    }
    fetchCampaignDetails();
  }, [location.state, id]);

  if (!campaign) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading campaign details...</p>
      </div>
    );
  }

  // Data grid configuration
  const columns = [
    { field: "email", headerName: "Email", width: 250 },
    { field: "amount", headerName: "Amount", width: 150, type: "number" },
    { field: "timestamp", headerName: "Date", width: 200, type: "date" },
    { field: "currency", headerName: "Currency", width: 100 },
    { field: "tx_ref", headerName: "Transaction Ref", width: 200 },
    { field: "status", headerName: "Status", width: 150 }
  ];

  const rows = transactions.map((transaction) => ({
    id: transaction.id,
    email: transaction.email,
    amount: parseFloat(transaction.amount).toFixed(2),
    timestamp: new Date(transaction.timestamp),
    currency: transaction.currency,
    tx_ref: transaction.tx_ref,
    status: transaction.status
  }));

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{campaign.campaign_name}</h1>
        <Button variant="secondary" onClick={() => navigate(-1)} className="text-lg">
          Back
        </Button>
      </div>

      {/* Campaign Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Image and Basic Details */}
        <div className="space-y-6">
          <img
            src={campaign.poster_image_url ? `https://backend.iraady.com${campaign.poster_image_url}` : defaultImageUrl}
            alt={campaign.campaign_name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700">
            <strong>Organizer:</strong> {campaign.campaign_user_email}
          </p>
          <div className="space-y-2">
            <p className="text-lg text-gray-700">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-green-500" />
              <strong>Fundraising Type:</strong> {campaign.campaign_fundraising_type}
            </p>
            <p className="text-lg text-gray-700">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text-yellow-500" />
              <strong>Country:</strong> {campaign.campaign_country}
            </p>
          </div>
        </div>

        {/* Financial and Progress Details */}
        <div className="space-y-6">
          {/* Financial Information */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 text-green-500" />
              <strong>Current Amount:</strong> ${campaign.current_amount.toFixed(2)}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faBullseye} className="mr-2 text-red-500" />
              <strong>Target Amount:</strong> ${campaign.target_amount.toFixed(2)}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faChartLine} className="mr-2 text-purple-500" />
              <strong>Progress:</strong> {Math.min(campaign.progress_percentage, 100)}%
            </p>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div
                className="absolute top-0 left-0 bg-blue-600 h-4 rounded-full"
                style={{ width: `${Math.min(campaign.progress_percentage, 100)}%` }}
              ></div>
              <span
                className="absolute top-0 left-0 w-full text-center text-white"
                style={{ lineHeight: '1rem' }}
              >
                {Math.min(campaign.progress_percentage, 100)}%
              </span>
            </div>
          </div>

          {/* Duration and Time Details */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
              <strong>Duration:</strong> {campaign.campaign_duration} days
            </p>
            <p className={`text-lg ${campaign.remaining_days <= 5 ? 'text-red-500' : 'text-gray-800'} mb-2`}>
              <FontAwesomeIcon icon={faClock} className="mr-2 text-yellow-500" />
              <strong>Remaining Days:</strong> {campaign.remaining_days}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
              <strong>End Date:</strong> {campaign.campaign_end_date}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
              <strong>Created At:</strong> {new Date(campaign.campaign_created_at).toLocaleDateString()}
            </p>
            <p className="text-lg text-gray-800">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
              <strong>Updated At:</strong> {new Date(campaign.campaign_updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Campaign Description Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-primary" />
          Description
        </h2>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {campaign.campaign_description}
        </p>
      </div>

      {/* Transactions Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-primary" />
          Transactions
        </h2>
        <div className="h-96 overflow-auto">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            checkboxSelection={false}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </div>
  );
}

export default CampaignDetail;
