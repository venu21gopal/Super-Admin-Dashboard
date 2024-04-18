import React, { useState } from 'react';
import "./messaging.css";
import { Sidebarr } from './sidebarr';

export const Messaging = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSendMessage = async () => {
    try {
      const formData = new FormData();
      formData.append('recipient', recipient);
      formData.append('message', message);
      formData.append('chooseFile', file);

      const response = await fetch('http://localhost:3001/api/messages', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Message sent successfully');
        // Optionally, you can reset the form or perform other actions upon success
      } else {
        console.error('Error sending message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div>
      <Sidebarr />
      <div className='brown'>
        <h2 className='brown-1'>Compose a new message</h2>
        <div className='dispplaay1'>
          <select
            name="recipient"
            id="recipientDropdown"
            className="inppuut1"
            onChange={handleRecipientChange}
          >
            <option value="" disabled selected>
              Select option
            </option>
            <option value="All Teachers">All Teachers</option>
            <option value="All Students">All Students</option>
            <option value="All Parents">All Parents</option>
          </select>
        </div>
        <div className='diissplaay1'>
          <input
            type="text"
            name="message"
            className="innpuut1"
            placeholder="Write your message here..."
            onChange={handleMessageChange}
          />
        </div>
        <div className="fiillee2">
          <input
            type="file"
            name="chooseFile"
            className="inpuut1"
            accept="image/*, .pdf, .jpg"
            onChange={handleFileChange}
          />
        </div>
        <button className='button233' onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};
