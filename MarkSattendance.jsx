import React from 'react';
import  "./MarkSattendance.css";
import { Sidebarr } from './sidebarr';


export const MarkSattendance = () => {
  return (
    <div>
        <Sidebarr/>

          
    <div className='prince'>
      <h6>Mark Manual Attendance Class Wise</h6>
        <div className='fiilee2'>
         
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="inpuuut1" />
        </div>
        
        <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut11">
           <option value="" disabled selected>Select Class</option>
           <option value="option1">Class 1</option>
           <option value="option2">Class 2</option>
           <option value="option3">Class 3</option>
         </select>
       </div>
       <button className='button33'>
     Search
     </button>
     </div>   
        </div>
  )
}
