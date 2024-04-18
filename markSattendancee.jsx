import React from 'react';
import './MarkSattendancee.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const MarkSattendancee = () => {
  return (
    <div>
        <Sidebarrr/>
        <div className='prince'>
          <h6>Mark Manual Attendance Class Wise</h6>
            <div className='displaay1'>
            <select name="dropdown" id="classDropdown" className="inpuuut11">
              <option value=" " disabled selected>Select Class</option>
              <option value="option1">Class 1</option>
              <option value="option2">Class 2</option>
              <option value="option3">Class 3</option>
            </select>
            </div>
          <button className='button33'>Search</button>
        </div>   
    </div>
  )
}
