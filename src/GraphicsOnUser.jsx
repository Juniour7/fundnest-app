import React, { useEffect, useState } from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getUsers } from "./services/UserService";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserSummaryChart = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data using the getUsers function
        const fetchUserData = async () => {
            try {
                const data = await getUsers();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserData();
    }, []);

    // Function to summarize data for the chart
    const getSummaryData = () => {
        // Summarize the number of organizations by type
        const orgTypeCount = userData.reduce((acc, user) => {
            const orgType = user.organization_type || 'Unknown'; // Handle missing or null organization_type
            acc[orgType] = (acc[orgType] || 0) + 1;
            return acc;
        }, {});

        // Convert the summary data into chart-compatible format
        return {
            labels: Object.keys(orgTypeCount),
            datasets: [
                {
                    data: Object.values(orgTypeCount),
                    backgroundColor: [
                        '#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', 
                        '#9966FF', '#FF9F40', '#FF6384'
                    ],
                    hoverBackgroundColor: [
                        '#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', 
                        '#9966FF', '#FF9F40', '#FF6384'
                    ],
                },
            ],
        };
    };

    return (
        <div>
            <h2>Organization Type Summary</h2>
            {userData.length > 0 ? (
                <Pie data={getSummaryData()} />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default UserSummaryChart;
