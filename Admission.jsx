import React from 'react';
import './Admission.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";
 
export const Admission = () => {
  const handlePrint = () => {
    window.print();
  };
 
  return (
<div>
<Sidebarrrr />
<div className='data'>
<div className="contain">
<div className="content">
<div className="contain2">
<div className="content">
<p className="list">
<table>
<tr>
  <td>Registration/ID</td>  
  </tr>
    
  <tr>
  <td>Class</td>
  </tr>

  <tr>
  <td>Admission Date	</td> 
  </tr>

  <tr>
  <td>Account Status</td>
  </tr>
    
  <tr>
  <td>Portal Url</td>
  </tr>

  <tr>
  <td>Username</td>
  </tr>
  
  <tr>
  <td>Password</td>
  </tr>

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
</div>
  );
};