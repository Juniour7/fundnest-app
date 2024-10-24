import CustomPagination from "./Components/admindashboard/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { DataGrid } from "@mui/x-data-grid";
import { deleteDonation, getDonations } from "./services/DonationService";

const DonationsDetailTable = ({ context = "fullscreen" }) => { // Accept a 'context' prop
    const [donationDetails, setDonationDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchDonationDetails = async () => {
            try {
                const details = await getDonations();
                setDonationDetails(details);
                setFilteredRows(details);
            } catch (error) {
                console.error('Error fetching donation details:', error);
            }
        };

        fetchDonationDetails();
    }, []);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = donationDetails.filter(row =>
            row.donor_name.toLowerCase().includes(term) ||
            row.email.toLowerCase().includes(term) ||
            row.phone_number.toLowerCase().includes(term) ||
            row.donation_amount.toString().includes(term) ||
            row.currency.toLowerCase().includes(term) ||
            row.payment_method.toLowerCase().includes(term) ||
            row.transaction_reference.toLowerCase().includes(term) ||
            row.timestamp.toLowerCase().includes(term) ||
            row.campaign.toString().includes(term)
        );
        setFilteredRows(filtered);
    };
    // Define the columns for the DataGrid
const columns = [
    { field: 'donation_id', headerName: 'Donation ID', flex: 1, sortable: true },
    { field: 'donor_name', headerName: 'Donor Name', flex: 1.5, sortable: true },
    { field: 'email', headerName: 'Email', flex: 1.5, sortable: true },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1.5, sortable: true },
    { field: 'donation_amount', headerName: 'Donation Amount', flex: 1, sortable: true },
    { field: 'currency', headerName: 'Currency', flex: 0.8, sortable: true },
    { field: 'payment_method', headerName: 'Payment Method', flex: 1.2, sortable: true },
    { field: 'transaction_reference', headerName: 'Transaction Reference', flex: 2, sortable: true },
    { field: 'timestamp', headerName: 'Timestamp', flex: 1.5, sortable: true },
    { field: 'campaign', headerName: 'Campaign ID', flex: 1, sortable: true },
    {
        field: 'actions',
        headerName: 'Actions',
        flex: 0.5,
        sortable: false,
        renderCell: (params) => (
            <IconButton
                color="secondary"
                onClick={() => handleDelete(params.row.donation_id)}
            >
                <DeleteIcon />
            </IconButton>
        ),
    },
];


    const handleDelete = async (donationId) => {
        try {
            await deleteDonation(donationId);
            setDonationDetails(donationDetails.filter(donation => donation.donation_id !== donationId));
            setFilteredRows(filteredRows.filter(donation => donation.donation_id !== donationId));
        } catch (error) {
            console.error('Error deleting donation:', error);
        }
    };

    // Determine the class name based on context
    const containerClass = classNames("overflow-auto", {
        "h-96": context === "dashboard", // Example context-specific class
        "h-auto": context === "report",  // Another context-specific class
        "h-full": context === "fullscreen" // Another context-specific class
        // Add more contexts and corresponding classes as needed
    });

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Detailed Donations</h3>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full sm:text-sm p-2"
                />
            </div>
            <div className='overflow-auto'>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    getRowId={(row) => row.donation_id}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    components={{
                        Pagination: CustomPagination,
                    }}
                    pageSizeOptions={[5, 10, 15, 20, 25, 30, 35]}
                    checkboxSelection
                    disableSelectionOnClick
                    className="bg-white border border-gray-300 rounded-md shadow-sm"
                />
            </div>
        </div>
    );
};

export default DonationsDetailTable;
