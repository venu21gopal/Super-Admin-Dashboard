import React from 'react';
import './dashboarddd.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";

 export const Dashboarddd =() =>{
  return(
    <div>
      <Sidebarrrr/>
      <div class="card-total">
    <div class="card-red">
        <p class="tipp">Total Absent Students</p>
        <p class="second-text">Attendance</p>
    </div>
<div class="para">
<h4><b>1. Attendance Report</b></h4>
</div>
    <div class="card-blue">
        <p class="tipp">Total Present Employee</p>
        <p class="second-text">This month</p>
    </div>
    <div class="para">
<h4><b>2. Examination Report</b></h4>
</div>
    <div class="card-green">
       <b> <p class="exam">No Exam Data Has been Founded !</p></b>    
    </div>
    <div class="para">
<h4><b>3. Class Mockups/Tests Detail</b></h4>
</div>
    <div class="card-green1">
    Subject	Tests	Total Marks	Obtain Marks	Percentage
    </div>
    <div class="para">
<h4><b>4. Fee Report</b></h4>
</div>
    <div class="card-green2">
    Sr#	Fee Month	Submission Date	Total Amount	Deposit	Due-able
    </div>
    <div class="card-green3">
    <div class="card-green4">
            
       </div>
        </div>
        </div>
    </div>
  )
 }


