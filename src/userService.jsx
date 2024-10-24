import { Navigate } from "react-router-dom";

const API_URL = 'https://backend.iraady.com:8000/';  

export async function getUsers(token) {
    const response = await fetch(`${API_URL}/users/`, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function createUser(data) {
    const response = await fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function getUserDetails(userId, token) {
    const response = await fetch(`${API_URL}/users/${userId}/`, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function updateUser(userId, data, token) {
    const response = await fetch(`${API_URL}/users/${userId}/`, {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function deleteUser(userId, token) {
    await fetch(`${API_URL}/users/${userId}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${token}`
        }
    });
}
 export const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('userEmail');
    return isAuthenticated ? children : <Navigate to="/sign-in" />;
  };
  export const PrivateAdminRoutes = ({ children }) => {
    const isAuthenticated = localStorage.getItem('adminEmail');
    const role = localStorage.getItem('role');

    return isAuthenticated && role === 'admin' ? children : <Navigate to="/" />;
 
  };