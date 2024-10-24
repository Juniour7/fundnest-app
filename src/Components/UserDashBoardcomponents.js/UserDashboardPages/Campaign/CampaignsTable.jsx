import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import React, { useEffect, useMemo, useState } from "react";
import jsPDF from "jspdf";
import { faFileCsv, faFileExcel, faFilePdf, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import { ToastContainer, toast } from "react-toastify";
import { deleteCampaign, getCampaigns } from "../../../../services/CampaignService";
import { getLoggedInUseremail, getTempuser } from "../../../../services/api";
import { AddCampaignModal, UpdateCampaignModal } from "./CampaignModals";

 const CampaignTable = () => {
  
const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("campaign_name");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const { tempuserEmail, tempuserId } = getTempuser();
  const loggedInEmail = getLoggedInUseremail();
  const emailToUse = tempuserEmail || loggedInEmail;


  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns = await getCampaigns();
        const filteredCampaigns = campaigns.filter(campaign => campaign.campaign_user_email === emailToUse); 
        setData(filteredCampaigns);

      } catch (error) {
        toast.error("Failed to fetch campaigns");
      }
    };
    fetchCampaigns();
  },[data]);
  // Default column filter UI
  const DefaultColumnFilter = ({ column: { filterValue,setFilter } }) => (
    <input
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Search...`}
      className="mb-2 p-2 border rounded w-full"
    />
  );
  const filteredData = useMemo(() => {
    if (searchText) {
      return data.filter(campaign => campaign[searchField].toString().toLowerCase().includes(searchText.toLowerCase()));
    }
    return data;
  }, [data, searchText, searchField]);

  const columns = useMemo(
    () => [
      // { Header: "ID", accessor: "campaign_id" },
      { Header: "Name", accessor: "campaign_name", Cell: ({ cell: { value } }) => value.length > 10 ? `${value.substring(0, 10)}...` : value },
      { Header: "Target Amount", accessor: "target_amount" },

      { Header: "email", accessor: "current_amount" },

      { Header: "Start Date", accessor: "campaign_created_at", Cell: ({ cell: { value } }) => new Date(value).toLocaleDateString() },
      { Header: "End Date", accessor: "campaign_end_date", Cell: ({ cell: { value } }) => new Date(value).toLocaleDateString() },
      { Header: "Actions", Cell: ({ row }) => (
        <div>
          {/* <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(row.original)}>Update</button>{' '} */}
          {/* <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.original)}>Delete</button>{' '} */}
          <button className="btn btn-sm btn-info" onClick={() => handleView(row.original)}>View</button>{' '}
          <button className="btn btn-sm btn-secondary" onClick={() => handleShare(row.original)}>Share</button>
        </div>
      )},
    ],
    []
  );
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
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
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 },
      defaultColumn: { Filter: DefaultColumnFilter },
    },
  // useFilters,
    useSortBy,
    usePagination,
  );
 
  const handleUpdate = (campaign) => {
    setSelectedCampaign(campaign);
    setShowUpdateModal(true);
  };
  
  const handleView = (campaign) => {
    navigate(`/user-dashboard/campaign-detail/${campaign.campaign_id}`, { state: { campaign } });
  };

  const handleDelete = async (campaign) => {
    const confirmed = window.confirm(`Are you sure you want to delete campaign "${campaign.campaign_name}"?`);
    if (confirmed) {
      try {
        await deleteCampaign(campaign.campaign_id);
        setData(data.filter(c => c.campaign_id !== campaign.campaign_id));
        // window.location.reload();
        toast.success("Campaign deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete campaign");
      }
    }
  };
  const handleShare = (campaign) => {
    const campaignUrl = `https://iraady.com/#/donation-desc/${campaign.campaign_id}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Campaign Details',
        text: `Check out this campaign: ${campaign.campaign_name}`,
        url: campaignUrl
      })
      .then(() => toast.success("Campaign shared successfully!"))
      .catch(error => toast.error("Error sharing campaign: " + error));
    } else {
      toast.error("Sharing is not supported on this browser.");
    }
  };
  

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCampaign = {};
    formData.forEach((value, key) => {
      newCampaign[key] = key.includes('Money') ? parseFloat(value) : value;
    });
    newCampaign.campaign_id = data.length ? data[data.length - 1].campaign_id + 1 : 1;
    setData([...data, newCampaign]);
    setShowAddModal(false);
    toast.success("Campaign added successfully!");
  };

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCampaign = { ...selectedCampaign };
    formData.forEach((value, key) => {
      updatedCampaign[key] = key.includes('Money') ? parseFloat(value) : value;
    });
    setData(data.map(campaign => campaign.id === updatedCampaign.id ? updatedCampaign : campaign));
    setShowUpdateModal(false);
    toast.success("Campaign updated successfully!");
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

 

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Campaigns");
    XLSX.writeFile(workbook, "Campaigns.xlsx");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["ID", "Name", "Target Amount", "Current Amount", "Progress (%)", "Remaining Days", "Start Date", "End Date"];
    const tableRows = [];
    data.forEach(campaign => {
      const campaignData = [
        campaign.campaign_id,
        campaign.campaign_name,
        campaign.target_amount,
        campaign.current_amount,
        campaign.progress_percentage,
        campaign.remaining_days,
        new Date(campaign.campaign_created_at).toLocaleDateString(),
        new Date(campaign.campaign_end_date).toLocaleDateString()
      ];
      tableRows.push(campaignData);
    });
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Campaigns", 14, 15);
    doc.save("Campaigns.pdf");
  };

  return (
    <div> <h1 className="text-2xl font-bold mb-4">Campaign list</h1>
    <div className="mb-4 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          className="p-2 border rounded mr-2"
        />
<select value={searchField} onChange={handleSearchFieldChange} className="p-2 border rounded">
            <option value="campaign_name">Name</option>
            <option value="target_amount">Target Amount</option>
            <option value="current_amount">Current Amount</option>
            <option value="campaign_created_at">Start Date</option>
            <option value="campaign_end_date">End Date</option>
          </select>


      </div>
      <div className="flex">
        <button className="btn btn-success mr-2" onClick={() => setShowAddModal(true)}>
          <FontAwesomeIcon icon={faPlus} /> Add Campaign
        </button>
        <button className="btn btn-info mr-2" onClick={downloadExcel}>
          <FontAwesomeIcon icon={faFileExcel} /> Export to Excel
        </button>
        <button className="btn btn-danger mr-2" onClick={downloadPDF}>
          <FontAwesomeIcon icon={faFilePdf} /> Export to PDF
        </button>
        <CSVLink data={data} filename={"Campaigns.csv"}>
          <button className="btn btn-warning">
            <FontAwesomeIcon icon={faFileCsv} /> Export to CSV
          </button>
        </CSVLink>
      </div>
    </div>
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 shadow-lg">
  <thead className="bg-gray-100">
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th
            {...column.getHeaderProps(column.getSortByToggleProps())}
            className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            {column.render("Header")}
            <span>
            {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
          </span>
            <div>{column.canFilter ? column.render("Filter") : null}</div>
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
    {page.map(row => {
      prepareRow(row);
      const { ...restRowProps } = row.getRowProps();
      return (
        <tr key={row.original.campaign_id} {...row.getRowProps()} className="hover:bg-gray-50 transition duration-200 ease-in-out">
          {row.cells.map(cell => (
            <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {cell.render("Cell")}
            </td>
          ))}
        </tr>
      );
    })}
  </tbody>
</table>
<div className="pagination mt-4 flex items-center justify-between bg-white p-4 rounded shadow-md">
  <div className="flex items-center space-x-2">
    <button
      onClick={() => gotoPage(0)}
      disabled={!canPreviousPage}
      className={`px-3 py-1 border rounded ${!canPreviousPage ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {"<<"}
    </button>
    <button
      onClick={() => previousPage()}
      disabled={!canPreviousPage}
      className={`px-3 py-1 border rounded ${!canPreviousPage ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {"<"}
    </button>
    <button
      onClick={() => nextPage()}
      disabled={!canNextPage}
      className={`px-3 py-1 border rounded ${!canNextPage ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {">"}
    </button>
    <button
      onClick={() => gotoPage(pageCount - 1)}
      disabled={!canNextPage}
      className={`px-3 py-1 border rounded ${!canNextPage ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {">>"}
    </button>
  </div>
  <div className="flex items-center justify-between space-x-4 bg-white p-4 rounded shadow-md">
  <div className="flex items-center space-x-2">
    <span className="text-gray-700 text-sm">
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </span>
    <span className="flex items-center space-x-2 text-sm">
      <span>| Go to page:{" "}</span>
      <input
        type="number"
        defaultValue={pageIndex + 1}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
        className="px-2 py-1 border rounded w-16"
      />
    </span>
  </div>
  <select
    value={pageSize}
    onChange={e => setPageSize(Number(e.target.value))}
    className="px-3 py-2 border rounded text-sm bg-gray-50"
  >
    {[5, 4, 30, 40, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
</div>

</div>


      <ToastContainer />
      <AddCampaignModal show={showAddModal} handleClose={() => setShowAddModal(false)} />
      <UpdateCampaignModal show={showUpdateModal} handleClose={() => setShowUpdateModal(false)}  campaign={selectedCampaign} />
    
    </div>
  );
};

export default CampaignTable;
