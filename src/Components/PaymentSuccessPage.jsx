import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentSuccessPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const txRef = queryParams.get("tx_ref");
  const campaignId = queryParams.get("campaign_id");

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        await axios.get(`https://backend.iraady.com:8000/payment/success/?tx_ref=${txRef}&campaign_id=${campaignId}`);
        // Show success message or redirect the user
      } catch (error) {
        console.error("Payment confirmation error:", error);
      }
    };

    confirmPayment();
  }, [txRef, campaignId]);

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your donation!</p>
    </div>
  );
};

export default PaymentSuccessPage;
