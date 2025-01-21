// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Sidebar';
// import Content from './Content';
// import UserProfile from './UserProfile';
// import SignUp from '../pages/SignUp';




// const Donordashboard = () => {
//   const [selectedPage, setSelectedPage] = useState('home');

//   const handleSelect = (page) => {
//     setSelectedPage(page);
    
//   };
//   const [user, setUser] = useState(null);

//   const handleSignUp = (userData) => {
//     setUser(userData);
//   };

//   const handleEdit = (editedUserData) => {
//     setUser(editedUserData); // Update user data
//   };

//   const handleDelete = () => {
//     setUser(null); // Remove user data from state
//   };


//   return (
//     <div className="container-fluid pt-5">
//       <div className="row">
      
//         <div className="col-md-3">
//           <Sidebar onSelect={handleSelect} />
//         </div>
//         <div className="col-md-6 mt-5">
//           <Content page={selectedPage} />
//         </div>
       
//       </div>
//     </div>
    
//   );
// };

// export default Donordashboard;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Sidebar';
// import Content from './Content';
// import UserProfile from './UserProfile';
// import SignUp from '../pages/SignUp';

// const Donordashboard = () => {
//   const [selectedPage, setSelectedPage] = useState('home');

//   const handleSelect = (page) => {
//     setSelectedPage(page);
//   };

//   const [user, setUser] = useState(null);

//   const handleSignUp = (userData) => {
//     setUser(userData);
//   };

//   const handleEdit = (editedUserData) => {
//     setUser(editedUserData); // Update user data
//   };

//   const handleDelete = () => {
//     setUser(null); // Remove user data from state
//   };

//   return (
//     <div className="container-fluid pt-5">
//       <div className="row">
//         <div className="col-md-3">
//           <Sidebar onSelect={handleSelect} />
//         </div>
//         <div className="col-md-6 mt-5">
//           <Content page={selectedPage} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donordashboard;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Content from './Content';

const DonorDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  
  // Function to handle page selection
  const handleSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-12 col-md-3 mb-4">
          <Sidebar onSelect={handleSelect} />
        </div>
        <div className="col-12 col-md-9">
          <Content page={selectedPage} />
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
