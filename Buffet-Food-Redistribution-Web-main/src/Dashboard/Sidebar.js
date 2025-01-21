// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHistory, faHourglassEnd, faUser, faDashboard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import FoodForm from '../Landing-page/FoodForm';
// const Sidebar = ({ onSelect }) => {
//   return (
//     <div className="sidebar d-flex flex-column bg-dark text-light pl-0 p-4 pt-5 vh-100 mr-0">
//       <h2 className='text-light'><FontAwesomeIcon icon={faDashboard} className="mr-2" />
//           {' '}&nbsp;
//           Dashboard</h2>
//       <Nav defaultActiveKey="/home" className="flex-column">
//        <br />
//        <br />
//        <br />
//        <br />
//        <br />
//        <h4> <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-light">
//           <FontAwesomeIcon icon={faUser} className="mr-2" />
//           {' '}&nbsp;
//           User Profile
//         </Nav.Link>
//         </h4>
//         <br />
//         <br />
//         <h4><Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-light">
//           <FontAwesomeIcon icon={faHistory} className="mr-2" />
//           {' '}&nbsp;
//           Donation History
//         </Nav.Link>
//         </h4>
//         <br />
//         <br />
//         <h4><Nav.Link onClick={() => onSelect('#')} className="font-weight-bold text-light">
//           <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
//           {' '}&nbsp;
//           Pending Request
//         </Nav.Link>
//         </h4>
//          <h4>
//         <div className="flex-grow-1"></div> {/* Flex grow to occupy remaining space */}
//         <br />
//         <br />
//         <Nav.Link onClick={() => onSelect('logout')} className="font-weight-bold text-light mt-auto">
//           <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//           {' '}&nbsp;
//           Logout
//         </Nav.Link>
//         </h4>
//       </Nav>
//     </div>
//   )
// }

// export default Sidebar;


// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHistory, faHourglassEnd, faUser, faDashboard, faCog ,faCommenting  } from '@fortawesome/free-solid-svg-icons';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodShareNetworkImage from '../components/FoodShareNetwork.jpeg'; // Import your image

// const Sidebar = ({ onSelect }) => {
//   return (
//     <div class="sidebar d-flex flex-column bg-secondary text-light p-4 pt-5 vh-100 col-8">

//       <h3 className='text-light text-center  text-dark rounded'>
//         <FontAwesomeIcon icon={faDashboard} className="mr-2" />
//         {' '}&nbsp;
//         Dashboard
//       </h3>
//       <br/>
//       <img src={FoodShareNetworkImage} alt="Food Share Network" className="img-fluid img-thumbnail my-3" style={{ maxWidth: '100%', height: 'auto' }}  />
//       <Nav defaultActiveKey="/home" className="flex-column">
//         <br />
//         <br />
       
//         <h5 className='text-center bg-light text-dark rounded'>
//           <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-dark">
//             <FontAwesomeIcon icon={faUser} className="mr-2" />
//             {' '}&nbsp;
//             User Profile
//           </Nav.Link>
//         </h5>
//         <br />
//         <br />
//         <h5 className='text-center bg-light text-dark rounded'>
//           <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-dark">
//             <FontAwesomeIcon icon={faHistory} className="mr-2" />
//             {' '}&nbsp;
//             Donation History
//           </Nav.Link>
//         </h5>
//         <br />
//         <br />
//         <h5 className='text-center bg-light text-dark rounded'>
//           <Nav.Link onClick={() => onSelect('#')} className="font-weight-bold text-dark">
//             <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
//             {' '}&nbsp;
//             Pending Request
//           </Nav.Link>
          
//         </h5>
//         <br/>
//         <br/>
//         <h5 className='text-center bg-light text-dark rounded'>
//           <Nav.Link onClick={() => onSelect('Reviewfeedback')} className="font-weight-bold text-dark">
//             <FontAwesomeIcon icon={faCommenting} className="mr-2" />
//             {' '}&nbsp;
//            Feedback
//           </Nav.Link>
//         </h5>
//         <br />
//         <br />
//         <h5 className='text-center bg-light text-dark rounded'>
//           <div className="flex-grow-1"></div> {/* Flex grow to occupy remaining space */}
          
        
//           <Nav.Link onClick={() => onSelect('ProfileSettings')} className=" font-weight-bold text-dark">
//             <FontAwesomeIcon icon={faCog } className="mr-2" />
//             {' '}&nbsp;
//             Logout
//           </Nav.Link>
//         </h5>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faHourglassEnd, faUser, faDashboard, faCog, faCommenting } from '@fortawesome/free-solid-svg-icons';
import FoodShareNetworkImage from '../components/FoodShareNetwork.jpeg'; // Import your image

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar d-flex flex-column bg-secondary text-light p-4 pt-5 vh-100">
      <h3 className='text-light text-center'>
        <FontAwesomeIcon icon={faDashboard} className="mr-2" />
        {' '}&nbsp;
        Dashboard
      </h3>
      <br />
      <img src={FoodShareNetworkImage} alt="Food Share Network" className="img-fluid img-thumbnail my-3" style={{ maxWidth: '100%', height: 'auto' }} />
      <Nav defaultActiveKey="/home" className="flex-column">
      
        <h5 className='text-center bg-light text-dark rounded'>
          <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-dark">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {' '}&nbsp;
            User Profile
          </Nav.Link>
        </h5>
        <p></p>
       
        <h5 className='text-center bg-light text-dark rounded'>
          <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-dark">
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            {' '}&nbsp;
            Donation History
          </Nav.Link>
        </h5>
        <p></p>
       
        <h5 className='text-center bg-light text-dark rounded'>
          <Nav.Link onClick={() => onSelect('#')} className="font-weight-bold text-dark">
            <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
            {' '}&nbsp;
            Pending Request
          </Nav.Link>
        </h5>
        <p></p>
        <h5 className='text-center bg-light text-dark rounded'>
          <Nav.Link onClick={() => onSelect('Reviewfeedback')} className="font-weight-bold text-dark">
            <FontAwesomeIcon icon={faCommenting} className="mr-2" />
            {' '}&nbsp;
            Feedback
          </Nav.Link>
        </h5>
        <p></p>
       
        <h5 className='text-center bg-light text-dark rounded'>
          <Nav.Link onClick={() => onSelect('ProfileSettings')} className="font-weight-bold text-dark">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            {' '}&nbsp;
            Profile Settings
          </Nav.Link>
        </h5>
      </Nav>
    </div>
  );
};

export default Sidebar;
