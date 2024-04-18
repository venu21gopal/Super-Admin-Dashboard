import React from 'react';
import "./MarkEattendance.css";
import { Sidebarr } from './sidebarr';

export const MarkEattendance = () => {
  return (
    <div>
        <Sidebarr/>
        
    <div className='princee'>
      <h6>Choose  Employee Attendance Type</h6>
        <div className='fiilee2'>
         
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="iinpuuut1" />
        </div>
        
        
       <button className='button333'>
     Mark Manual Attendance
     </button>
     </div>
        </div>
  )
}
