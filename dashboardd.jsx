import React from 'react';
import './dashboardd.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const Dashboardd = () => {
  return (
    <div>

     <Sidebarrr/>
    <div className='orange'>
      <div className='orange-1'>
      </div>
    <div className="cards-total">
    <div className="cards red">
        <p className="tip">Total Absent Students</p>
        <p className="second-text">Attendance</p>
    </div>
    <h2 className='text-start1'>1.Attendance Report</h2>
    <div className="cards blue">
        <p className="tip">Total Present Employee</p>
        <p className="second-text">This month</p>
    </div>
    <h2 className='text-start2'>2.Salary Record</h2>
    <div className="cards green">
        <p className="tip">New Admission</p>
        <p className="second-text">This month</p>
    </div>
</div>
    </div>

    </div>
  )
}
