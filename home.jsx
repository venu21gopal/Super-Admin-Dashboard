import React from 'react';
import './home.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const Home = () => {
  return (
    <div>
        <Sidebarrr/>
 <div className='apple'>
  <h2 className='apple-1'>Home Work</h2>
  <button className='apple-2'>+Add Homework</button>
 </div>
 <div className='apple-3'>
  <div>
  <div className='fiilee2'>
         
         <input type="date" id="dateOfBirth" name="dateOfBirth" className="inpuuut1" />
       </div>
      
  </div>
  <div>
  <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut11">
           <option value="" disabled selected>All Classes</option>
           <option value="option1">Class 1</option>
           <option value="option2">Class 2</option>
           <option value="option3">Class 3</option>
         </select>
       </div>
  </div>
  <div>
  <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuuut11">
           <option value="" disabled selected>Teacher</option>
           <option value="option1"></option>
           <option value="option2"></option>
           <option value="option3"></option>
           
         </select>
       </div>
  </div>
  <div>
  <div class="InputContainerr">
  <input type="text" name="text" class="iinput11" id="input" placeholder="Search"/>
  
  <label for="input" class="labelforsearch11">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
  </div>
 </div>

 <div className='apple-4'>
  <p>No Data Found</p>
 </div>


        </div>
  )
}
