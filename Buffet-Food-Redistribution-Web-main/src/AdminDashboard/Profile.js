import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: 'admin',
    fullName: 'FoodShare',
    email: 'foodShareNetworkAdmin@gmail.com',
    role: 'Administrator',
    createdAt: '2024-06-18',
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedAdmin, setUpdatedAdmin] = useState({ ...admin });

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAdmin({ ...updatedAdmin, [name]: value });
  };

  const isValidDateFormat = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  const handleUpdate = () => {
    if (!isValidDateFormat(updatedAdmin.createdAt)) {
      alert('Invalid date format for Joined At. Please use YYYY-MM-DD.');
      return;
    }
    setAdmin({ ...updatedAdmin });
    setIsEditMode(false);
    console.log('Admin details updated:', updatedAdmin);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      console.log('Profile deleted');
      navigate('/');
    }
  };

  const cancelEdit = () => {
    setUpdatedAdmin({ ...admin });
    setIsEditMode(false);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header text-center" style={{ backgroundColor: '#333', color: '#fff' }}>
              <h3>Admin Profile</h3>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Username:</label>
                <div className="col-sm-8">
                  {isEditMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={updatedAdmin.username}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="form-control-plaintext">{admin.username}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Full Name:</label>
                <div className="col-sm-8">
                  {isEditMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={updatedAdmin.fullName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="form-control-plaintext">{admin.fullName}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email:</label>
                <div className="col-sm-8">
                  {isEditMode ? (
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={updatedAdmin.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="form-control-plaintext">{admin.email}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Role:</label>
                <div className="col-sm-8">
                  {isEditMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="role"
                      value={updatedAdmin.role}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="form-control-plaintext">{admin.role}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Joined At:</label>
                <div className="col-sm-8">
                  <p className="form-control-plaintext">{new Date(admin.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-center">
                {isEditMode ? (
                  <>
                    <button className="btn btn-success mx-2" onClick={handleUpdate}>Save</button>
                    <button className="btn btn-secondary mx-2" onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button className="btn btn-dark mx-2" onClick={toggleEditMode}>Edit</button>
                )}
                <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
