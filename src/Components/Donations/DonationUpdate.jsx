import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getDonationById, updateDonation } from '../api/DonationService';
import { getToken } from '../api/AuthService'; // Import getToken function

function DonationUpdate() {
    const { id } = useParams();
    const history = useHistory();
    const [donation, setDonation] = useState(null);
    const [formData, setFormData] = useState({
        donor_name: '',
        donation_amount: 0,
        payment_method: ''
    });

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const donationData = await getDonationById(id);
                setDonation(donationData);
                setFormData({
                    donor_name: donationData.donor_name,
                    donation_amount: donationData.donation_amount,
                    payment_method: donationData.payment_method
                });
            } catch (error) {
                console.error('Error fetching donation:', error);
            }
        };
        fetchDonation();
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = getToken(); 
            await updateDonation(id, formData, token); 
            history.push('/donations');
        } catch (error) {
            console.error('Error updating donation:', error);
        }
    };

    if (!donation) return <div>Loading...</div>;

    return (
        <div>
            <h2>Donation Update</h2>
            <div>
                <label>Donor Name:</label>
                <input type="text" name="donor_name" value={formData.donor_name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Donation Amount:</label>
                <input type="number" name="donation_amount" value={formData.donation_amount} onChange={handleInputChange} />
            </div>
            <div>
                <label>Payment Method:</label>
                <input type="text" name="payment_method" value={formData.payment_method} onChange={handleInputChange} />
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default DonationUpdate;
