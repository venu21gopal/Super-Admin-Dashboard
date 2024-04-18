import React from 'react';
import './Dashboard.css';
import { Sidebarr } from "./sidebarr.jsx";


export const Dashboard = () => {
  return (
    
    <div className='bodyy21'>
        <Sidebarr/>
    <div className="cards-1">
    <div className="card red">
        <p className="tip">Total Students</p>
        <p className="second-text">This Month</p>
    </div>
    <div className="card blue">
        <p className="tip">Total Employee</p>
        <p className="second-text">This month</p>
    </div>
    <div className="card green">
        <p className="tip">Revenue</p>
        <p className="second-text">This month</p>
    </div>
    <div className="card purple">
        <p className="tip">Total Profits</p>
        <p className="second-text">This month</p>
    </div>
</div>

<div className="cards-total">
    <div className="cards red">
        <p className="tip">Total Absent Students</p>
        <p className="second-text">Attendance</p>
    </div>
    <div className="cards blue">
        <p className="tip">Total Present Employee</p>
        <p className="second-text">This month</p>
    </div>
    <div className="cards green">
        <p className="tip">New Admission</p>
        <p className="second-text">This month</p>
    </div>
</div>
    </div>
  )
}
