import React from 'react';
import './mytimetable.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const Mytimetable = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Sidebarrr />
      <div className='grapes'>
        <button className='grapes-1' onClick={handlePrint}>
          Print Timetable
        </button>
      </div>
      <div className='grapes-2'>
        <h3>TIME TABLE</h3>
        <h20>TEACHER TIMETABLE</h20>
        <h4>TEACHER NAME</h4>
        <div className='grapes-3'>Class Period</div>
      </div>
    </div>
  );
};
