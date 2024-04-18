
// Student.jsx

import React, { useState, useEffect } from 'react';
import { Popup } from './popup';
import { Sidebarrrr } from "../pagesss/sidebarrrr.jsx";
import { Dashboarddd } from "../pagesss/dashboarddd.jsx";

export const Student = () => {
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/messages/All Students');
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
      <Sidebarrrr/>
      <Dashboarddd />
      <button onClick={handlePopupClick}>Show Messages</button>
      {showPopup && <Popup messages={messages} onClose={handlePopupClick} />}
    </div>
  );
};
