import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getMonthlyTransactionDetailsForUser } from "../../../services/TransactionService.js";

// import { getMonthlyTransactionDetails } from "./services/TransactionService.js";

import api from'../../../services/api.js'
const MonthlyProgressForTransactionsForUser = () => {
    const [chartData, setChartData] = useState(null);
    const [transactionDetails, setTransactionDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            
                const progress = await getMonthlyTransactionDetailsForUser();
                 // const labels = Object.keys(progress).sort();
                 const labels = Object.keys(progress).sort();
                 const totalAmounts = labels.map(label => progress[label].totalAmount || 0);
                 const donorCounts = labels.map(label => progress[label].donorCount || 0);

                if (!progress || Object.keys(progress).length === 0) {
                    // throw new Error("No data availablee");
                   
                }

               

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: "Total Amount Raised",
                            data: totalAmounts,
                            borderColor: "rgba(75,192,192,1)",
                            backgroundColor: "rgba(75,192,192,0.2)",
                            fill: true,
                            tension: 0.1,
                            borderWidth: 2
                        },
                        {
                            label: "Number of Donors",
                            data: donorCounts,
                            borderColor: "rgba(153,102,255,1)",
                            backgroundColor: "rgba(153,102,255,0.2)",
                            fill: true,
                            tension: 0.1,
                            borderWidth: 2
                        }
                    ]
                });

                setTransactionDetails(progress);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!chartData) {
        return <div>there is no  transactions</div>;
    }

    return (
        <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
            <h2 className='text-xl font-semibold mb-4'>Monthly  transactions statistics</h2>
            <Line data={chartData} options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 14,
                                weight: 'bold',
                            },
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            lineWidth: 2,
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                                weight: 'bold',
                            },
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            lineWidth: 2,
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x',
                }
            }} />

            {/* <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Detailed Monthly Transactions</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2">Month</th>
                                <th className="px-6 py-3 border-b-2">Total Amount</th>
                                <th className="px-6 py-3 border-b-2">Donor Count</th>
                                <th className="px-6 py-3 border-b-2">Campaigns</th>
                                <th className="px-6 py-3 border-b-2">Currencies</th>
                                <th className="px-6 py-3 border-b-2">Emails</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(transactionDetails).sort().map(month => (
                                <tr key={month}>
                                    <td className="px-6 py-3 border-b">{month}</td>
                                    <td className="px-6 py-3 border-b">{transactionDetails[month].totalAmount}</td>
                                    <td className="px-6 py-3 border-b">{transactionDetails[month].donorCount}</td>
                                    <td className="px-6 py-3 border-b">{transactionDetails[month].campaigns.join(', ')}</td>
                                    <td className="px-6 py-3 border-b">{transactionDetails[month].currencies.join(', ')}</td>
                                    <td className="px-6 py-3 border-b">{transactionDetails[month].emails.join(', ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default MonthlyProgressForTransactionsForUser;
