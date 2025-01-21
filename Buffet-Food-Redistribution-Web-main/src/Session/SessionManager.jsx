// // src/components/SessionManager.js
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SessionManager = ({ children }) => {
//   const navigate = useNavigate();
//   const LOGIN_DURATION = 30 * 60 * 1000; // 30 minutes

//   useEffect(() => {
//     const lastLoginTime = localStorage.getItem('lastLoginTime');
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     const currentTime = new Date().getTime();

//     if (isLoggedIn && lastLoginTime && currentTime - lastLoginTime > LOGIN_DURATION) {
//       // Auto logout after 30 minutes
//       localStorage.removeItem('isLoggedIn');
//       localStorage.removeItem('lastLoginTime');
//       navigate('/login'); // Redirect to login page
//     } else if (isLoggedIn) {
//       localStorage.setItem('lastLoginTime', currentTime); // Update last activity time
//     } else {
//       navigate('/login'); // Redirect to login page if not logged in
//     }
//   }, [navigate]);

//   return children; // Render the app content if session is valid
// };

// export default SessionManager;

// src/components/SessionManager.js


// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SessionManager = ({ children }) => {
//   const navigate = useNavigate();
//   const LOGIN_DURATION = 120 * 60 * 1000; // 30 minutes

//   useEffect(() => {
//     const lastLoginTime = localStorage.getItem('lastLoginTime');
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const currentTime = new Date().getTime();

//     if (isLoggedIn && lastLoginTime && currentTime - lastLoginTime > LOGIN_DURATION) {
//       // Auto logout after 30 minutes
//       localStorage.removeItem('isLoggedIn');
//       localStorage.removeItem('lastLoginTime');
//       navigate('/login'); // Redirect to login page
//     } else if (isLoggedIn) {
//       localStorage.setItem('lastLoginTime', currentTime); // Update last activity time
//     } else {
//       navigate('/login'); // Redirect to login page if not logged in
//     }
//   }, [navigate]);

//   return children; // Render the app content if session is valid
// };

// export default SessionManager;

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SessionManager = ({ children }) => {
//   const navigate = useNavigate();
//   const LOGIN_DURATION = 30 * 60 * 1000; // 30 minutes

//   useEffect(() => {
//     const lastLoginTime = localStorage.getItem('lastLoginTime');
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const currentTime = new Date().getTime();

//     if (isLoggedIn && lastLoginTime && currentTime - lastLoginTime > LOGIN_DURATION) {
//       // Auto logout after 30 minutes
//       localStorage.removeItem('isLoggedIn');
//       localStorage.removeItem('lastLoginTime');
//       navigate('/login'); // Redirect to login page
//     } else if (isLoggedIn) {
//       localStorage.setItem('lastLoginTime', currentTime); // Update last activity time
//     } else {
//       navigate('/login'); // Redirect to login page if not logged in
//     }
//   }, [navigate, LOGIN_DURATION]);

//   return children; // Render the app content if session is valid
// };

// export default SessionManager;


//today
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SessionManager = ({ children }) => {
//   const navigate = useNavigate();
//   const LOGIN_DURATION = 1 * 60 * 1000; // 5 minutes

//   useEffect(() => {
//     const lastLoginTime = localStorage.getItem('lastLoginTime');
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const currentTime = new Date().getTime();

//     if (isLoggedIn && lastLoginTime && currentTime - lastLoginTime > LOGIN_DURATION) {
//       // Auto logout after 5 minutes
//       localStorage.removeItem('isLoggedIn');
//       localStorage.removeItem('lastLoginTime');
//       navigate('/login'); // Redirect to login page
//     } else if (isLoggedIn) {
//       localStorage.setItem('lastLoginTime', currentTime); // Update last activity time
//     } else {
//       navigate('/login'); // Redirect to login page if not logged in
//     }
//   }, [navigate, LOGIN_DURATION]);

//   return children; // Render the app content if session is valid
// };

// export default SessionManager;


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionManager = ({ children }) => {
  const navigate = useNavigate();
  const LOGIN_DURATION = 1 * 60 * 1000; // 5 minutes

  useEffect(() => {
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentTime = new Date().getTime();

    if (isLoggedIn && lastLoginTime) {
      if (currentTime - lastLoginTime > LOGIN_DURATION) {
        // Auto logout after 5 minutes
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('lastLoginTime');
        navigate('/login'); // Redirect to login page
      } else {
        localStorage.setItem('lastLoginTime', currentTime); // Update last activity time
      }
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [navigate, LOGIN_DURATION]);

  return children; // Render the app content if session is valid
};

export default SessionManager;
