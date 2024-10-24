import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getWithdrawalDetails, updateWithdrawal, deleteWithdrawal } from '../../services/WithdrawalService';
import api from '../../services/api';

function WithdrawalDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [withdrawal, setWithdrawal] = useState(null);
    const [formData, setFormData] = useState({
        amount: 0,
        description: '',
        withdrawal_method: ''
    });

    useEffect(() => {
        const fetchWithdrawal = async () => {
            try {
                const withdrawalData = await getWithdrawalDetails(id);
                setWithdrawal(withdrawalData);
                setFormData({
                    amount: withdrawalData.amount,
                    description: withdrawalData.description,
                    withdrawal_method: withdrawalData.withdrawal_method
                });
            } catch (error) {
                console.error('Error fetching withdrawal:', error);
            }
        };
        fetchWithdrawal();
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = api.getToken();
            await updateWithdrawal(id, formData, token);
            navigate('/withdrawals');
        } catch (error) {
            console.error('Error updating withdrawal:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const token = api.getToken();
            await deleteWithdrawal(id, token);
            navigate('/withdrawals');
        } catch (error) {
            console.error('Error deleting withdrawal:', error);
        }
    };

    if (!withdrawal) return <div>Loading...</div>;

    return (
        <div>
            <h2>Withdrawal Detail</h2>
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
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default WithdrawalDetail;
