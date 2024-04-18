import React from 'react';
import './Examresult.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";
import {IoIosSearch } from "react-icons/io";
export const Examresult =() =>{
    const handlePrint = () => {
      window.print();
    };
   
    return (
    
      <div>
         <Sidebarrrr/>
        <div className='display2222'>
    <select name="dropdown" class="input666">
      <option value="" disabled selected>----Select Other Exam----</option>
      <option value="option1">Maths</option>
      <option value="option2">Social</option>
      <option value="option3">Science</option>
    </select>
    
            <IoIosSearch className="icon"/> 
            </div>
            

<div className="contain">
<div className="content">
<div className="contain2">
<div className="content">
<p className="list">
<table>
             jhfh
             hjz       {/* Your table content */}
</table>
</p>
</div>
</div>
<div>
              {/* Attach the event handler to the button */}
<button className="button1" onClick={handlePrint}>
                Print Admission Letter
</button>
</div>
</div>
</div>
</div>
            
 
  );
};
