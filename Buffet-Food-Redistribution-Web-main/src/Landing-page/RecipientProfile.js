// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const RecipientProfile = () => {
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
//         const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
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
//       const response = await axios.put("http://localhost:5282/api/Recipient", editedUserData, {
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
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5282/api/Recipient/${userData.id}`, {
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
//                           <p>{userData.recipientName}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="recipientName" value={editedUserData.recipientName || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.recipientEmail}</p>
//                         ) : (
//                           <input type="email" className="form-control" name="recipientEmail" value={editedUserData.recipientEmail || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.recipientPhoneNum}</p>
//                         ) : (
//                           <input type="tel" className="form-control" name="recipientPhoneNum" value={editedUserData.recipientPhoneNum || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData.recipientAddress}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="recipientAddress" value={editedUserData.recipientAddress || ''} onChange={handleChange} />
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

// export default RecipientProfile;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Modal, Button, Form } from 'react-bootstrap';

// const RecipientProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
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
//       const response = await axios.put("http://localhost:5282/api/Recipient", editedUserData, {
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

//   const handleDeleteClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5282/api/Recipient/${userData.id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="container py-0" style={{ maxWidth: '900px' }}>
//         <div className="card shadow-lg rounded-4 overflow-hidden">
//           <div className="row g-0">
//             <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
//               <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
//                 <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
//               </div>
//             </div>
//             <div className="col-8 p-4">
//               <h3 className="card-title mb-2">{userData.recipientName}</h3>
//               <p className="text-muted">
//                 <strong>Email:</strong> {userData.recipientEmail}
//               </p>
//               <p className="text-muted">
//                 <strong>Phone:</strong> {userData.recipientPhoneNum}
//               </p>
//               <p className="text-muted">
//                 <strong>Address:</strong> {userData.recipientAddress}
//               </p>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
//                   <FontAwesomeIcon icon={faEdit} /> Edit Profile
//                 </button>
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
//                   <FontAwesomeIcon icon={faTrash} /> Delete Profile
//                 </button>
//               </div>
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
//                 name="recipientName"
//                 value={editedUserData.recipientName || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="recipientEmail"
//                 value={editedUserData.recipientEmail || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 name="recipientPhoneNum"
//                 value={editedUserData.recipientPhoneNum || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your address"
//                 name="recipientAddress"
//                 value={editedUserData.recipientAddress || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={() => setShowEditModal(false)}>
//             Close
//           </Button>
//           <Button variant="success" onClick={handleSaveClick}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default RecipientProfile;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faPhone, faMapMarker, faEdit, faSave, faTrash, faKey } from '@fortawesome/free-solid-svg-icons';
// import { Modal, Button, Form } from 'react-bootstrap';

// const RecipientProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [newPasswordData, setNewPasswordData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
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
//         const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
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
//       const response = await axios.put("http://localhost:5282/api/Recipient", editedUserData, {
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

//   const handleDeleteClick = async () => {
//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5282/api/Recipient/${userData.id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   const handleChangePassword = async () => {
//     const { currentPassword, newPassword, confirmPassword } = newPasswordData;
//     if (newPassword !== confirmPassword) {
//       setError('New password and confirmation do not match');
//       return;
//     }

//     const token = sessionStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.put(
//         "http://localhost:5282/api/Recipient/ChangePassword",
//         { currentPassword, newPassword },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setShowPasswordModal(false); // Close password change modal
//       setNewPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' }); // Reset the form
//       alert('Password updated successfully');
//     } catch (err) {
//       setError(err.message || 'Error changing password');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setNewPasswordData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="d-fixed justify-content-center align-items-center min-vh-100 bg-light mt-5">
//     <br />
//     <br />
//     <br />
//       <div className="container py-0" style={{ maxWidth: '900px' }}>
//         <div className="card shadow-lg rounded-4 overflow-hidden">
//           <div className="row g-0">
//             <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
//               <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
//                 <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
//               </div>
//             </div>
//             <div className="col-8 p-4">
//               <h3 className="card-title mb-2"><strong>Name :</strong>{userData.recipientName}</h3>
//               <p className="text-muted">
//                 <strong>Email:</strong> {userData.recipientEmail}
//               </p>
//               <p className="text-muted">
//                 <strong>Phone:</strong> {userData.recipientPhoneNum}
//               </p>
//               <p className="text-muted">
//                 <strong>Address:</strong> {userData.recipientAddress}
//               </p>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
//                   <FontAwesomeIcon icon={faEdit} /> Edit Profile
//                 </button>
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
//                   <FontAwesomeIcon icon={faTrash} /> Delete Profile
//                 </button>
//                 <button type="button" className="btn btn-outline-warning" onClick={() => setShowPasswordModal(true)}>
//                   <FontAwesomeIcon icon={faKey} /> Change Password
//                 </button>
//               </div>
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
//                 name="recipientName"
//                 value={editedUserData.recipientName || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="recipientEmail"
//                 value={editedUserData.recipientEmail || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 name="recipientPhoneNum"
//                 value={editedUserData.recipientPhoneNum || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your address"
//                 name="recipientAddress"
//                 value={editedUserData.recipientAddress || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={() => setShowEditModal(false)}>
//             Close
//           </Button>
//           <Button variant="success" onClick={handleSaveClick}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Change Password Modal */}
//       <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Change Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Current Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your current password"
//                 name="currentPassword"
//                 value={newPasswordData.currentPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your new password"
//                 name="newPassword"
//                 value={newPasswordData.newPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Confirm New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm your new password"
//                 name="confirmPassword"
//                 value={newPasswordData.confirmPassword}
//                 onChange={handlePasswordChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={() => setShowPasswordModal(false)}>
//             Close
//           </Button>
//           <Button variant="success" onClick={handleChangePassword}>
//             Change Password
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default RecipientProfile;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faMapMarker, faEdit, faSave, faTrash, faKey } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap';

const RecipientProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPasswordData, setNewPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        setLoading(false);
        setError('No token available');
        return;
      }

      try {
        const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
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
      const response = await axios.put("http://localhost:5282/api/Recipient", editedUserData, {
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

  const handleDeleteClick = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      await axios.delete(`http://localhost:5282/api/Recipient/${userData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(null);
    } catch (err) {
      setError(err.message || 'Error deleting user');
    }
  };

  const handleChangePassword = async () => {
    const { currentPassword, newPassword, confirmPassword } = newPasswordData;
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match');
      return;
    }

    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      await axios.put(
        "http://localhost:5282/api/Recipient/ChangePassword",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowPasswordModal(false); // Close password change modal
      setNewPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' }); // Reset the form
      alert('Password updated successfully');
    } catch (err) {
      setError(err.message || 'Error changing password');
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setNewPasswordData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-fixed justify-content-center align-items-center min-vh-100 bg-light mt-5">
      <br />
      <br />
      <br />
      <br />
      <div className="container py-0" style={{ maxWidth: '900px' }}>
        <div className="card shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0">
            <div className="col-4 bg-secondary text-center d-flex align-items-center justify-content-center">
              <div className="rounded-circle overflow-hidden" style={{ width: '120px', height: '120px' }}>
                <FontAwesomeIcon icon={faUserCircle} size="5x" className="text-white" />
              </div>
            </div>
            <div className="col-8 p-4">
              <h3 className="card-title mb-2"><strong>Name :</strong> {userData.recipientName}</h3>
              <p className="text-muted">
                <strong>Email:</strong> {userData.recipientEmail}
              </p>
              <p className="text-muted">
                <strong>Phone:</strong> {userData.recipientPhoneNum}
              </p>
              <p className="text-muted">
                <strong>Address:</strong> {userData.recipientAddress}
              </p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="button" className="btn btn-outline-primary" onClick={handleEditClick}>
                  <FontAwesomeIcon icon={faEdit} /> Edit Profile
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} /> Delete Profile
                </button>
                <button type="button" className="btn btn-outline-warning" onClick={() => setShowPasswordModal(true)}>
                  <FontAwesomeIcon icon={faKey} /> Change Password
                </button>
              </div>
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
            {/* Name Field (Disabled) */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="recipientName"
                value={editedUserData.recipientName || ''}
                onChange={handleChange}
                disabled
              />
            </Form.Group>

            {/* Email Field (Disabled) */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="recipientEmail"
                value={editedUserData.recipientEmail || ''}
                onChange={handleChange}
                disabled
              />
            </Form.Group>

            {/* Editable Phone Number */}
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="recipientPhoneNum"
                value={editedUserData.recipientPhoneNum || ''}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Editable Address */}
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="recipientAddress"
                value={editedUserData.recipientAddress || ''}
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

      {/* Change Password Modal */}
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your current password"
                name="currentPassword"
                value={newPasswordData.currentPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                value={newPasswordData.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                value={newPasswordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowPasswordModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleChangePassword}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecipientProfile;
