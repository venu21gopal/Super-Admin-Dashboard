import React from 'react';
import './newclass.css';
import { Sidebarr } from './sidebarr';

export const Newclass = () => {
  return (
    <div>
        <Sidebarr/>
        <div className='display66'>
        
        <div className='display111'>
      <input type="text" name="text" class="input66"  placeholder="Name of Class"/>
      </div>
      <div className='display111'>
      <input type="text" name="text" class="input66"  placeholder="Monthly Tution Fees"/>
      </div>

      <div className='display222'>
    <select name="dropdown" class="input66">
      <option value="" disabled selected>Select Class Teacher</option>
      <option value="option1">Maths</option>
      <option value="option2">Social</option>
      <option value="option3">Science</option>
    </select>
  </div>
  
  
  <button className='button4'>
     Submit
     </button>     

      </div>

        </div>
  )
}
