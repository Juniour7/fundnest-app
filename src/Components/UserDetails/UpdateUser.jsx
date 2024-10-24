import React, { useState } from "react";
import api from "../../services/api";
import { updateUser } from "../../services/UserService";

function UpdateUser() {
    const [userId, setUserId] = useState(1);
    const [userData, setUserData] = useState({
        organization_name : '',
        first_name: '',
        last_name: '',
        phone_number: '',
        organization_type: '',
        organization_description: '',
        organization_website: '',
        email: '',
        password_hash: '',
        agreeterms: false,
        mailing_list: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const token = api.getToken(); // Fetch token from api.js
            const updatedUser = await updateUser(userId, userData, token);
    
        } catch (error) {
            console.error('Failed to update user', error);
        }
    };

    return (
        <div>
            <h2>Update User</h2>
            <input type="text" name="organization_name" placeholder="Organization Name" value={userData.organization_name} onChange={handleChange} />
            <input type="text" name="first_name" placeholder="First Name" value={userData.first_name} onChange={handleChange} />
            <input type="text" name="last_name" placeholder="Last Name" value={userData.last_name} onChange={handleChange} />
            <input type="text" name="phone_number" placeholder="Phone Number" value={userData.phone_number} onChange={handleChange} />
            <input type="text" name="organization_type" placeholder="Organization Type" value={userData.organization_type} onChange={handleChange} />
            <input type="text" name="organization_description" placeholder="Organization Description" value={userData.organization_description} onChange={handleChange} />
            <input type="text" name="organization_website" placeholder="Organization Website" value={userData.organization_website} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
            <input type="password" name="password_hash" placeholder="Password" value={userData.password_hash} onChange={handleChange} />
            <button onClick={handleUpdate}>Update User</button>
        </div>
    );
}

export default UpdateUser;
