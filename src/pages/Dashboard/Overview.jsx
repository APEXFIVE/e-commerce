import React from 'react'

const Overview = () => {
  return (
    <div className="overview">
    <h2>Overview</h2>
    <div className="summary-cards">
      <div className="card">
        <h3>Total Sales</h3>
        <p>0</p>
      </div>
      <div className="card">
        <h3>Total Orders</h3>
        <p>0</p>
      </div>
      <div className="card">
        <h3>Unique Customers</h3>
        <p>0</p>
      </div>
      <div className="card">
        <h3>Average Order Value</h3>
        <p>0</p>
      </div>
    </div>
    
    <div className="alerts">
      <h3>Alerts</h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  )
}

export default Overview;