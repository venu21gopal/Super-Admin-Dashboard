import React from 'react';
import "./employeesAreport.css"
import { Sidebarr } from './sidebarr';

export const EmployeesAreport = () => {
  return (
    <div>
        <Sidebarr/>
        EmployeesAreport
        <div className='redd'>
        <div className='red-46'>
          <div className='red-47'>
        <button className='bbutton3333'>
     Copy
     </button>
     <button className='bbutton3333'>
    CSV
     </button>
     </div>
     <div className='red-48'>
     <button className='bbutton3333'>
     Excel
     </button>
     <button className='bbutton3333'>
     PDF
     </button>
     </div>
     <div className='red-49'>
     <button className='bbutton3333'>
    Print
     </button>
     <select className='ddropdownButton'>
     <option value=''>Column visibility</option>
        <option value='option1'>DATE</option>
        <option value='option2'>DAY</option>
        <option value='option3'>ID</option>
        
        <option value='option1'>NAME</option>
        <option value='option2'>TYPE</option>
        <option value='option3'>STATUS</option>
        <option value='option3'>TIME</option>
      </select>
      </div>
      </div>
      <div>
      <div class="InputContainerrr11">
  <input type="text" name="text" class="iiinput1111" id="input" placeholder="Search"/>
  
  <label for="input" class="llabelforsearch1111">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
</div>
</div>

<table className='table-211'>
  <tr>
    <th>DATE</th>
    <th>DAY</th>
    <th>ID</th>
    <th>NAME</th>
    <th>TYPE</th>
    <th>STATUS</th>
    <th>TIME</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
  <tr>
    <td>02</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
  <tr>
    <td>04</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
  <tr>
    <td>05</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
  <tr>
    <td>06</td>
    <td>Griffin</td>
    <td>Lois</td>
    <td>Griffin@21</td>
    <td>98754515645</td>
    <td>9999</td>
    <td>9999</td>
  </tr>
</table>

<div className='greenn'>
<button className='buttonnn33333'>
      Next
     </button>
     <button className='buttonnn33333'>
     Pervious
     </button>
     </div>

    </div>
  )
}
