import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarker, faUserCircle, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const ProfileVeiw = ({ userData = {}, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  useEffect(() => {
    setEditedUserData(userData);
  }, [userData]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      const { password, ...userDataWithoutPassword } = editedUserData;
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token available');
      }

      const response = await axios.put("http://localhost:5282/api/Donor", userDataWithoutPassword, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      onEdit(editedUserData);
      setEditMode(false);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token available');
      }

      const response = await axios.delete("http://localhost:5282/api/Donor/Profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      onDelete();
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!userData.donorName) {
    return <p>No user data available.</p>;
  }

  return (
    <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container py-4" style={{ maxWidth: '800px' }}>
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <FontAwesomeIcon icon={faUserCircle} size="5x" />
              <h2 className="card-title ms-3">User Profile</h2>
            </div>
            <div className="d-flex flex-column">
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  <strong>Name:</strong>
                </div>
                {!editMode ? (
                  <p>{userData.donorName}</p>
                ) : (
                  <input type="text" className="form-control" name="donorName" value={editedUserData.donorName || ''} onChange={handleChange} />
                )}
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <strong>Email:</strong>
                </div>
                {!editMode ? (
                  <p>{userData.donorEmail}</p>
                ) : (
                  <input type="email" className="form-control" name="donorEmail" value={editedUserData.donorEmail || ''} onChange={handleChange} />
                )}
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <strong>Telephone:</strong>
                </div>
                {!editMode ? (
                  <p>{userData.donorPhoneNum}</p>
                ) : (
                  <input type="tel" className="form-control" name="donorPhoneNum" value={editedUserData.donorPhoneNum || ''} onChange={handleChange} />
                )}
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                  <strong>Address:</strong>
                </div>
                {!editMode ? (
                  <p>{userData.donorAddress}</p>
                ) : (
                  <input type="text" className="form-control" name="donorAddress" value={editedUserData.donorAddress || ''} onChange={handleChange} />
                )}
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              {!editMode ? (
                <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
              ) : (
                <div>
                  <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                </div>
              )}
              <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileVeiw;