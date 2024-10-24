import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { FaLinkedin } from "react-icons/fa";
import { getMonthlyProgress } from "./services/DonationService";

// MonthlyProgress page component
const MonthlyProgressForDonations = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const progress = await getMonthlyProgress();

                if (!progress || Object.keys(progress).length === 0) {
                    throw new Error("No data available");
                }

                // Extract labels (months) and data (amounts and donor counts)
                const labels = Object.keys(progress).sort(); // Sort keys to ensure chronological order
                const totalAmounts = labels.map(label => progress[label].totalAmount || 0);
                const donorCounts = labels.map(label => progress[label].donorCount || 0);

                // Prepare data for the chart
                setChartData({
                    labels,
                    datasets: [
                        {
                            label: " amount",
                            data: totalAmounts,
                            borderColor: "rgba(75,192,192,1)",
                            backgroundColor: "rgba(75,192,192,0.2)",
                            fill: true,
                            tension: 0.1,
                            borderWidth: 2, // Line thickness
                        },
                        {
                            label: "Number of Donors",
                            data: donorCounts,
                            borderColor: "rgba(153,102,255,1)",
                            backgroundColor: "rgba(153,102,255,0.2)",
                            fill: true,
                            tension: 0.1,
                            borderWidth: 2, // Line thickness
                        }
                    ]
                });
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
        return <div>No data available to display.</div>;
    }

    // Customize chart options
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at 0
                ticks: {
                    callback: function(value) {
                        return `$${value}`; // Add a dollar sign before the y-axis value
                    },
                    font: {
                        size: 14, // Increase the font size of the labels
                        weight: 'bold', // Make the labels bold
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Set the color of the grid lines
                    lineWidth: 2, // Increase the thickness of the grid lines
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 14, // Increase the font size of the labels
                        weight: 'bold', // Make the labels bold
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Set the color of the grid lines
                    lineWidth: 2, // Increase the thickness of the grid lines
                }
            }
        },
        interaction: {
            mode: 'nearest', // Show the tooltip for the nearest data point
            intersect: false, // Trigger the tooltip even if not directly over the point
            axis: 'x', // Consider only the x-axis for determining the nearest point
        }
    };

    return (
        <div className='border-2 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300'>
            <h2 className='text-xl font-semibold mb-4'>monthly trials of donations</h2>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default MonthlyProgressForDonations;
