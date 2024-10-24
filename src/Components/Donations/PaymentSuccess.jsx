import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const { transaction_id } = useParams();
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const verifyPayment = async () => {
      const response = await fetch(`/verify-payment/${transaction_id}/`);
      const result = await response.json();
      if (result.status === 'success') {
        setStatus('Payment Successful!');
      } else {
        setStatus('Payment Failed.');
      }
    };

    if (transaction_id) {
      verifyPayment();
    }
  }, [transaction_id]);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default PaymentSuccess;
