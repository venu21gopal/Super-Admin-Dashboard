// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'

export const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/login/${role.toLowerCase()}`, {
        username,
        password,
      });
  
      if (response.data.success) {
        alert(`Welcome, ${role}!`);
        navigate(`/${role.toLowerCase()}`);
        // Redirect or navigate to the corresponding page based on the role
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div>
     <div className='mainmainmainpart'> 
     <div class="formmm">
          <span class="login">Login</span>
          <input type="text" placeholder="Username" 
          class="form--input"   value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" class="form--input"  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
      <select className="select22" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
      </select>
      <button onClick={handleLogin} class="form--submit">
              Login
          </button>
          </div>
     </div>
    </div>
  );
};

