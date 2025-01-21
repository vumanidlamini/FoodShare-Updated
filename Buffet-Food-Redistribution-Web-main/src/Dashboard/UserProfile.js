// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faMapMarker, faLock, faUserCircle, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';

// const UserProfile = ({ userData, onEdit, onDelete }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState(userData);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };
//   const handleSaveClick = async () => {
//     try {
//       // Destructure 'password' from editedUserData to omit it from the request
//       const { password, ...userDataWithoutPassword } = editedUserData;

//       const token = localStorage.getItem('token'); // Retrieve token from localStorage

//       if (!token) {
//         throw new Error('No token available');
//       }

//       // Make PUT request to update user data, excluding 'password'
//       const response = await axios.put("http://localhost:5282/api/Donor", userDataWithoutPassword, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       // Update user data locally with editedUserData upon successful edit
//       onEdit(editedUserData);
//       setEditMode(false);
//       console.log(response);
//     } catch (error) {
//       console.error('Error updating user:', error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   const handleDeleteClick = () => {
//     onDelete(); // Just call onDelete since it doesn't need any argument
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div className="container-fluid py-3 mt-5 mb-2" style={{ paddingTop: '0', margin: '50px' }}>
//         <div className="row justify-content-center">
//           <div className="col-lg-6 col-md-5 col-sm-10">
//             <div className="card shadow">
//               <div className="card-body" style={{ backgroundColor: 'rgba(211,211,211,0.5)' }}>
//                 <div className="d-flex align-items-center justify-content-center mb-2" >
//                   <FontAwesomeIcon icon={faUserCircle} size="6x" />
//                   <h2 className="card-title ms-3 ">User Profile</h2>
//                 </div>
//                 <div className="card-body d-flex flex-column ">
//                     <div className="row mb-4">
//                       <div className="col-md-3 d-flex align-items-center">
//                         <FontAwesomeIcon icon={faUser} className="me-2" />
//                         <strong>Name:{userData.donorName}</strong>
//                       </div>
//                       <div className="col-md-9 d-flex align-items-center">
//                         <p className="mb-0">{userData.name}</p>
//                       </div>
//                     </div>
//                     <div className="row mb-4">
//                       <div className="col-md-3 d-flex align-items-center ">
//                         <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                         <strong>Email:{userData.donorEmail}</strong>
//                       </div>
//                       <div className="col-md-9 d-flex align-items-center">
//                         <p className="mb-0"></p>
//                       </div>
//                     </div>
//                     <div className="row mb-4">
//                       <div className="col-md-3 d-flex align-items-center">
//                         <FontAwesomeIcon icon={faPhone} className="me-2" />
//                         <strong>Telephone:{userData.donorPhoneNum}</strong>
//                       </div>
//                       <div className="col-md-9 d-flex align-items-center">
//                         <p className="mb-0">{userData.telephone}</p>
//                       </div>
//                     </div>
//                     <div className="row mb-4">
//                       <div className="col-md-3 d-flex align-items-center">
//                         <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                         <strong>Address:{userData.donorAddress}</strong>
//                       </div>
//                       <div className="col-md-9 d-flex align-items-center">
//                         <p className="mb-0">{userData.address}</p>
//                       </div>
//                     </div>
//                   </div>

//                 <div className="d-flex justify-content-between align-items-center mt-3">
//                   {!editMode ? (
//                     <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
//                   ) : (
//                     <form>
//                       <div className="mb-3">
//                         <label className="form-label"><FontAwesomeIcon icon={faUser} /> Name</label>
//                         <input type="text" className="form-control" name="name" value={editedUserData.donorName} onChange={handleChange} />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
//                         <input type="email" className="form-control" name="email" value={editedUserData.donorEmail} onChange={handleChange} />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label"><FontAwesomeIcon icon={faPhone} /> Telephone</label>
//                         <input type="tel" className="form-control" name="telephone" value={editedUserData.donorPhoneNum} onChange={handleChange} />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label"><FontAwesomeIcon icon={faMapMarker} /> Address</label>
//                         <input type="text" className="form-control" name="address" value={editedUserData.donorAddress} onChange={handleChange} />
//                       </div>
                      
//                       <div className="d-grid">
//                         <button type="button" className="btn btn-primary" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
//                       </div>
//                     </form>
//                   )}
//                   <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarker, faUserCircle, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const UserProfile = ({ userData = {}, onEdit, onDelete }) => {
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
              {/* <div className="mb-3">
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
              </div> */}
            </div>


            <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">
                            <div className="d-flex align-items-center mb-2">
                                  <FontAwesomeIcon icon={faUser} className="me-2" />
                                  <strong>Name:</strong>
                                </div>
                            </th>


                            <th scope="col">
                            <div className="d-flex align-items-center mb-2">
                              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                              <strong>Email:</strong>
                            </div>
                            </th>
                            <th scope="col">
                            <div className="d-flex align-items-center mb-2">
                              <FontAwesomeIcon icon={faPhone} className="me-2" />
                              <strong>Telephone:</strong>
                            </div>
                            </th>
                            <th scope="col">
                            <div className="d-flex align-items-center mb-2">
                                <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                                <strong>Address:</strong>
                             </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">

                                                {!editMode ? (
                                      <p>{userData.donorName}</p>
                                    ) : (
                                      <input type="text" className="form-control" name="donorName" value={editedUserData.donorName || ''} onChange={handleChange} />
                                    )}
                            </td>
                            <td>
                            {!editMode ? (
                                  <p>{userData.donorEmail}</p>
                                ) : (
                                  <input type="email" className="form-control" name="donorEmail" value={editedUserData.donorEmail || ''} onChange={handleChange} />
                                )}

                            </td>

                            <td>
                                {!editMode ? (
                                  <p>{userData.donorPhoneNum}</p>
                                ) : (
                                  <input type="tel" className="form-control" name="donorPhoneNum" value={editedUserData.donorPhoneNum || ''} onChange={handleChange} />
                                )}
                             </td>
                            <td>
                                {!editMode ? (
                                  <p>{userData.donorAddress}</p>
                                ) : (
                                  <input type="text" className="form-control" name="donorAddress" value={editedUserData.donorAddress || ''} onChange={handleChange} />
                                )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  <br />
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

export default UserProfile;