import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserService';
import api from '../../services/api'; 

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const token = api.getToken(); 
                const data = await getUsers(token); 
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.user_id}>
                        <p>Organization Name: {user.organization_name}</p>
                        <p>First Name: {user.first_name}</p>
                        <p>Last Name: {user.last_name}</p>
                        <p>Phone Number: {user.phone_number}</p>
                        <p>Organization Type: {user.organization_type}</p>
                        <p>Organization Description: {user.organization_description}</p>
                        <p>Organization Website: {user.organization_website}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
