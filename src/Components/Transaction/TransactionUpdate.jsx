import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTransactionById, updateTransaction } from '../../services/TransactionService';
import { getAuthToken } from '../services/AuthService'; 

function TransactionUpdate() {
    const { id } = useParams();
    const history = useHistory();
    const [transaction, setTransaction] = useState(null);
    const [formData, setFormData] = useState({
        amount: 0,
        description: '',
        transaction_type: '',
        payment_method: '',
        reference_number: ''
    });

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const token = getAuthToken(); 
                const transactionData = await getTransactionById(id, token);
                setTransaction(transactionData);
                setFormData({
                    amount: transactionData.amount,
                    description: transactionData.description,
                    transaction_type: transactionData.transaction_type,
                    payment_method: transactionData.payment_method,
                    reference_number: transactionData.reference_number
                });
            } catch (error) {
                console.error('Error fetching transaction:', error);
            }
        };
        fetchTransaction();
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = getAuthToken(); 
            await updateTransaction(id, formData, token);
            history.push('/transactions');
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    };

    if (!transaction) return <div>Loading...</div>;

    return (
        <div>
            <h2>Transaction Update</h2>
            <div>
                <label>Amount:</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" name="transaction_type" value={formData.transaction_type} onChange={handleInputChange} />
            </div>
            <div>
                <label>Payment Method:</label>
                <input type="text" name="payment_method" value={formData.payment_method} onChange={handleInputChange} />
            </div>
            <div>
                <label>Reference Number:</label>
                <input type="text" name="reference_number" value={formData.reference_number} onChange={handleInputChange} />
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default TransactionUpdate;
