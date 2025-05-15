import React, { useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 'TRX001',
      beneficiary: 'John Doe',
      amount: '₦450,000',
      date: '2025-05-14',
      status: 'Completed',
      type: 'Payment'
    },
    // Add more mock data as needed
  ]);

  // Component implementation similar to PendingTransactions
  // but with fields relevant to transaction history
  // ...rest of the implementation
};

export default TransactionHistory;