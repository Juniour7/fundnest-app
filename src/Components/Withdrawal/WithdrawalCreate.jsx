import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWithdrawal } from '../../services/WithdrawalService';
import api from '../../services/api'; 

function WithdrawalCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: 0,
        description: '',
        withdrawal_method: '',
        reference_number: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            await createWithdrawal(formData, token); 
            navigate('/withdrawals');
        } catch (error) {
            console.error('Error creating withdrawal:', error);
        }
    };

    return (
        <div>
            <h2>Create Withdrawal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount:</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Withdrawal Method:</label>
                    <input type="text" name="withdrawal_method" value={formData.withdrawal_method} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Reference Number:</label>
                    <input type="text" name="reference_number" value={formData.reference_number} onChange={handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default WithdrawalCreate;
