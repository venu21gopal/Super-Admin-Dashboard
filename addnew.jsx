import React from 'react';
import "./addnew.css";
import { Sidebarr } from './sidebarr';

export const Addnew = () => {
  return (
    <div className='bodyy21'>
      <Sidebarr />
      <h2 className='addmission'>Admission Form</h2>
      <div className='studentinfo'>
        <h3 className='addmission2'>Student Information(*required)</h3>
      </div>

      <div className='divv'>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Name of Student" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Register Number" />
        </div>
        <div className='displaay1'>
         
          <select name="dropdown" id="classDropdown" className="inpuut123">
            <option value="" disabled selected>Select Class</option>
            <option value="option1">Class 1</option>
            <option value="option2">Class 2</option>
            <option value="option3">Class 3</option>
          </select>
        </div>
      </div>

      <div className='divv2'>
       
        <div className='ffilee'>
          <div className="fileee1">
            <p>Picture:</p>
          </div>
          <div className="fileee2">
            <input type="file" name="chooseFile" className="inpuut123" accept="image/*, .pdf, .jpg" required />
          </div>
        </div>
      

      {/* Add the date input below */}
      
<div className='ffilee'>    
    <div className="fileee1">
            <p>Addmission Date:</p>
          </div>
        <div className='fileee2'>
         
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="inpuut123" />
        </div>
        </div>

      

     <div className='displayy1212'>
      <div className='displayy12'>
      <input type="text" name="text" class="inputt7"  placeholder="Discount in Fee %"/>
      </div>
      <div className='displayy12'>
      <input type="text" name="text" class="inputt7"  placeholder="Mobile No"/>
      </div>
      </div>
      </div>

     
      <div className='studentinfo'>
        <h3 className='addmission2'>Other Info(optional)</h3>
      </div>
<div className='class-1'>
<div className='class-2'>
<p className='classs-2'>Date of Birth:</p>
      <div className='fileee2'>
    
         <input type="date" id="dateOfBirth" name="dateOfBirth" className="inpuut123" />
       </div>
       <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Gender</option>
           <option value="option1">Male</option>
           <option value="option2">Female</option>
          
         </select>
       </div>
       <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Any Indentification Marks?" />
        </div>
        <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Blood Group</option>
           <option value="option1">A+</option>
           <option value="option2">A-</option>
           <option value="option3">B+</option>
         </select>
       </div>
       <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Disease if any?" />
        </div>
        </div>
        <div className='class-3'>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Student Birth Form ID" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Cast" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Pervious School" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Pervious ID" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Any additional Note" />
        </div>
        </div>
        <div className='class-4'>
        <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Orphen Student</option>
           <option value="option1">Yes</option>
           <option value="option2">No</option>
           
         </select>
       </div>
       <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>OSC</option>
           <option value="option1">Yes</option>
           <option value="option2">No</option>
           
         </select>
       </div>
       <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Religion</option>
           <option value="option1">Hindu</option>
           <option value="option2">Muslim</option>
           <option value="option3">Christian</option>
         </select>
       </div>
       <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Select Family</option>
           <option value="option1"></option>
           <option value="option2"></option>
           <option value="option3"></option>
         </select>
       </div>
       <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Total Sibilings" />
        </div>
       
        </div>
        
        </div>
        <div className='button32'>
        <div className='displaay11'>
          <input type="text" name="text" className="inpuut11" placeholder="Address" />
        </div>

        <button className='button23'>
     Add Parents
     </button> 
     </div> 
     <div className='studentinfo'>
        <h3 className='addmission2'>Father Info(optional)</h3>
      </div>

      <div className='bench-1'>
     <div>
      <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Name Of Father" />
        </div>
        

        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Education" />
        </div>
        </div>


       <div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="National ID No." />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Mobile No" />
        </div>
        </div>

        <div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Occupation" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Profession" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Income" />
        </div>
        </div>
        </div>


        <div className='studentinfo'>
        <h3 className='addmission2'>Mother Info(optional)</h3>
      </div>
        <div className='board-1'>
     <div>
      <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Name of Mother" />
        </div>
        

        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Education" />
        </div>
        </div>


       <div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="National ID No." />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Mobile No" />
        </div>
        </div>

        <div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Occupation" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Profession" />
        </div>
        <div className='displaay1'>
          <input type="text" name="text" className="inpuut123" placeholder="Income" />
        </div>
        </div>
        </div>


        <div className='buttonn561'> 
  <button className='buttonn51'>
     Reset
     </button>  
     <button className='buttonn61'>
     Submit
     </button>  
     </div>   

    </div>
  );
}


