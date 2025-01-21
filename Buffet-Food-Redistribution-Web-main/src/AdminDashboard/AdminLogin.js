// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AdminLogin = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const correctUsername = "admin";
//   const correctPassword = "securepassword123";

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username !== correctUsername || password !== correctPassword) {
//       setError('Invalid username or password');
//     } else {
//       setError('');
//       onLoginSuccess();
//     }
//   };

//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#f8f9fa' }}>
//       <div className="col-md-6">
//         <div className="card">
//           <div className="card-header text-center" style={{ backgroundColor: '#333', color: '#fff' }}>
//             <h3>Admin Login</h3>
//           </div>
//           <div className="card-body">
//             {error && <div className="alert alert-danger">{error}</div>}
//             <form onSubmit={handleLogin}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   placeholder="Enter username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-dark btn-block w-100 mt-3">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const correctUsername = "admin";
  const correctPassword = "FoodShareNetwork";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username !== correctUsername || password !== correctPassword) {
      setError('Invalid username or password');
    } else {
      setError('');
      onLoginSuccess();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#f8f9fa' }}>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center" style={{ backgroundColor: '#333', color: '#fff' }}>
            <h3>Admin Login</h3>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-dark btn-block w-100 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


