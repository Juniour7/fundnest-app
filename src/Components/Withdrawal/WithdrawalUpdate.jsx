import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getWithdrawalById, updateWithdrawal } from '../../services/WithdrawalService';
import api from '../../services/api';

function WithdrawalUpdate() {
    const { id } = useParams();
    const history = useHistory();
    const [withdrawal, setWithdrawal] = useState(null);
    const [formData, setFormData] = useState({
        amount: 0,
        description: '',
        withdrawal_method: ''
    });

    useEffect(() => {
        const fetchWithdrawal = async () => {
            try {
                const token = api.getToken();
                const withdrawalData = await getWithdrawalById(id, token);
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
            history.push('/withdrawals');
        } catch (error) {
            console.error('Error updating withdrawal:', error);
        }
    };

    if (!withdrawal) return <div>Loading...</div>;

    return (
        <div>
            <h2>Withdrawal Update</h2>
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
        </div>
    );
}

export default WithdrawalUpdate;
