// src/App.js
import React, { useState } from 'react';
import AddressBalance from './components/AddressBalance';
import TransactionGraph from './components/TransactionGraph';

function App() {
  // Example data representing wallets and transactions
  const transactionData = {
    nodes: [
      { id: 'Wallet A' },
      { id: 'Wallet B' },
      { id: 'Wallet C' },
      { id: 'Wallet D' },
      { id: 'Wallet E' },
      { id: 'Wallet F' },
      { id: 'Wallet G' },
    ],
    links: [
      { source: 'Wallet A', target: 'Wallet B', value: 50 },
      { source: 'Wallet B', target: 'Wallet C', value: 30 },
      { source: 'Wallet A', target: 'Wallet C', value: 70 },
      { source: 'Wallet D', target: 'Wallet A', value: 10 },
      { source: 'Wallet E', target: 'Wallet A', value: 10 },
      { source: 'Wallet F', target: 'Wallet E', value: 10 },
      { source: 'Wallet C', target: 'Wallet G', value: 10 },
    ]
  };

  const [selectedAddress, setSelectedAddress] = useState('Wallet A');

  return (
    <div className="App">
      <h1>Cryptocurrency Transaction Flow Tracker</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Transaction Graph */}
        <div>
          <h2>Transaction Flow</h2>
          <TransactionGraph data={transactionData} />
        </div>
        {/* Address Balance Component */}
        <div>
          <h2>Balance History</h2>
          <AddressBalance address={selectedAddress} />
        </div>
      </div>
    </div>
  );
}

export default App;
