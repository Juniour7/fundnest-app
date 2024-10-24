import React, { useState } from "react";
import api from "../../services/api";
import { createUser } from "../../services/UserService";

function CreateUser() {
    const [userData, setUserData] = useState({
        organization_name: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        organization_type: '',
        organization_description: '',
        organization_website: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken(); 
            const newUser = await createUser(userData, token);
         
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create User</h1>
            <input type="text" name="organization_name" placeholder="Organization Name" onChange={handleChange} />
            <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} />
            <input type="number" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
            <input type="text" name="organization_type" placeholder="Organization Type" o3nChange={handleChange} />
            <input type="text" name="organization_description" placeholder="Organization Description" onChange={handleChange} />
            <input type="text" name="organization_website" placeholder="Organization Website" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password_hash" placeholder="Password" onChange={handleChange} />
            <button type="submit">Create User</button>
        </form>
    );
}

export default CreateUser;
