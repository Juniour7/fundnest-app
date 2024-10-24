import api, { getLoggedInUseremail, getTempuser } from "./api";

const API_URL = '/transactions/';

export const getTransactions = async () => {
    const response = await api.get(API_URL);
    
    return response.data;
};
export const getTransactionsByCampaignId = async (campaignId) => {
    try {
      const response = await api.get(`/campaigns/${campaignId}/transactions/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  };

export const getTransactionsByCampaignIdAndStatus = async (campaignId, status) => {
    const transactions = await getTransactions();
    const filteredTransactions = transactions.filter(transaction => transaction.campaign === campaignId && transaction.status === status);
    return filteredTransactions;
};


export const getAllTransactions = getTransactions;

export const createTransaction = async (transactionData) => {
    const response = await api.post(API_URL, transactionData);
    return response.data;
};

export const getTransactionDetails = async (transactionId) => {
    const response = await api.get(`${API_URL}/${transactionId}/`);
    return response.data;
};

export const updateTransaction = async (transactionId, transactionData) => {
    const response = await api.put(`${API_URL}/${transactionId}/`, transactionData);
    return response.data;
};

export const deleteTransaction = async (transactionId) => {
    await api.delete(`${API_URL}${transactionId}`);
};

export const getTransactionById = async (transactionId) => {
    const response = await api.get(`${API_URL}/${transactionId}/`);
    return response.data;
};
export const  gettheUserstransactions=async()=>
{
    const userId = localStorage.getItem('userId');
    const { tempuserEmail, tempuserId } = getTempuser();
    const loggedInEmail = getLoggedInUseremail();
    const emailToUse = tempuserEmail || loggedInEmail;
    const userIdToUse = tempuserId || userId;
    const response = await api.get(`/user-transactions/${userIdToUse}`);

    return response.data;
}
const generateDummyData = () => {
    const dummyData = [];
    const year = new Date().getFullYear();

    // Possible example emails, campaigns, and currencies
    const emails = ["user1@example.com", "user2@example.com", "user3@example.com", "user4@example.com"];
    const campaigns = [81, 82, 83, 84, 85];
    const currencies = ["NGN", "USD", "EUR", "GBP"];

    for (let month = 1; month <= 12; month++) {
        // Generate a random number of transactions for this month
        const transactionCount = Math.floor(Math.random() * 10) + 1; // 1 to 10 transactions

        for (let i = 0; i < transactionCount; i++) {
            // Randomly pick an email, campaign, and currency
            const randomEmail = emails[Math.floor(Math.random() * emails.length)];
            const randomCampaign = campaigns[Math.floor(Math.random() * campaigns.length)];
            const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];

            // Generate a random amount between 10 and 5000
            const randomAmount = (Math.random() * (5000 - 10) + 10).toFixed(2);

            // Generate a random day within the month
            const day = Math.floor(Math.random() * 28) + 1; // Assuming up to 28 days to avoid invalid dates

            dummyData.push({
                transaction_id: month * 1000 + i, // Ensure unique ID within the month
                email: randomEmail,
                amount: randomAmount,
                currency: randomCurrency,
                reference: `dummyref${month}${i}${Math.floor(Math.random() * 10000)}`,
                status: "successful",
                timestamp: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00Z`,
                campaign: randomCampaign
            });
        }
    }

    return dummyData;
};


export const getMonthlyTransactionDetails = async () => {
    const transactions = await getTransactions();
  
    // Generate dummy data for all months
    // const dummyData = generateDummyData();

    // Merge real transactions with dummy data
    // const allTransactions = [...transactions, ...dummyData];

    const progress = {};

    // allTransactions.forEach(transaction => {
    transactions.forEach(transaction => {
        const date = new Date(transaction.timestamp);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${year}-${month}`;

        if (!progress[key]) {
            progress[key] = {
                totalAmount: 0,
                donorCount: 0,
                campaigns: new Set(),
                currencies: new Set(),
                emails: new Set()
            };
        }

        progress[key].totalAmount += parseFloat(transaction.amount);
        progress[key].donorCount += 1;
        progress[key].campaigns.add(transaction.campaign);
        progress[key].currencies.add(transaction.currency);
        progress[key].emails.add(transaction.email);
    });

    // Convert Set to Array for easier handling in UI
    Object.keys(progress).forEach(key => {
        progress[key].campaigns = Array.from(progress[key].campaigns);
        progress[key].currencies = Array.from(progress[key].currencies);
        progress[key].emails = Array.from(progress[key].emails);
    });

    return progress;
};

export const getMonthlyTransactionDetailsForUser = async () => {
    const userId = localStorage.getItem('userId');
    const { tempuserEmail, tempuserId } = getTempuser();
    const loggedInEmail = getLoggedInUseremail();
    const emailToUse = tempuserEmail || loggedInEmail;
    const userIdToUse = tempuserId || userId;
    
    let transactionsdata = await  api.get(`/user-transactions/${userIdToUse}`);
    const transactions = transactionsdata.data;


               
    // Generate dummy data for all months
    // const dummyData = generateDummyData();

    // Merge real transactions with dummy data
    // const allTransactions = [...transactions, ...dummyData];

    const progress = {};

    // allTransactions.forEach(transaction => {
    transactions.forEach(transaction => {
        const date = new Date(transaction.timestamp);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${year}-${month}`;

        if (!progress[key]) {
            progress[key] = {
                totalAmount: 0,
                donorCount: 0,
                campaigns: new Set(),
                currencies: new Set(),
                emails: new Set()
            };
        }

        progress[key].totalAmount += parseFloat(transaction.amount);
        progress[key].donorCount += 1;
        progress[key].campaigns.add(transaction.campaign);
        progress[key].currencies.add(transaction.currency);
        progress[key].emails.add(transaction.email);
    });

    // Convert Set to Array for easier handling in UI
    Object.keys(progress).forEach(key => {
        progress[key].campaigns = Array.from(progress[key].campaigns);
        progress[key].currencies = Array.from(progress[key].currencies);
        progress[key].emails = Array.from(progress[key].emails);
    });

    return progress;
};
