// Popup.jsx

import React from 'react';

export const Popup = ({ messages, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Messages</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <strong>Sender:</strong> {message.sender} <br />
              <strong>Message:</strong> {message.message} <br />
              {message.file_path && (
                <>
                  <strong>Attachment:</strong>{' '}
                  <a
                    href={`http://localhost:3001/${message.file_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={message.file_path}
                  >
                    Download Attachment
                  </a>
                  <br />
                </>
              )}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
