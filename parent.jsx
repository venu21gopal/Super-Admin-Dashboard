
// Parent.jsx

import React, { useState, useEffect } from 'react';
import { Popup } from './popup';
import { Sidebar } from "../pages/sidebar";
import { Examresult } from "../pages/Examresult";
import './loginpage.css';

export const Parent = () => {
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/messages/All Parents');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error('Error fetching messages:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };
    fetchMessages();
  }, []);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Sidebar/>
      <Examresult/>
      <button onClick={handlePopupClick}>Show Messages</button>
      {showPopup && <Popup messages={messages} onClose={handlePopupClick} />}
    </div>
  );
};
