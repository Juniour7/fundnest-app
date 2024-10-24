import Button from "@mui/material/Button";
import CustomPagination from "./Components/admindashboard/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { deleteTransaction, getTransactions } from "./services/TransactionService";

const TransactionDetailsTable = ({ height = 'screen' }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await getTransactions();
        const processedRows = transactions.map((transaction) => ({
          id: transaction.id,
          transaction_id: transaction.id,
          // email: transaction.email,
          amount: transaction.amount,
          currency: transaction.currency,
          reference: transaction.tx_ref,
          status: transaction.status,
          timestamp: new Date(transaction.timestamp).toLocaleString(),
          campaign: transaction.campaign,
        }));
        setRows(processedRows);
      } catch (err) {
        console.log('Error fetching transactions:', err);

      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleDelete = async () => {
    try {
      setConfirmOpen(false);  // Close the confirmation dialog upon success
      await deleteTransaction(selectedTransaction.transaction_id);
      setRows(rows.filter(row => row.transaction_id !== selectedTransaction.transaction_id));
    } catch (err) {
      console.error('Failed to delete transaction:', err);
      setError('Failed to delete transaction');
    }
  };

  const handleDeleteClick = (transaction) => {
    setSelectedTransaction(transaction);
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
  };

  const columns = [
    { field: 'transaction_id', headerName: 'Transaction ID', flex: 1, sortable: true },
    // { field: 'email', headerName: 'Email', flex: 2, sortable: true },
    { field: 'amount', headerName: 'Amount', flex: 1, sortable: true },
    { field: 'currency', headerName: 'Currency', flex: 1, sortable: true },
    { field: 'reference', headerName: 'Reference', flex: 2, sortable: true },
    { field: 'status', headerName: 'Status', flex: 1, sortable: true },
    { field: 'timestamp', headerName: 'Timestamp', flex: 2, sortable: true },
    { field: 'campaign', headerName: 'Campaign ID', flex: 1, sortable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 2,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton color="secondary" onClick={() => handleDeleteClick(params.row)}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`overflow-auto h-${height}`}>
      <h3 className="text-lg font-semibold mb-4">Transaction List</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        components={{
          Pagination: CustomPagination,
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            top: 100,
            zIndex: 1,
            backgroundColor: 'white',
          },
        }}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        onClose={handleCloseConfirm}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this transaction?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Transaction Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedTransaction && JSON.stringify(selectedTransaction, null, 2)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TransactionDetailsTable;
