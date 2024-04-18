import React from 'react';
import "./studentsAreport.css";
import { Sidebarr } from './sidebarr';

export const StudentsAreport = () => {
  return (
    <div>
        <Sidebarr/>
        <div className='red-21'>
        <div className='red-46'>
          <div className='red-47'>
        <button className='button33333'>
     Copy
     </button>
     <button className='button33333'>
     CSV
     </button>
     </div>
     <div className='red-48'>
     <button className='button33333'>
     Excel
     </button>
     
     
     <button className='button33333'>
     PDF
     </button>
     </div>
     <div className='red-49'>
     <button className='button33333'>
     Print
     </button>
     <select className='dropdownButton'>
     <option value=''>Column visibility</option>
        <option value='option1'>DATE</option>
        <option value='option2'>DAY</option>
        <option value='option3'>ID</option>
        <option value='option1'>NAME</option>
        <option value='option2'>CLASS</option>
        <option value='option3'>STATUS</option>
      </select>
      </div>
      </div>
      <div>
      <div class="InputContainerrr1">
  <input type="text" name="text" class="iinput1111" id="input" placeholder="Search"/>
  
  <label for="input" class="labelforsearch1111">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>

</div>
</div>
</div>
<table className='table-21'>
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
 

<div className='green'>
<button className='buttonn33333'>
      Next
     </button>
     <button className='buttonn33333'>
     Pervious
     </button>
     </div>
        </div>
  )
}
