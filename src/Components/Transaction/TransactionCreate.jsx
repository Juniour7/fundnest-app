import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../../services/TransactionService';
import api from '../../services/api'; 

function TransactionCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        transaction_type: '',
        payment_method: '',
        reference_number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            await createTransaction(formData, token); 
            navigate('/transactions');
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    return (
        <div>
            <h2>Create Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    Transaction Type:
                    <select name="transaction_type" value={formData.transaction_type} onChange={handleChange}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </label>
                <label>
                    Payment Method:
                    <input type="text" name="payment_method" value={formData.payment_method} onChange={handleChange} />
                </label>
                <label>
                    Reference Number:
                    <input type="text" name="reference_number" value={formData.reference_number} onChange={handleChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default TransactionCreate;
