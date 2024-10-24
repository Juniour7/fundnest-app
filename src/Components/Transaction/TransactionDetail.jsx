import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionById } from '../../services/TransactionService';
import api from '../../services/api';

function TransactionDetail() {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const token = api.getToken();
                const transactionData = await getTransactionById(id, token);
                setTransaction(transactionData);
            } catch (error) {
                console.error('Error fetching transaction:', error);
            }
        };
        fetchTransaction();
    }, [id]);

    if (!transaction) return <div>Loading...</div>;

    return (
        <div>
            <h2>Transaction Detail</h2>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Type: {transaction.transaction_type}</p>
            <p>Payment Method: {transaction.payment_method}</p>
            <p>Reference Number: {transaction.reference_number}</p>
            <p>User ID: {transaction.user_id}</p>
        </div>
    );
}

export default TransactionDetail;
