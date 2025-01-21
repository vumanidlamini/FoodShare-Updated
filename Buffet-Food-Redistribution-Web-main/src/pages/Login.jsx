// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import 'react-toastify/dist/ReactToastify.css';
// import { UserContext } from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import video from "../components/videos/f.mp4";

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check localStorage for saved email and userType on component mount
//     const storedEmail = localStorage.getItem('rememberedEmail');
//     const storedUserType = localStorage.getItem('rememberedUserType');

//     if (storedEmail && storedUserType) {
//       setEmail(storedEmail);
//       setUserType(storedUserType);
//     }
//   }, []);

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (userType === 'Admin') {
//       handleAdminLogin();
//     } else {
//       handleUserLogin();
//     }
//   };

//   const handleUserLogin = async () => {
//     try {
//       const endpoint = userType.toLowerCase() === 'recipient'
//         ? 'http://localhost:5282/api/Recipient/Login'
//         : 'http://localhost:5282/api/Donor/Login';

//       const result = await axios.post(endpoint, {
//         [`${userType}Email`]: email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: userType.toLowerCase() });

//         localStorage.setItem('token', result.data.token);
//         setTimeout(() => {
//           navigate(userType.toLowerCase() === 'recipient' ? '/RecipientLandingPage' : '/home');
//         }, 5000);

//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   const handleAdminLogin = async () => {
//     try {
//       const result = await axios.post('http://localhost:5282/api/Admin', {
//         email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: 'admin' });

//         localStorage.setItem('token', result.data.token);
//         navigate('/adminDash');
//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Admin login failed:', error.response);
//       toast.error('Admin login failed. Please check your credentials.');
//     }
//   };

//   const getPrefixUsername = (email) => {
//     const username = email.split('@')[0];
//     return username.charAt(0).toUpperCase() + username.slice(1);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <ToastContainer />
//       <div className="login-form" style={{ width: '450px', background: 'rgba(255, 255, 255, 0.8)', padding: '40px 55px', borderRadius: '15px', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)' }}>
//         <form onSubmit={handleLogin}>
//           <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
//           <div style={{ marginBottom: '15px' }}>
//             <input
//               type="radio"
//               name="userType"
//               value="Recipient"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Recipient{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Donor"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Donor{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />{' '}
//             Admin
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div
//                 onClick={togglePasswordVisibility}
//                 style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>
//           {userType !== 'Admin' && (
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//           )}
//           <div className="d-grid">
//             <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Forgot <Link to="/forgot-password">password?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import 'react-toastify/dist/ReactToastify.css';
// import { UserContext } from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import video from "../components/videos/f.mp4";

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check localStorage for saved email and userType on component mount
//     const storedEmail = localStorage.getItem('rememberedEmail');
//     const storedUserType = localStorage.getItem('rememberedUserType');

//     if (storedEmail && storedUserType) {
//       setEmail(storedEmail);
//       setUserType(storedUserType);
//     }
//   }, []);

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (userType === 'Admin') {
//       handleAdminLogin();
//     } else {
//       handleUserLogin();
//     }
//   };

//   const handleUserLogin = async () => {
//     try {
//       const endpoint = userType.toLowerCase() === 'recipient'
//         ? 'http://localhost:5282/api/Recipient/Login'
//         : 'http://localhost:5282/api/Donor/Login';

//       const result = await axios.post(endpoint, {
//         [`${userType}Email`]: email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: userType.toLowerCase() });

//         localStorage.setItem('token', result.data.token);
//         setTimeout(() => {
//           navigate(userType.toLowerCase() === 'recipient' ? '/RecipientLandingPage' : '/home');
//         }, 5000);

//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   const handleAdminLogin = async () => {
//     try {
//       const result = await axios.post('http://localhost:5282/api/Admin', {
//         email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: 'admin' });

//         localStorage.setItem('token', result.data.token);
//         navigate('/adminDash');
//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Admin login failed:', error.response);
//       toast.error('Admin login failed. Please check your credentials.');
//     }
//   };

//   const getPrefixUsername = (email) => {
//     const username = email.split('@')[0];
//     return username.charAt(0).toUpperCase() + username.slice(1);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
//         zIndex: -1,
//       }} />

//       <ToastContainer />
//       <div className="login-form" style={{ width: '450px', background: 'rgba(169, 169, 169, 0.8)', padding: '40px 55px', borderRadius: '15px', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', position: 'relative', zIndex: 1 }}>
//         <form onSubmit={handleLogin}>
//           <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
//           <div style={{ marginBottom: '15px' }}>
//             <input
//               type="radio"
//               name="userType"
//               value="Recipient"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Recipient{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Donor"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Donor{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />{' '}
//             Admin
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div
//                 onClick={togglePasswordVisibility}
//                 style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>
//           {userType !== 'Admin' && (
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//           )}
//           <div className="d-grid">
//             <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Forgot <Link to="/forgot-password">password?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import 'react-toastify/dist/ReactToastify.css';
// import { UserContext } from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import video from "../components/videos/f.mp4";

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check localStorage for saved email and userType on component mount
//     const storedEmail = localStorage.getItem('rememberedEmail');
//     const storedUserType = localStorage.getItem('rememberedUserType');

//     if (storedEmail && storedUserType) {
//       setEmail(storedEmail);
//       setUserType(storedUserType);
//     }
//   }, []);

//   const handleLoginSuccess = (token, redirectPath) => {
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('lastLoginTime', new Date().getTime());
//     localStorage.setItem('token', token);
//     setUser({ prefixUsername: getPrefixUsername(email), userType: userType.toLowerCase() });
//     navigate(redirectPath);
//     if (onLoginSuccess) onLoginSuccess();
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (userType === 'Admin') {
//       handleAdminLogin();
//     } else {
//       handleUserLogin();
//     }
//   };

//   const handleUserLogin = async () => {
//     try {
//       const endpoint = userType.toLowerCase() === 'recipient'
//         ? 'http://localhost:5282/api/Recipient/Login'
//         : 'http://localhost:5282/api/Donor/Login';

//       const result = await axios.post(endpoint, {
//         [`${userType}Email`]: email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: userType.toLowerCase() });

//         sessionStorage.setItem('token', result.data.token);
//         setTimeout(() => {
//           navigate(userType.toLowerCase() === 'recipient' ? '/RecipientLandingPage' : '/home');
//         }, 5000);

//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   const handleAdminLogin = async () => {
//     try {
//       const result = await axios.post('http://localhost:5282/api/Admin', {
//         email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         handleLoginSuccess(result.data.token, '/adminDash');
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error('Admin login failed:', error.response);
//       toast.error('Admin login failed. Please check your credentials.');
//     }
//   };

//   const getPrefixUsername = (email) => {
//     const username = email.split('@')[0];
//     return username.charAt(0).toUpperCase() + username.slice(1);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
//         zIndex: -1,
//       }} />

//       <ToastContainer />
//       <div className="login-form" style={{ width: '450px', background: 'rgba(169, 169, 169, 0.8)', padding: '40px 55px', borderRadius: '15px', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', position: 'relative', zIndex: 1 }}>
//         <form onSubmit={handleLogin}>
//           <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
//           <div style={{ marginBottom: '15px' }}>
//             <input
//               type="radio"
//               name="userType"
//               value="Recipient"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Recipient{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Donor"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{' '}
//             Donor{' '}
//             <input
//               type="radio"
//               name="userType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />{' '}
//             Admin
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div
//                 onClick={togglePasswordVisibility}
//                 style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>
//           {userType !== 'Admin' && (
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//           )}
//           <div className="d-grid">
//             <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Forgot <Link to="/forgot-password">password?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

//Update monday

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../components/videos/f.mp4";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for saved email and userType on component mount
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedUserType = localStorage.getItem("rememberedUserType");

    if (storedEmail && storedUserType) {
      setEmail(storedEmail);
      setUserType(storedUserType);
    }
  }, []);

  const handleLoginSuccess = (token, redirectPath) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("lastLoginTime", new Date().getTime());
    localStorage.setItem("token", token);
    setUser({
      prefixUsername: getPrefixUsername(email),
      userType: userType.toLowerCase(),
    });
    navigate(redirectPath);
    if (onLoginSuccess) onLoginSuccess();
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (userType === "Admin") {
      handleAdminLogin();
    } else {
      handleUserLogin();
    }
  };

  const handleUserLogin = async () => {
    try {
      const endpoint =
        userType.toLowerCase() === "recipient"
          ? "http://localhost:5282/api/Recipient/Login"
          : "http://localhost:5282/api/Donor/Login";

      const result = await axios.post(endpoint, {
        [`${userType}Email`]: email,
        password,
      });

      if (result.data.flag) {
        toast.success(result.data.message);
        const prefixUsername = getPrefixUsername(email);
        setUser({ prefixUsername, userType: userType.toLowerCase() });

        sessionStorage.setItem("token", result.data.token);
        setTimeout(() => {
          // Retrieve the redirect path from sessionStorage
          const redirectPath =
            sessionStorage.getItem("postLoginRedirect") ||
            (userType.toLowerCase() === "recipient"
              ? "/RecipientLandingPage"
              : "/home");
          sessionStorage.removeItem("postLoginRedirect");
          navigate(redirectPath);
        }, 5000);

        if (onLoginSuccess) onLoginSuccess();
      } else {
        toast.warning(result.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.response);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleAdminLogin = async () => {
    try {
      const result = await axios.post("http://localhost:5282/api/Admin", {
        email,
        password,
      });
      console.log(result.data.token);
      if (result.data.token) {
        toast.success(result.data.message);
        handleLoginSuccess(result.data.token, "/adminDash");
        
      } else {
        toast.warning(result.data.message);
      }
    } catch (error) {
      console.error("Admin login failed:", error.response);
      toast.error("Admin login failed. Please check your credentials.");
    }
  };

  const getPrefixUsername = (email) => {
    const username = email.split("@")[0];
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="login-container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="img-fluid w-100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
          zIndex: -1,
        }}
      />

      <ToastContainer />
      <div
        className="login-form"
        style={{
          width: "450px",
          background: "rgba(169, 169, 169, 0.8)",
          padding: "40px 55px",
          borderRadius: "15px",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <form onSubmit={handleLogin}>
          <h3
            style={{
              textAlign: "center",
              margin: "0",
              lineHeight: "1",
              paddingBottom: "20px",
            }}
          >
            Login
          </h3>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="radio"
              name="userType"
              value="Recipient"
              onChange={(e) => setUserType(e.target.value)}
              required
            />{" "}
            Recipient{" "}
            <input
              type="radio"
              name="userType"
              value="Donor"
              onChange={(e) => setUserType(e.target.value)}
              required
            />{" "}
            Donor{" "}
            <input
              type="radio"
              name="userType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Admin
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          {userType !== "Admin" && (
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
          )}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to="/forgot-password">password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// OTP

// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
// import "react-toastify/dist/ReactToastify.css";
// import { UserContext } from "../App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import video from "../components/videos/f.mp4";

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check localStorage for saved email and userType on component mount
//     const storedEmail = localStorage.getItem("rememberedEmail");
//     const storedUserType = localStorage.getItem("rememberedUserType");

//     if (storedEmail && storedUserType) {
//       setEmail(storedEmail);
//       setUserType(storedUserType);
//     }
//   }, []);

//   const handleLoginSuccess = (token, redirectPath) => {
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("lastLoginTime", new Date().getTime());
//     localStorage.setItem("token", token);
//     setUser({
//       prefixUsername: getPrefixUsername(email),
//       userType: userType.toLowerCase(),
//     });
//     navigate(redirectPath);
//     if (onLoginSuccess) onLoginSuccess();
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (isOtpSent) {
//       // Verify OTP
//       handleVerifyOtp();
//     } else {
//       // Send OTP
//       handleSendOtp();
//     }
//   };

//   const handleSendOtp = async () => {
//     try {
//       // Send request to backend to generate and send OTP
//       const endpoint =
//         userType.toLowerCase() === "recipient"
//           ? "http://localhost:5282/api/Recipient/SendOtp"
//           : "http://localhost:5282/api/Donor/SendOtp";

//       const result = await axios.post(endpoint, {
//         email,
//         userType,
//       });

//       if (result.data.success) {
//         toast.success("OTP sent to your email!");
//         setIsOtpSent(true);
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error.response);
//       toast.error("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const endpoint =
//         userType.toLowerCase() === "recipient"
//           ? "http://localhost:5282/api/Recipient/VerifyOtp"
//           : "http://localhost:5282/api/Donor/VerifyOtp";

//       const result = await axios.post(endpoint, {
//         email,
//         otp,
//       });

//       if (result.data.success) {
//         toast.success("OTP verified successfully!");
//         // Proceed with password login after OTP verification
//         handleUserLogin();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error.response);
//       toast.error("OTP verification failed. Please try again.");
//     }
//   };

//   const handleUserLogin = async () => {
//     try {
//       const endpoint =
//         userType.toLowerCase() === "recipient"
//           ? "http://localhost:5282/api/Recipient/Login"
//           : "http://localhost:5282/api/Donor/Login";

//       const result = await axios.post(endpoint, {
//         [`${userType}Email`]: email,
//         password,
//       });

//       if (result.data.flag) {
//         toast.success(result.data.message);
//         const prefixUsername = getPrefixUsername(email);
//         setUser({ prefixUsername, userType: userType.toLowerCase() });

//         sessionStorage.setItem("token", result.data.token);
//         setTimeout(() => {
//           // Retrieve the redirect path from sessionStorage
//           const redirectPath =
//             sessionStorage.getItem("postLoginRedirect") ||
//             (userType.toLowerCase() === "recipient"
//               ? "/RecipientLandingPage"
//               : "/home");
//           sessionStorage.removeItem("postLoginRedirect");
//           navigate(redirectPath);
//         }, 5000);

//         if (onLoginSuccess) onLoginSuccess();
//       } else {
//         toast.warning(result.data.message);
//       }
//     } catch (error) {
//       console.error("Login failed:", error.response);
//       toast.error("Login failed. Please check your credentials.");
//     }
//   };

//   const getPrefixUsername = (email) => {
//     const username = email.split("@")[0];
//     return username.charAt(0).toUpperCase() + username.slice(1);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div
//       className="login-container"
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: -2,
//         }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
//           zIndex: -1,
//         }}
//       />

//       <ToastContainer />
//       <div
//         className="login-form"
//         style={{
//           width: "450px",
//           background: "rgba(169, 169, 169, 0.8)",
//           padding: "40px 55px",
//           borderRadius: "15px",
//           boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <form onSubmit={handleLogin}>
//           <h3
//             style={{
//               textAlign: "center",
//               margin: "0",
//               lineHeight: "1",
//               paddingBottom: "20px",
//             }}
//           >
//             Login
//           </h3>
//           <div style={{ marginBottom: "15px" }}>
//             <input
//               type="radio"
//               name="userType"
//               value="Recipient"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{" "}
//             Recipient{" "}
//             <input
//               type="radio"
//               name="userType"
//               value="Donor"
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             />{" "}
//             Donor{" "}
//             <input
//               type="radio"
//               name="userType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />{" "}
//             Admin
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}

//           {/* Email field */}
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* OTP or Password based on isOtpSent */}
//           {isOtpSent ? (
//             <div className="mb-3">
//               <label>Enter OTP</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//               />
//             </div>
//           ) : (
//             <div className="mb-3">
//               <label>Password</label>
//               <div style={{ position: "relative" }}>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <div
//                   onClick={togglePasswordVisibility}
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="d-grid">
//             <button
//               type="submit"
//               className="btn btn-dark"
//               style={{ width: "100%" }}
//             >
//               {isOtpSent ? "Verify OTP" : "Send OTP"}
//             </button>
//           </div>

//           <p className="forgot-password text-right">
//             Forgot <Link to="/forgot-password">password?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
