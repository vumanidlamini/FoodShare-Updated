//src/PrivateRoutes/PrivateRoute.js

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../App'; // Adjust path as necessary

// const PrivateRoute = () => {
//   const { user } = useContext(UserContext);

//   // Redirect to login if not logged in
//   return user ? <Outlet /> : <Navigate to='/login' />;
// };



// export default PrivateRoute;

// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../App'; // Adjust path as necessary

// const PrivateRoute = () => {
//   const { user } = useContext(UserContext);
//   const location = useLocation();

//   // Redirect to login if not logged in, passing the current location as state
//   return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
// };

// export default PrivateRoute;

// import React, { useState, useEffect } from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const [isCheckingSession, setIsCheckingSession] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const expirationTime = localStorage.getItem('expirationTime');

//     if (token && expirationTime && new Date().getTime() < expirationTime) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('expirationTime');
//     }

//     setIsCheckingSession(false);
//   }, []);

//   if (isCheckingSession) {
//     return <div>Loading...</div>; // Optionally show a loading spinner while checking session
//   }

//   return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


// import React, { useState, useEffect } from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const [isCheckingSession, setIsCheckingSession] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const expirationTime = localStorage.getItem('expirationTime');

//     if (token && expirationTime && new Date().getTime() < expirationTime) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('expirationTime');
//     }

//     setIsCheckingSession(false);
//   }, []);

//   if (isCheckingSession) {
//     return <div>Loading...</div>; // Optionally show a loading spinner while checking session
//   }

//   return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('expirationTime');

    if (token && expirationTime && new Date().getTime() < expirationTime) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('authToken');
      localStorage.removeItem('expirationTime');
    }

    setIsCheckingSession(false);
  }, []);

  if (isCheckingSession) {
    return <div>Loading...</div>; // Optionally show a loading spinner while checking session
  }

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
