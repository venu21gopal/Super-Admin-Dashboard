import React from 'react';
import './result.css';
import {Sidebarrr} from '../pagess/sidebarrr';


export const Result = () => {
  return (
    <div>
    <Sidebarrr/>
<div className='pine'>
    <div>
  <h3 className='pine-3'>Student Wise Result [Single]</h3>
 </div> 
    <div className='apple-33'>

  
  <div>
  <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut111">
           <option value="" disabled selected>Select Exam</option>
           <option value="option1">Last 2 Exams</option>
           <option value="option2">Last 3 Exams</option>
           <option value="option3">Last 4 Exams</option>
           
         </select>
       </div>
  </div>
  <div>
  <div class="InputContainerr1">
  <input type="text" name="text" class="iinput111" id="input" placeholder="Search Student"/>
  
  <label for="input" class="labelforsearch111">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
  </div>
 </div>
 </div>

 <div className='pine-1'>
    <div>
  <h3 className='pine-4'>Class Wise Result [Bulk]</h3>
 </div> 
    <div className='apple-333'>

  
  <div>
  <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut111">
           <option value="" disabled selected>Select Exam</option>
           <option value="option1">Last 2 Exams</option>
           <option value="option2">Last 3 Exams</option>
           <option value="option3">Last 4 Exams</option>
         </select>
       </div>
  </div>

  <div>
  <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut111">
           <option value="" disabled selected>Select Class</option>
           <option value="option1">Class 1</option>
           <option value="option2">Class 2</option>
           <option value="option3">Class 3</option>
         </select>
       </div>
  </div>

  <div>
  <div class="InputContainerr1">
  <input type="text" name="text" class="iinput111" id="input" placeholder="Search Student"/>
  
  <label for="input" class="labelforsearch111">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
  </div>
 </div>
 </div>
        </div>
  )
}
