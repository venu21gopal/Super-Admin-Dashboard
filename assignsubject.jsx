import React from 'react';
import "./assignsubject.css";
import { Sidebarr } from './sidebarr';

export const Assignsubject = () => {
  return (
    <div>
        <Sidebarr/>
        <div className='displayy6'>
        <div className='displayy22'>
    <select name="dropdown" class="inputt6">
      <option value="" disabled selected>Select Class</option>
      <option value="option1"></option>
      <option value="option2"></option>
      <option value="option3"></option>
    </select>
  </div>
  <div className='displayy11'>
      <input type="text" name="text" class="inputt6"  placeholder="Name of Subject"/>
      </div>
      <div className='displayy11'>
      <input type="text" name="text" class="inputt6"  placeholder="Marks"/>
      </div>
      <div className='buttonn56'> 
  <button className='buttonn5'>
     Add More
     </button>  
     <button className='buttonn6'>
     Remove
     </button>  
     </div>     
     </div>
    </div>
  )
}



  
  
