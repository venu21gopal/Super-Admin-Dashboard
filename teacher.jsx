import React, { useState, useEffect } from 'react';
import { Popup } from './popup';
import { Sidebarrr } from '../pagess/sidebarrr';
import { Dashboardd } from '../pagess/dashboardd';

export const Teacher = () => {
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/messages/All Teachers');
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
      <Sidebarrr />
      <Dashboardd />
      <button onClick={handlePopupClick}>Show Messages</button>
      {showPopup && <Popup messages={messages} onClose={handlePopupClick} />}
    </div>
  );
};
