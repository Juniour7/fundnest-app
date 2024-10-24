import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { createDonation } from '../../services/DonationService';

function DonationCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        donor_name: '',
        email: '',
        phone_number: '',
        donation_amount: '',
        currency: 'USD',
        payment_method: '',
        //campaign: null
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = api.getToken();
            await createDonation(formData, token);
            navigate('/donations');
        } catch (error) {
            console.error('Error creating donation:', error);
        }
    };

    return (
        <div>
            <h2>Create Donation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Donor Name:</label>
                    <input type="text" name="donor_name" value={formData.donor_name} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Donation Amount:</label>
                    <input type="number" name="donation_amount" value={formData.donation_amount} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Currency:</label>
                    <select name="currency" value={formData.currency} onChange={handleInputChange} required>
                        <option value="USD">USD</option>
                        <option value="KES">KES</option>
                        <option value="NGN">NGN</option>
                        <option value="RWF">RWF</option>
                        <option value="UGX">UGX</option>
                        <option value="TZS">TZS</option>
                        <option value="XOF">XOF</option>
                        <option value="XAF">XAF</option>
                        <option value="GHS">GHS</option>
                        <option value="ZAR">ZAR</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="MWK">MWK</option>
                    </select>
                </div>
                <div>
                    <label>Payment Method:</label>
                    <input type="text" name="payment_method" value={formData.payment_method} onChange={handleInputChange} required/>
                </div>
                <button type="submit">Proceed to Payment</button>
            </form>
        </div>
    );
}

export default DonationCreate;
