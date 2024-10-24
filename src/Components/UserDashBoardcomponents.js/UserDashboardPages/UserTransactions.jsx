import "jspdf-autotable";
import * as XLSX from "xlsx";
import React, { useEffect, useMemo, useState } from "react";
import api, { getLoggedInUseremail, getTempuser } from "../../../services/api.js";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

const MyStatement = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const userId = localStorage.getItem("userId");
      const { tempuserEmail, tempuserId } = getTempuser();
      const loggedInEmail = getLoggedInUseremail();
      const emailToUse = tempuserEmail || loggedInEmail;
      const userIdToUse = tempuserId || userId;
      try {
        const transactions = await api.get(`/user-transactions/${userIdToUse}`);
        setData(transactions.data || []);
        setFilteredData(transactions.data || []);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    const maskedName = name.length > 2 ? `${name.slice(0, 2)}***` : `${name.charAt(0)}***`;
    return `${maskedName}@${domain}`;
  };

  // Explicitly define every column
  const columns = useMemo(
    () => [
      {
        Header: "number",
        accessor: (_, index) => index + 1, // Auto-generate the row number
        disableSortBy: true,
      },
      // {
      //   Header: "Transaction ID",
      //   accessor: "id", // The key from your data
      // },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => maskEmail(value), // Mask email for privacy
      },
      {
        Header: "Amount",
        accessor: "amount", // The key from your data
      },
      {
        Header: "Currency",
        accessor: "currency", // The key from your data
      },
      {
        Header: "Status",
        accessor: "status", // The key from your data
      },
      {
        Header: "Timestamp",
        accessor: "timestamp", // The key from your data
      },
    ],
    []
  );

  const prepareExportData = (data) => {
    return data.map((row) => ({
      ...row,
      email: maskEmail(row.email),
    }));
  };

  const exportToPDF = () => {
    if (filteredData.length === 0) {
      alert("No data available to export.");
      return;
    }

    const exportData = prepareExportData(filteredData);
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map((col) => col.Header)], // Use the headers from columns
      body: exportData.map((row) => columns.map((col) => row[col.accessor] || "")),
    });
    doc.save("statements.pdf");
  };

  const exportToExcel = () => {
    if (filteredData.length === 0) {
      alert("No data available to export.");
      return;
    }

    const exportData = prepareExportData(filteredData);
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Statements");
    XLSX.writeFile(workbook, "statements.xlsx");
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Use page for pagination
    prepareRow,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data: filteredData, initialState: { pageIndex: 0, pageSize: 10 } },
    useGlobalFilter, // Enable search
    useSortBy, // Enable sorting
    usePagination // Enable pagination
  );

  const handleSearch = (event) => {
    const value = event.target.value || "";
    setGlobalFilter(value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold m-4">My Statement (Transactions)</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search transactions..."
          className="p-2 border rounded w-full"
          onChange={handleSearch}
        />
      </div>

      <div className="mt-2 mb-2 flex space-x-2 justify-end">
        {filteredData.length > 0 ? (
          <>
            <CSVLink
              data={prepareExportData(filteredData)}
              filename="statements.csv"
              className="p-2 border rounded bg-blue-500 text-white"
            >
              Export CSV
            </CSVLink>
            <button onClick={exportToPDF} className="p-2 border rounded bg-red-500 text-white">
              Export PDF
            </button>
            <button onClick={exportToExcel} className="p-2 border rounded bg-green-500 text-white">
              Export Excel
            </button>
          </>
        ) : (
          <p>No data available to export.</p>
        )}
      </div>

      {filteredData.length > 0 ? (
        <>
          <table {...getTableProps()} className="w-full border-collapse border text-left">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="border p-2 bg-gray-200">
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-100">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="border p-2">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination mt-4 flex justify-between items-center">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="p-2 border rounded bg-gray-300">
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="p-2 border rounded bg-gray-300">
              {"<"}
            </button>
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="p-2 border rounded bg-gray-300">
              {">"}
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="p-2 border rounded bg-gray-300">
              {">>"}
            </button>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="p-2 border rounded"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <p className="text-center mt-4">No transactions available.</p>
      )}
    </div>
  );
};

export default MyStatement;
