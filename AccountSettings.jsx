import React from 'react';
import './AccountSettings.css';
import { Sidebarr } from './sidebarr';

export const AccountSettings = () => {
  return (
    <div>
        <Sidebarr/>
        <div className='display6'>
        <h5>Account Settings</h5>
        <div className='display11'>
      <input type="text" name="text" class="input6"  placeholder="User Name"/>
      </div>
      <div className='display11'>
      <input type="text" name="text" class="input6"  placeholder="Password"/>
      </div>

      <div className='display22'>
    <select name="dropdown" class="input6">
      <option value="" disabled selected>Time Zone</option>
      <option value="option1">India</option>
      <option value="option2">Africa</option>
      <option value="option3">USA</option>
    </select>
  </div>
  <div className='display22'>
    <select name="dropdown" class="input6">
      <option value="" disabled selected>Currency</option>
      <option value="option1">Rupee</option>
      <option value="option2">Dollar</option>
      <option value="option3">Bugs</option>
    </select>
  </div>
  <div className='display11'>
      <input type="text" name="text" class="input6"  placeholder="Symbol"/>
      </div>
  <button className='button3'>
     Update Settings
     </button>     

      </div>

        </div>
  )
}
