// import React, { useState } from 'react';
// import axios from 'axios';

// function UpdatePassword() {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (newPassword !== confirmPassword) {
//       setErrorMessage("New passwords do not match.");
//       return;
//     }

//     if (newPassword.length < 8) {
//       setErrorMessage("New password must be at least 8 characters long.");
//       return;
//     }

//     try {
//       // Mock API call to update password
//       const response = await axios.post('/api/update-password', {
//         oldPassword,
//         newPassword
//       });

//       // Check the response status
//       if (response.data.success) {
//         setSuccessMessage("Password updated successfully!");
//         setErrorMessage('');
//         // Clear form fields
//         setOldPassword('');
//         setNewPassword('');
//         setConfirmPassword('');
//       } else {
//         setErrorMessage(response.data.message || "Failed to update password.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
//     <div className="container">
//     <div className="row justify-content-center">
//     <div className="col-md-6">
//             <div className="card shadow">
//               <div className="card-body">
//       <h2>Update Password</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="oldPassword" className="form-label">Old Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="oldPassword"
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newPassword" className="form-label">New Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//         {successMessage && <div className="alert alert-success">{successMessage}</div>}

//         <button type="submit" className="btn btn-primary w-100">Update Password</button>
//       </form>
//       </div>
//     </div>
//     </div>
//      </div>
//     </div>
//     </div>

//   );
// }
// export default UpdatePassword;


import React, { useState } from 'react';
import axios from 'axios';

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setErrorMessage("New password must be at least 8 characters long.");
      return;
    }

    try {
      // Mock API call to update password
      const response = await axios.post('/api/update-password', {
        oldPassword,
        newPassword
      });

      // Check the response status
      if (response.data.success) {
        setSuccessMessage("Password updated successfully!");
        setErrorMessage('');
        // Clear form fields
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage(response.data.message || "Failed to update password.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center mt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h2>Update Password</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}

                  <button type="submit" className="btn btn-primary w-100">Update Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
