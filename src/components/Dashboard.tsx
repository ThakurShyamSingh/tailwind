import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="topbar">Dashboard</div>
      <div className="chart-container pie">
        <h2>Pie Chart</h2>
        {/* Add Pie Chart Component */}
      </div>
      <div className="chart-container bar">
        <h2>Bar Chart</h2>
        {/* Add Bar Chart Component */}
      </div>
    </div>
  );
};

export default Dashboard;