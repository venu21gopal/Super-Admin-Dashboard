import React, {useState} from 'react';
import './Theme.css';
import { Sidebarr } from './sidebarr';

export const Theme = () => {

  const [currentColor, setCurrentColor] = useState('#3498db'); // Initial color

  const handleColorChange = (newColor) => {
    setCurrentColor(newColor);
  };

  return (
    <div>
        <Sidebarr/>
        <div className="button-card-container">
      {[1].map((buttonNumber) => (
        <div key={buttonNumber} className="button-card" style={{ backgroundColor: currentColor }}>
          <h2>Button {buttonNumber}</h2>
          <button className='button111' onClick={() => handleColorChange('#3498db')}>Blue</button>
          <button className='button111' onClick={() => handleColorChange('#e74c3c')}>Red</button>
          <button className='button111' onClick={() => handleColorChange('#2ecc71')}>Green</button>
          <button className='button111' onClick={() => handleColorChange('#f39c12')}>Orange</button>
          <button className='button111' onClick={() => handleColorChange('#9b59b6')}>Purple</button>
        </div>
      ))}
    </div>
        </div>
  )
}
