import React from 'react';
import './Accountsetting.css';
import { Sidebarrrr } from "./sidebarrrr.jsx";
export const Accountsetting =() =>{
    return(
      <div>
         <Sidebarrrr/>
         
        <div class="update">
       <h5><strong> Update Login Details</strong></h5>
       <input type="text" value="62903c5oh63582667" name="username" placeholder="New username ?" class="form-control" required=""></input>
       <br></br>
       <input id="password-field" type="password" placeholder="New Password ?" class="form-control" name="password" value="62903c5oh63582667" required=""></input> 
       <span toggle="#password-field" ></span>
       <button className="buttonb" >
                Update
                </button>
        </div>
       
               
         </div>
       
       
    )
}