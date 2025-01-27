import React from 'react';

function App() {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <div className="separator"></div>
      <div className="pricing-card">
        <h2>Pro</h2>
        <p>For individuals — build your UX skills & design career with unlimited access</p>
        <div className="price">Rp60,000</div>
        <div className="price-details">per month, paid yearly</div>
        <ul>
          <li>Access full content library</li>
          <li>Certificates of course completion</li>
          <li>Real-world design challenges</li>
          <li>Professional challenge reviews</li>
          <li>Personalized profile URL</li>
          <li>Career path</li>
          <li>Discount on professional certification</li>
        </ul>
        <button>Get started</button>
      </div>
    </div>
  );
}

export default App;
