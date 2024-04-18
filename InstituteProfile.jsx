import React from 'react';
import './InstituteProfile.css';
import {Sidebarr} from "./sidebarr";

export const InstituteProfile= () =>{
  return (
    <div className='bodyy21'>
        <Sidebarr/>
        <div class="cards-total2">
    <div class="card2 red2">
        <p class="tip2">Update Institute Logo Here</p>
        <p class="tip3">Institute Logo</p>
        <div className="file2">
    <input type="file" name="chooseFile" accept="image/*, .pdf, .jpg" required/>
     </div>
        
     
     <button className='button1'>
     Update
     </button>
        
      </div>
      </div>

      <div className='display'>
        <h5>Update Institute Info Here</h5>
        <div className='display1'>
      <input type="text" name="text" class="input"  placeholder="Your Institute Name"/>
      </div>
      <div className='display1'>
      <input type="text" name="text" class="input"  placeholder="Target Line"/>
      </div>
      <div className='display1'>
      <input type="text" name="text" class="input"  placeholder="Phone"/>
      </div>
      <div className='display1'>
      <input type="text" name="text" class="input"  placeholder="Website"/>
      </div>
      <div className='display1'>
      <input type="text" name="text" class="input"  placeholder="Address"/>
      </div>
      <div className='display2'>
    <select name="dropdown" class="input">
      <option value="" disabled selected>Select Country</option>
      <option value="option1">India</option>
      <option value="option2">Africa</option>
      <option value="option3">USA</option>
    </select>
  </div>
  <button className='button2'>
     Update
     </button>     

      </div>

        </div>
  )
}
