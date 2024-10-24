import api from './api';

const API_URL = '/withdrawals';

export const getWithdrawals = async () => {
    const response = await api.get(API_URL);
    return response.data;
};

export const createWithdrawal = async (withdrawalData) => {
    const response = await api.post(API_URL, withdrawalData);
    return response.data;
};

export const getWithdrawalDetails = async (withdrawalId) => {
    const response = await api.get(`${API_URL}/${withdrawalId}`);
    return response.data;
};

export const updateWithdrawal = async (withdrawalId, withdrawalData) => {
    const response = await api.put(`${API_URL}/${withdrawalId}`, withdrawalData);
    return response.data;
};

export const deleteWithdrawal = async (withdrawalId) => {
    await api.delete(`${API_URL}/${withdrawalId}`);
};
