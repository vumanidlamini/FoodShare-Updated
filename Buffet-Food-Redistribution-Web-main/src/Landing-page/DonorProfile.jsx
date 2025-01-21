
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const DonorProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Donor/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(response.data)
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
      
//       setUserData(response.data); // Update user data with response
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleDeleteClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete("http://localhost:5282/api/Donor/Profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div className="container py-4" style={{ maxWidth: '800px' }}>
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <div className="d-flex align-items-center justify-content-center mb-4">
//               <FontAwesomeIcon icon={faUserCircle} size="5x" />
//               <h2 className="card-title ms-3">User Profile</h2>
//             </div>
//             <div className="d-flex flex-column">

//               <div className="table-responsive">
//                 <table className="table table-striped">
//                   <thead>
//                     <tr>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faUser} className="me-2" />
//                           <strong>Name:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                           <strong>Email:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faPhone} className="me-2" />
//                           <strong>Telephone:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                           <strong>Address:</strong>
//                         </div>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.donorName}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="donorName" value={editedUserData.donorName || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.donorEmail}</p>
//                         ) : (
//                           <input type="email" className="form-control" name="donorEmail" value={editedUserData.donorEmail || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.donorPhoneNum}</p>
//                         ) : (
//                           <input type="tel" className="form-control" name="donorPhoneNum" value={editedUserData.donorPhoneNum || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.donorAddress}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="donorAddress" value={editedUserData.donorAddress || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                      </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <div className="d-flex justify-content-between align-items-center mt-4">
//                 {!editMode ? (
//                   <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
//                 ) : (
//                   <div>
//                     <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
//                   </div>
//                 )}
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonorProfile;

//Updated Profile

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const DonorProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Donor/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(response.data); // Update user data with response
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleDeleteClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete("http://localhost:5282/api/Donor/Profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="container py-5" style={{ maxWidth: '800px' }}>
//         <div className="card shadow-lg rounded-4 overflow-hidden">
//           <div className="row g-0">
//             {/* Profile Picture and Basic Info */}
//             <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
//               <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
//                 <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
//               </div>
//             </div>
//             <div className="col-8 p-4">
//               <h3 className="card-title mb-2">{userData.donorName}</h3>
//               <p className="text-muted">
//                 {!editMode ? (
//                   userData.donorEmail
//                 ) : (
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="donorEmail"
//                     value={editedUserData.donorEmail || ''}
//                     onChange={handleChange}
//                   />
//                 )}
//               </p>
//               {!editMode && (
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
//                     <FontAwesomeIcon icon={faEdit} /> Edit Profile
//                   </button>
//                 </div>
//               )}

//               {editMode && (
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}>
//                     <FontAwesomeIcon icon={faSave} /> Save
//                   </button>
//                   <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>
//                     Cancel
//                   </button>
//                 </div>
//               )}

//               {/* <div className="d-flex justify-content-between align-items-center mt-3">
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
//                   <FontAwesomeIcon icon={faTrash} /> Delete Account
//                 </button>
//               </div> */}
//             </div>
//           </div>

//           {/* Additional Info Section */}
//           <div className="card-body">
//             <h5 className="mb-3">Contact Info</h5>
//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faPhone} className="me-2" />
//                 {!editMode ? (
//                   <span>{userData.donorPhoneNum}</span>
//                 ) : (
//                   <input
//                     type="tel"
//                     className="form-control"
//                     name="donorPhoneNum"
//                     value={editedUserData.donorPhoneNum || ''}
//                     onChange={handleChange}
//                   />
//                 )}
//               </div>
//             </div>

//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                 {!editMode ? (
//                   <span>{userData.donorAddress}</span>
//                 ) : (
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="donorAddress"
//                     value={editedUserData.donorAddress || ''}
//                     onChange={handleChange}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonorProfile;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const DonorProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Donor/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(response.data); // Update user data with response
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="container py-5" style={{ maxWidth: '800px' }}>
//         <div className="card shadow-lg rounded-4 overflow-hidden">
//           <div className="row g-0">
//             {/* Profile Picture and Basic Info */}
//             <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
//               <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
//                 <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
//               </div>
//             </div>
//             <div className="col-8 p-4">
//               <h3 className="card-title mb-2">{userData.donorName}</h3>
//               <p className="text-muted">
//                 {/* Email is always non-editable */}
//                 {userData.donorEmail}
//               </p>

//               {!editMode && (
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
//                     <FontAwesomeIcon icon={faEdit} /> Edit Profile
//                   </button>
//                 </div>
//               )}

//               {editMode && (
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}>
//                     <FontAwesomeIcon icon={faSave} /> Save
//                   </button>
//                   <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>
//                     Cancel
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Additional Info Section */}
//           <div className="card-body">
//             <h5 className="mb-3">Contact Info</h5>
//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faPhone} className="me-2" />
//                 {!editMode ? (
//                   <span>{userData.donorPhoneNum}</span>
//                 ) : (
//                   <input
//                     type="tel"
//                     className="form-control"
//                     name="donorPhoneNum"
//                     value={editedUserData.donorPhoneNum || ''}
//                     onChange={handleChange}
//                   />
//                 )}
//               </div>
//             </div>

//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                 {!editMode ? (
//                   <span>{userData.donorAddress}</span>
//                 ) : (
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="donorAddress"
//                     value={editedUserData.donorAddress || ''}
//                     onChange={handleChange}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default DonorProfile;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faPhone, faMapMarker, faEdit, faSave, faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Modal, Button, Form } from 'react-bootstrap';

// const DonorProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
//   const [passwordDetails, setPasswordDetails] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Donor/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setShowEditModal(true);
//   };

//   const handleSaveClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(response.data); // Update user data with response
//       setShowEditModal(false); // Close modal
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleResetPasswordClick = () => {
//     setShowResetPasswordModal(true);
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmitResetPassword = async () => {
//     const { currentPassword, newPassword, confirmPassword } = passwordDetails;
//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match.");
//       return;
//     }

//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Donor/ResetPassword", {
//         currentPassword,
//         newPassword,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setError(null);
//       setPasswordDetails({ currentPassword: '', newPassword: '', confirmPassword: '' });
//       setShowResetPasswordModal(false); // Close modal on success
//       alert('Password updated successfully');
//     } catch (err) {
//       setError(err.message || 'Error resetting password');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="container py-5" style={{ maxWidth: '900px' }}>
//         <div className="card shadow-lg rounded-4 overflow-hidden">
//           <div className="row g-0">
//             {/* Profile Picture and Basic Info */}
//             <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
//               <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
//                 <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
//               </div>
//             </div>
//             <div className="col-8 p-4">
//               <h3 className="card-title mb-2">{userData.donorName}</h3>
//               <p className="text-muted">
//                 {/* Email is always non-editable */}
//                 {userData.donorEmail}
//               </p>

//               <div className="mb-3">
//                 <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
//                   <FontAwesomeIcon icon={faEdit} /> Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Additional Info Section */}
//           <div className="card-body">
//             <h5 className="mb-3">Contact Info</h5>
//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faPhone} className="me-2" />
//                 <span>{userData.donorPhoneNum}</span>
//               </div>
//             </div>

//             <div className="mb-3">
//               <div className="d-flex align-items-center mb-2">
//                 <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                 <span>{userData.donorAddress}</span>
//               </div>
//             </div>

//             {/* Reset Password Button */}
//             <div className="mt-4">
//               <button type="button" className="btn btn-warning" onClick={handleResetPasswordClick}>
//                 <FontAwesomeIcon icon={faKey} /> Reset Password
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Modal */}
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 name="donorName"
//                 value={editedUserData.donorName || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="donorEmail"
//                 value={editedUserData.donorEmail || ''}
//                 onChange={handleChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Enter phone number"
//                 name="donorPhoneNum"
//                 value={editedUserData.donorPhoneNum || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="donorAddress"
//                 value={editedUserData.donorAddress || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveClick}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Reset Password Modal */}
//       <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Reset Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Current Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter current password"
//                 name="currentPassword"
//                 value={passwordDetails.currentPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter new password"
//                 name="newPassword"
//                 value={passwordDetails.newPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Confirm New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm new password"
//                 name="confirmPassword"
//                 value={passwordDetails.confirmPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowResetPasswordModal(false)}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={handleSubmitResetPassword}>
//             Reset Password
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default DonorProfile;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faMapMarker, faEdit, faSave, faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap';

const DonorProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        setLoading(false);
        setError('No token available');
        return;
      }

      try {
        const response = await axios.get("http://localhost:5282/api/Donor/Profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setEditedUserData(response.data); // Initialize editedUserData with userData
      } catch (err) {
        setError(err.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleSaveClick = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data); // Update user data with response
      setShowEditModal(false); // Close modal
    } catch (err) {
      setError(err.message || 'Error updating user data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetPasswordClick = () => {
    setShowResetPasswordModal(true);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitResetPassword = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwordDetails;
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      const response = await axios.put("http://localhost:5282/api/Donor/ResetPassword", {
        currentPassword,
        newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setError(null);
      setPasswordDetails({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setShowResetPasswordModal(false); // Close modal on success
      alert('Password updated successfully');
    } catch (err) {
      setError(err.message || 'Error resetting password');
    }
  };

  const handleDeactivateAccount = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      await axios.delete("http://localhost:5282/api/Donor/Profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(null);
      alert('Account deactivated successfully.');
    } catch (err) {
      setError(err.message || 'Error deactivating account');
    } finally {
      setShowDeactivateModal(false); // Close the deactivate modal
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-fixed justify-content-center align-items-center min-vh-100 bg-light">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container py-0" style={{ maxWidth: '900px' }}>
        <div className="card shadow-lg rounded-4 overflow-hidden h-100">
          <div className="row g-0">
            <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
              <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
                <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
              </div>
            </div>
            <div className="col-8 p-4">
              <h3 className="card-title mb-2">{userData.donorName}</h3>
              <p className="text-muted">
                <strong>Email:</strong> {userData.donorEmail}
              </p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
                  <FontAwesomeIcon icon={faEdit} /> Edit Profile
                </button>
                <button type="button" className="btn btn-danger" onClick={() => setShowDeactivateModal(true)}>
                  <FontAwesomeIcon icon={faTrash} /> Deactivate Account
                </button>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h5 className="mb-3">Contact Info</h5>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                {editMode ? (
                  <input
                    type="tel"
                    className="form-control"
                    name="donorPhoneNum"
                    value={editedUserData.donorPhoneNum || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userData.donorPhoneNum}</span>
                )}
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                {editMode ? (
                  <input
                    type="text"
                    className="form-control"
                    name="donorAddress"
                    value={editedUserData.donorAddress || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userData.donorAddress}</span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <button type="button" className="btn btn-secondary" onClick={handleResetPasswordClick}>
                <FontAwesomeIcon icon={faKey} /> Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="donorName"
                value={editedUserData.donorName || ''}
                onChange={handleChange}
                disabled // Make name field non-editable
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="donorEmail"
                value={editedUserData.donorEmail || ''}
                onChange={handleChange}
                disabled // Make email field non-editable
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="donorPhoneNum"
                value={editedUserData.donorPhoneNum || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="donorAddress"
                value={editedUserData.donorAddress || ''}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Reset Password Modal */}
      <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                name="currentPassword"
                value={passwordDetails.currentPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                name="newPassword"
                value={passwordDetails.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                name="confirmPassword"
                value={passwordDetails.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowResetPasswordModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmitResetPassword}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Deactivate Account Modal */}
      <Modal show={showDeactivateModal} onHide={() => setShowDeactivateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deactivation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to deactivate your account? This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeactivateModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeactivateAccount}>
            Deactivate Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DonorProfile;
