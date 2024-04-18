import React from 'react';
import './messagingg.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const Messagingg = () => {
  return (
    <div>
        <Sidebarrr/>
        <div className='brown'>
        <h2 className='brown-1'>Compose a new message</h2>
        <div className='dispplaay1'>
         
         <select name="dropdown" id="classDropdown" className="inppuut1">
           <option value="" disabled selected>School Admin</option>
          
           <option value="option2">Specific Class</option>
           <option value="option3">Specific Student</option>
          
         </select>
       </div>
       <div className='diissplaay1'>
          <input type="text" name="text" className="innpuut1" placeholder="Write your messeage here..." />
        </div>
        <div className="fiillee2">
            <input type="file" name="chooseFile" className="inpuut1"  accept="image/*, .pdf, .jpg" required />
          </div>
          <button className='button233'>
     Send Message
     </button> 
        </div>
        </div>
  )
}
