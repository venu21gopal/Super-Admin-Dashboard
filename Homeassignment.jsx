import React from 'react';
import './Homeassignment.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";
export const Homeassignment =() =>{
    return(
      <div>
         <Sidebarrrr/>
         <div className='filee2'>
         <input type="date" id="dateOfBirth" name="dateOfBirth" className="inpuut1" />
         <button class="home" >
         Assigments
         </button>
       </div>  
        </div>
    )
}