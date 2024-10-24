import React, { useState } from "react";
import api from "../../services/api";
import { deleteUser } from "../../services/UserService";

function DeleteUser() {
    const [userId, setUserId] = useState(1);

    const handleDelete = async () => {
        try {
            const token = api.getToken(); 
            await deleteUser(userId, token); 
      
        } catch (error) {
            console.error('Failed to delete user', error);
        }
    };

    return (
        <div>
            <h2>Delete User</h2>
            <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleDelete}>Delete User</button>
        </div>
    );
}

export default DeleteUser;
