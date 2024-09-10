// src/components/AddressBalance.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressBalance = ({ address }) => {
  const [balanceHistory, setBalanceHistory] = useState([]);

  useEffect(() => {
    async function fetchBalance() {
      try {
        // Replace this with your actual API call or backend service
        const result = await axios.get(`/api/balance/${address}`);
        setBalanceHistory(result.data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
    fetchBalance();
  }, [address]);

  return (
    <div>
      <h2>Balance History for {address}</h2>
      <ul>
        {balanceHistory.length ? (
          balanceHistory.map((entry, idx) => (
            <li key={idx}>
              {entry.date}: {entry.balance}
            </li>
          ))
        ) : (
          <li>No balance data available</li>
        )}
      </ul>
    </div>
  );
};

export default AddressBalance;
