// import { useState } from 'react';
import './App.css';
import useDonationCenters from './hooks/useDonationCenters';

function App() {
  const { donationCenters } = useDonationCenters();
  console.log('App donationCenters state', donationCenters);

  return (
    <div className="App">
      <p>Learning is fun!</p>
      <ul>
        {donationCenters.map((center) => (
          <li key={center.id}>{center.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
