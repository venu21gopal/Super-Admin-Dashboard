import React from 'react';
import './editor.css';
import {Sidebarr} from "./sidebarr";

export const Editor = () => {
  return (
    <div>
      <Sidebarr/>
      <div className='display2222'>
    <select name="dropdown" class="input666">
      <option value="" disabled selected>Select Class Teacher</option>
      <option value="option1">Maths</option>
      <option value="option2">Social</option>
      <option value="option3">Science</option>
    </select>
  </div>
  
  <div className='button56'> 
  <button className='button5'>
     Update
     </button>  
     <button className='button6'>
     Delete
     </button>  
     </div>
        </div>
  )
}
