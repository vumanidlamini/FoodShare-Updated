
import React, { useState } from 'react';

function VolunteerForm() {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // New state variables for additional fields
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [daysAvailable, setDaysAvailable] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Details:', { 
      firstName, 
      lastName, 
      email, 
      phone, 
      message, 
      dob, 
      gender, 
      address, 
      emergencyContact, 
      emergencyPhone, 
      startTime, 
      endTime, 
      daysAvailable 
    });

    // Clear form after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setDob('');
    setGender('');
    setAddress('');
    setEmergencyContact('');
    setEmergencyPhone('');
    setStartTime('');
    setEndTime('');
    setDaysAvailable('');
  };

  return (
    <div className="container my-5">
        <br />
        <br />
      <h2 className="text-center mb-4">Volunteer Sign Up</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm border rounded border-1 border-secondary">
        {/* First Name and Last Name */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Names</label>
            <input
              placeholder='Enter Your First Names'
              type="text"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              placeholder='Enter Your Last Name'
              type="text"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              placeholder='Enter Your Email Address'
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              placeholder='Enter Your Phone Number'
              type="tel"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            placeholder='Enter Date Of Birth'
            type="date"
            id="dob"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            
            id="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Other">Other</option>
            <option value="Prefer Not to Say">Prefer Not to Say</option>
          </select>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            placeholder='Enter Your Residential Address'
            type="text"
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Emergency Contact */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="emergencyContact" className="form-label">Emergency Contact Name</label>
            <input
              placeholder='Enter Emergency Contact Name'
              type="text"
              id="emergencyContact"
              className="form-control"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Phone</label>
            <input
              placeholder='Enter Emergency Contact Phone Number'
              type="tel"
              id="emergencyPhone"
              className="form-control"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Availability */}
        <div className="mb-3">
          <label htmlFor="daysAvailable" className="form-label">Days of the Week Available</label>
          <input
            
            type="text"
            id="daysAvailable"
            className="form-control"
            value={daysAvailable}
            onChange={(e) => setDaysAvailable(e.target.value)}
            required
            placeholder="e.g., Monday, Wednesday, Friday"
          />
        </div>

        {/* Time Picker - Start and End Times */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="startTime" className="form-label">Start Time</label>
            <input
              placeholder='Select Time Of Availability'
              type="time"
              id="startTime"
              className="form-control"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endTime" className="form-label">End Time</label>
            <input
              placeholder='Select Time For Ending Of Your Avaulability'
              type="time"
              id="endTime"
              className="form-control"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Optional Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message (optional)</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100 h-50 bold fw-bold">Submit</button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default VolunteerForm;
