import React from 'react';
import './studentAreport.css';
import {Sidebarrr} from '../pagess/sidebarrr';

export const StudentAreport = () => {
  const handleCopyClick = () => {
    // Logic to copy to clipboard
    const copyText = document.getElementById('input');
    copyText.select();
    document.execCommand('copy');
  };

  const handleCsvClick = () => {
    // Logic to download CSV file
    const csvContent = 'Your CSV content here';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.csv';
    link.click();
  };

  const handleExcelClick = () => {
    // Logic to download Excel file
    // You may need a library like SheetJS for creating Excel files
  };

  const handlePdfClick = () => {
    // Logic to download PDF file
    // You may need a library like jsPDF for creating PDF files
  };

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <div>
      <Sidebarrr/>
      <div className='red-21'>
        <div className='red-46'>
          <div className='red-47'>
            <button className='button33333' onClick={handleCopyClick}>
              Copy
            </button>
            <button className='button33333' onClick={handleCsvClick}>
              CSV
            </button>
          </div>
          <div className='red-48'>
            <button className='button33333' onClick={handleExcelClick}>
              Excel
            </button>
            <button className='button33333' onClick={handlePdfClick}>
              PDF
            </button>
          </div>
          <div className='red-49'>
            <button className='button33333' onClick={handlePrintClick}>
              Print
            </button>
            <select className='dropdownButton'>
              <option value=''>Column visibility</option>
              <option value='option1'>DATE</option>
              <option value='option2'>DAY</option>
              <option value='option3'>ID</option>
              <option value='option1'>NAME</option>
              <option value='option2'>CLASS</option>
              <option value='option3'>STATUS</option>
            </select>
          </div>
        </div>
        <div>
          <div className='InputContainerrr1'>
            <input
              type='text'
              name='text'
              className='iinput1111'
              id='input'
              placeholder='Search'
            />

            <label htmlFor='input' className='labelforsearch1111'>
              <svg viewBox='0 0 512 512' className='searchIcon'>
                <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <table className='table-21'>
        {/* Table content */}
      </table>

      <div className='green'>
        <button className='buttonn33333'>Next</button>
        <button className='buttonn33333'>Previous</button>
      </div>
    </div>
  );
};
