import React from 'react';
import './Myreport.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";
export const Myreport =() =>{
    return(
      <div>
         <Sidebarrrr/>
         <div class="but">
         <button className='but1' >Print</button>
         <button className='but1'>Get PDF </button>
         </div>
        </div>
    )
}