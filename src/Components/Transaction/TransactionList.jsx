import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTransactions } from '../../services/TransactionService';
import api from '../../services/api'; 

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const token = api.getToken(); 
                const transactionsData = await getAllTransactions(token);
                setTransactions(transactionsData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.transaction_id}>
                        <Link to={`/transactions/${transaction.transaction_id}`}>
                            {transaction.description} - Amount: {transaction.amount} - Type: {transaction.transaction_type}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
