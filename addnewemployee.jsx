import React, { useState } from 'react';
import "./addnewemployee.css";
import { Sidebarr } from './sidebarr';

export const Addnewemployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture: null,
    mobile: '',
    joiningDate: '',
    employeeType: '',
    monthlySalary: '',
    fatherName: '',
    cnic: '',
    education: '',
    gender: '',
    religion: '',
    bloodGroup: '',
    experience: '',
    email: '',
    dateOfBirth: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:3001/addemployee', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Employee added successfully');
        // Optionally, you can redirect or show a success message here
      } else {
        console.error('Error adding employee:', data.message);
        // Handle error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network errors or other issues
    }
  };

  return (
    <div className='bodyy21'>
      <Sidebarr />
      <h2 className='addmission1'>Employees Form</h2>

      {/* Basic Information */}
      <div className='studentinfo1'>
        <h3 className='addmission22'>Basic Information(*required)</h3>
      </div>
        <div className='white'>
          <div>

          {/* Name */}
        <div className='displaay1'>
          <input
            type="text"
            name="name"
            className="inpuut1"
            placeholder="Name of Employee"
            onChange={handleChange}
          />
        </div>

        {/* Picture */}
        <div className='ffileee'>
          <div className="fileeee1">
            <p>Picture:</p>
          </div>
          <div className="fileeee2">
            <input
              type="file"
              name="picture"
              className="inpuut1"
              accept="image/*, .pdf, .jpg"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
          </div>
        <div>
        {/* Mobile No. */}
        <div className='displaay1'>
          <input
            type="text"
            name="mobile"
            className="inpuut1"
            placeholder="Mobile No."
            onChange={handleChange}
          />
        </div>

        {/* Joining Date */}
        <div className='ffileee'>
          <div className="fileeee1">
            <p>Joining Date:</p>
          </div>
          <div className='fileeee2'>
            <input
              type="date"
              id="dateOfBirth"
              name="joiningDate"
              className="inpuut1"
              onChange={handleChange}
            />
          </div>
        </div>
        </div>
        <div>
        {/* Employee Type */}
        <div className='displaay1'>
          <select
            name="employeeType"
            id="classDropdown"
            className="inpuut1"
            onChange={handleChange}
          >
            <option value="" disabled selected>Employee Type</option>
            <option value="Principal">Principal</option>
            <option value="Management Staff">Management Staff</option>
            <option value="Teacher">Teacher</option>
            <option value="Accountant">Accountant</option>
            <option value="Store Manager">Store Manager</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Monthly Salary */}
        <div className='displaay12'>
          <input
            type="text"
            name="monthlySalary"
            className="inpuut1"
            placeholder="Monthly Salary"
            onChange={handleChange}
          />
        </div>
        </div>
      </div>

      {/* Other Info (optional) */}
      <div className='studentinfo1'>
        <h3 className='addmission22'>Other Info(optional)</h3>
      </div>

      <div className='black'>
        {/* Father Name */}
        <div>
        <div className='displaay1'>
          <input
            type="text"
            name="fatherName"
            className="inpuut1"
            placeholder="Father Name"
            onChange={handleChange}
          />
        </div>

        {/* CNIC */}
        <div className='displaay1'>
          <input
            type="text"
            name="cnic"
            className="inpuut1"
            placeholder="CNIC"
            onChange={handleChange}
          />
        </div>

        {/* Education */}
        <div className='displaay1'>
          <input
            type="text"
            name="education"
            className="inpuut1"
            placeholder="Education"
            onChange={handleChange}
          />
        </div>
        </div>

        {/* Gender */}
       <div>
       <div className='displaay1'>
          <select
            name="gender"
            id="classDropdown"
            className="inpuut1"
            onChange={handleChange}
          >
            <option value="" disabled selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Religion */}
        <div className='displaay1'>
          <select
            name="religion"
            id="classDropdown"
            className="inpuut1"
            onChange={handleChange}
          >
            <option value="" disabled selected>Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
          </select>
        </div>

        {/* Blood Group */}
        <div className='displaay1'>
          <select
            name="bloodGroup"
            id="classDropdown"
            className="inpuut1"
            onChange={handleChange}
          >
            <option value="" disabled selected>Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
          </select>
        </div>
       </div>

        {/* Experience */}
        <div>
        <div className='displaay1'>
          <input
            type="text"
            name="experience"
            className="inpuut1"
            placeholder="Experience"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className='displaay1'>
          <input
            type="text"
            name="email"
            className="inpuut1"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        {/* Date Of Birth */}
        <div className='ffileee'>
          <div className="fileeee1">
            <p>Date Of Birth:</p>
          </div>
          <div className='fileeee2'>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="inpuut1"
              onChange={handleChange}
            />
          </div>
        </div>
        </div>

      </div>

      {/* Address */}
      <div className='displaay1'>
        <input
          type="text"
          name="address"
          className="inpuutt1"
          placeholder="Address"
          onChange={handleChange}
        />
      </div>

      {/* Buttons */}
      <div className='buttonn5611'>
        <button className='buttonn511' onClick={() => setFormData({})}>
          Reset
        </button>
        <button className='buttonn611' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Addnewemployee;
