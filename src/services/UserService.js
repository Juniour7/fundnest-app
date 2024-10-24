import api from "./api";

const API_URL = '/users';




export let users=0;
export const getUsers = async () => {
    const response = await api.get(API_URL);
users=response.data.length;
    return response.data;
};

export const createUser = async (userData) => {
    try {
        const response = await api.post(API_URL, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserDetails = async (userId) => {
    const response = await api.get(`${API_URL}/${userId}/`);
    return response.data;
};

export const updateUser = async (userId, userData) => {
    const response = await api.put(`${API_URL}/${userId}/`, userData);
    return response.data;
};

export const deleteUser = async (userId) => {
    await api.delete(`${API_URL}/${userId}/`);
};

