import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDonations } from '../../services/DonationService';
import api from '../../services/api'; 

function DonationList() {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const token = api.getToken(); 
                const donationData = await getDonations(token); 
                setDonations(donationData);
            } catch (error) {
                console.error('Error fetching donations:', error);
            }
        };
        fetchDonations();
    }, []);

    return (
        <div>
            <h2>Donation List</h2>
            <ul>
                {donations.map(donation => (
                    <li key={donation.donation_id}>
                        <Link to={`/donations/${donation.donation_id}`}>{donation.donor_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DonationList;
