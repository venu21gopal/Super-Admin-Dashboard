import React from 'react';
import "./allstudents.css";
import { Sidebarr } from './sidebarr';


export const Allstudents = () => {
  return (
    <div className='bodyy21'>
        <Sidebarr/>
        <div className='flex'>
        <div class="InputContainer">
  <input type="text" name="text" class="iinput" id="input" placeholder="Search Student"/>
  
  <label for="input" class="labelforsearch">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
        <div className='displayyy22'>
    <select name="dropdown" class="inputtt6">
      <option value="" disabled selected>Select Class</option>
      <option value="option1"></option>
      <option value="option2"></option>
      <option value="option3"></option>
    </select>
  </div>
  
  </div>

<div class="ccards">
    <div class="ccard red">
        <h2 class="ttip">+Add New</h2>
        
    </div>
   
</div>
        </div>
  )
}
