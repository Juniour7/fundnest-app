import * as XLSX from "xlsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { DataGrid } from "@mui/x-data-grid";
import { CSVLink } from "react-csv";

import api, { getLoggedInUseremail, getTempuser } from'../../../services/api.js'

const RecentDonorsTable = () => {
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const { tempuserEmail, tempuserId } = getTempuser();
    const loggedInEmail = getLoggedInUseremail();
    const emailToUse = tempuserEmail || loggedInEmail;
    const userIdToUse = tempuserId || userId;

    api.get(`/user-donations/${userIdToUse}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Define columns with all fields you want to display and filter
  const columns = [
    { field: 'donor_name', headerName: 'Donor', width: 200 },
    { field: 'donation_amount', headerName: 'Amount', width: 150 },
    { field: 'phone_number', headerName: 'Telephone', width: 150 },
    { field: 'timestamp', headerName: 'Date', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },  // Assuming 'email' is in your data
    { field: 'transaction_reference', headerName: 'Transaction Ref.', width: 200 },  // Assuming 'transaction_reference' is in your data
  ];

  // Filter data based on the filterInput across all fields
  const filteredData = data.filter(row =>
    Object.keys(row).some(field =>
      row[field]?.toString().toLowerCase().includes(filterInput.toLowerCase())
    )
  );

  // Function to export data to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map(col => col.headerName)],
      body: filteredData.map(row => columns.map(col => row[col.field]?.toString() || '')),
    });
    doc.save('donors.pdf');
  };

  // Function to export data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Donors');
    XLSX.writeFile(workbook, 'donors.xlsx');
  };

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Recent Donors</h2>
      <span className='flex items-center justify-between'>
        <input
          value={filterInput}
          onChange={e => setFilterInput(e.target.value)}
          placeholder='Search Donors'
          className='p-2 border rounded w-32'
        />
        <div className='mt-4 flex space-x-2 justify-end'>
          <CSVLink
            data={filteredData}
            filename='donors.csv'
            className='p-2 border rounded bg-blue-500 text-white flex'
          >
            Export CSV
          </CSVLink>
          <button
            onClick={exportToPDF}
            className='p-2 border rounded bg-red-500 text-white'
          >
            Export PDF
          </button>
          <button
            onClick={exportToExcel}
            className='p-2 border rounded bg-green-500 text-white'
          >
            Export Excel
          </button>
        </div>
      </span>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(row) => row.donation_id}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 30, 40, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default RecentDonorsTable;
