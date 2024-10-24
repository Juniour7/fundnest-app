import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTransactionById, deleteTransaction } from '../../services/TransactionService';
import api from '../../services/api'; // Import your api object

function TransactionDelete() {
    const { id } = useParams();
    const history = useHistory();
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const token = api.getToken(); // Get the authentication token
                const transactionData = await getTransactionById(id, token); // Pass the token to getTransactionById
                setTransaction(transactionData);
            } catch (error) {
                console.error('Error fetching transaction:', error);
            }
        };
        fetchTransaction();
    }, [id]);

    const handleDelete = async () => {
        try {
            const token = api.getToken(); 
            await deleteTransaction(id, token); 
            history.push('/transactions');
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    if (!transaction) return <div>Loading...</div>;

    return (
        <div>
            <h2>Delete Transaction</h2>
            <p>Are you sure you want to delete this transaction?</p>
            <p>Transaction ID: {transaction.transaction_id}</p>
            <p>User ID: {transaction.user_id}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Description: {transaction.description}</p>
            <p>Transaction Type: {transaction.transaction_type}</p>
            <p>Payment Method: {transaction.payment_method}</p>
            <p>Reference Number: {transaction.reference_number}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TransactionDelete;
