import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWithdrawals } from '../../services/WithdrawalService';
import api from '../../services/api';

function WithdrawalList() {
    const [withdrawals, setWithdrawals] = useState([]);

    useEffect(() => {
        const fetchWithdrawals = async () => {
            try {
                const token = api.getToken();
                const withdrawalData = await getWithdrawals(token);
                setWithdrawals(withdrawalData);
            } catch (error) {
                console.error('Error fetching withdrawals:', error);
            }
        };
        fetchWithdrawals();
    }, []);

    return (
        <div>
            <h2>Withdrawal List</h2>
            <ul>
                {withdrawals.map(withdrawal => (
                    <li key={withdrawal.id}>
                        <Link to={`/withdrawals/${withdrawal.id}`}>{withdrawal.id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WithdrawalList;
