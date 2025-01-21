
// import React, { useState } from 'react';
// import { Container, Navbar, Nav, Row, Col, Button, Card } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaTachometerAlt, FaUserCheck, FaDonate, FaCommentDots, FaUserCircle, FaBell } from 'react-icons/fa';
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import UserAccounts from './UserAccounts';
// import DonationHistory from './DonationHistory';
// import RecipientRequestHistory from './RecipientRequestHistory';
// import Settings from './Settings';
// import FoodDonationDashboard from './FoodDonationDashboard';
// import WelcomePage from './WelcomePage';
// import Profile from './Profile';
// import ProfilePic from './assets/ProfilePic.jpg';
// import Logo from './assets/logo.jpeg';
// import RecipientAccounts from './RecipientAccounts';

// const AdminDash = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNavbarShaking, setIsNavbarShaking] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleNavbarItemClick = () => {
//     setIsNavbarShaking(true);
//     setTimeout(() => {
//       setIsNavbarShaking(false);
//     }, 500);
//   };

//   const isActive = (path) => location.pathname === path;

//   const notifications = [];

//   const handleNotificationsClick = () => {
//     navigate('/adminDash/notifications');
//     handleNavbarItemClick();
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Container fluid>
//           <Navbar.Brand href="/" className="d-flex align-items-center text-success ml-5">
//             <img
//               src={Logo}
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Logo"
//             />
//             Food Share Network
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 className={`${isActive('/adminDash') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash'); handleNavbarItemClick(); }}
//               >
//                 <FaHome /> Home
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/profile') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/profile'); handleNavbarItemClick(); }}
//               >
//                 <FaUserCircle /> Profile
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/settings') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/settings'); handleNavbarItemClick(); }}
//               >
//                 <FaCog /> Settings
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/about') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/about'); handleNavbarItemClick(); }}
//               >
//                 <FaInfoCircle /> About
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/notifications') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={handleNotificationsClick}
//               >
//                 <FaBell /> Notifications
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/'); handleNavbarItemClick(); }}
//               >
//                 <FaSignOutAlt /> Logout
//               </Nav.Link>
             
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="d-flex flex-grow-1 overflow-hidden" style={{ marginTop: '70px' }}>
//         <div className={`bg-dark text-white d-flex flex-column p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: isSidebarOpen ? '250px' : '80px' }}>
//           <Button
//             variant="link"
//             className="text-white mb-3"
//             onClick={handleSidebarToggle}
//             aria-label="Toggle sidebar"
//           >
//             {isSidebarOpen ? 'Admin' : 'Dashboard'}
//           </Button>

//           {isSidebarOpen && (
//             <div className="text-center mb-3">
//               <img
//                 src={ProfilePic}
//                 width="100"
//                 height="100"
//                 className="rounded-circle mb-2"
//                 alt="ProfilePic"
//               />
//               <h5 className="mt-2">Ndumiso Buthelezi</h5>
//             </div>
//           )}

//           <Nav className="flex-column">
//             <Button
//               variant={isActive('/adminDash/foodDonationDashboard') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/foodDonationDashboard'); handleNavbarItemClick(); }}
//             >
//               <FaTachometerAlt /> {isSidebarOpen && 'Dashboard'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/userAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/userAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Donor Accounts'}
//             </Button>

//             <br/>
//             <Button
//               variant={isActive('/adminDash/RecipientAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/RecipientAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Recipient Accounts'}
//             </Button>


//             <br/>

//             <Button
//               variant={isActive('/adminDash/donationHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/donationHistory'); handleNavbarItemClick(); }}
//             >
//               <FaDonate /> {isSidebarOpen && 'Donation History'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/recipientRequestHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/recipientRequestHistory'); handleNavbarItemClick(); }}
//             >
//               <FaUserCheck /> {isSidebarOpen && 'Recipient History'}
//             </Button>
            
//           </Nav>
//         </div>

//         <Container fluid className="flex-grow-1 p-3 bg-light overflow-auto">
//           <Row>
//             <Col>
//               <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/foodDonationDashboard" element={<FoodDonationDashboard />} />
//                 <Route path="/userAccounts" element={<UserAccounts />} />
//                 <Route path="/donationHistory" element={<DonationHistory />} />
//                 <Route path="/recipientRequestHistory" element={<RecipientRequestHistory />} />
//                 <Route path="/settings" element={<Settings />} />
//                 <Route path="/RecipientAccounts" element={<RecipientAccounts />} />
//                 <Route path="/notifications" element={
//                   <div className="mb-3">
//                     <h5 className="text-center">Notifications</h5>
//                     <Row>
//                       {notifications.map((notification, index) => (
//                         <Col key={index} sm={12} md={6} lg={4}>
//                           <Card className="mb-3 p-3 border" style={{ backgroundColor: '#444', color: '#fff', marginTop: '20px' }}>
//                             <Card.Body>
//                               <Card.Text>{notification}</Card.Text>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </div>
//                 } />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <footer className="bg-dark text-white text-center py-3">
//         &copy; 2024 Food Share Network. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default AdminDash;


// import React, { useState } from 'react';
// import { Container, Navbar, Nav, Row, Col, Button, Card } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaTachometerAlt, FaUserCheck, FaDonate, FaCommentDots, FaUserCircle, FaBell } from 'react-icons/fa';
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import UserAccounts from './UserAccounts';
// import DonationHistory from './DonationHistory';
// import RecipientRequestHistory from './RecipientRequestHistory';
// import Settings from './Settings';
// import FoodDonationDashboard from './FoodDonationDashboard';
// import WelcomePage from './WelcomePage';
// import Profile from './Profile';
// import ProfilePic from './assets/ProfilePic.jpg';
// import Logo from './assets/logo.jpeg';
// import RecipientAccounts from './RecipientAccounts';

// const AdminDash = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNavbarShaking, setIsNavbarShaking] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleNavbarItemClick = () => {
//     setIsNavbarShaking(true);
//     setTimeout(() => {
//       setIsNavbarShaking(false);
//     }, 500);
//   };

//   const isActive = (path) => location.pathname === path;

//   const notifications = [];

//   const handleNotificationsClick = () => {
//     navigate('/adminDash/notifications');
//     handleNavbarItemClick();
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Container fluid>
//           <Navbar.Brand href="/" className="d-flex align-items-center text-success ml-5">
//             <img
//               src={Logo}
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Logo"
//             />
//             Food Share Network
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 className={`${isActive('/adminDash') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash'); handleNavbarItemClick(); }}
//               >
//                 <FaHome /> Home
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/profile') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/profile'); handleNavbarItemClick(); }}
//               >
//                 <FaUserCircle /> Profile
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/settings') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/settings'); handleNavbarItemClick(); }}
//               >
//                 <FaCog /> Settings
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/about') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/about'); handleNavbarItemClick(); }}
//               >
//                 <FaInfoCircle /> About
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/notifications') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={handleNotificationsClick}
//               >
//                 <FaBell /> Notifications
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/'); handleNavbarItemClick(); }}
//               >
//                 <FaSignOutAlt /> Logout
//               </Nav.Link>
             
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="d-flex flex-grow-1 overflow-hidden" style={{ marginTop: '70px' }}>
//         <div className={`bg-dark text-white d-flex flex-column p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: isSidebarOpen ? '250px' : '80px' }}>
//           <Button
//             variant="link"
//             className="text-white mb-3"
//             onClick={handleSidebarToggle}
//             aria-label="Toggle sidebar"
//           >
//             {isSidebarOpen ? 'Admin' : 'Dashboard'}
//           </Button>

//           {isSidebarOpen && (
//             <div className="text-center mb-3">
//               <img
//                 src={ProfilePic}
//                 width="100"
//                 height="100"
//                 className="rounded-circle mb-2"
//                 alt="ProfilePic"
//               />
//               <h5 className="mt-2">Ndumiso Buthelezi</h5>
//             </div>
//           )}

//           <Nav className="flex-column">
//             <Button
//               variant={isActive('/adminDash/foodDonationDashboard') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/foodDonationDashboard'); handleNavbarItemClick(); }}
//             >
//               <FaTachometerAlt /> {isSidebarOpen && 'Dashboard'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/userAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/userAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Donor Accounts'}
//             </Button>

//             <br/>
//             <Button
//               variant={isActive('/adminDash/RecipientAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/RecipientAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Recipient Accounts'}
//             </Button>


//             <br/>

//             <Button
//               variant={isActive('/adminDash/donationHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/donationHistory'); handleNavbarItemClick(); }}
//             >
//               <FaDonate /> {isSidebarOpen && 'Donation History'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/recipientRequestHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/recipientRequestHistory'); handleNavbarItemClick(); }}
//             >
//               <FaUserCheck /> {isSidebarOpen && 'Recipient History'}
//             </Button>
            
//           </Nav>
//         </div>

//         <Container fluid className="flex-grow-1 p-3 bg-light overflow-auto">
//           <Row>
//             <Col>
//               <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/foodDonationDashboard" element={<FoodDonationDashboard />} />
//                 <Route path="/userAccounts" element={<UserAccounts />} />
//                 <Route path="/donationHistory" element={<DonationHistory />} />
//                 <Route path="/recipientRequestHistory" element={<RecipientRequestHistory />} />
//                 <Route path="/settings" element={<Settings />} />
//                 <Route path="/RecipientAccounts" element={<RecipientAccounts />} />
//                 <Route path="/notifications" element={
//                   <div className="mb-3">
//                     <h5 className="text-center">Notifications</h5>
//                     <Row>
//                       {notifications.map((notification, index) => (
//                         <Col key={index} sm={12} md={6} lg={4}>
//                           <Card className="mb-3 p-3 border" style={{ backgroundColor: '#444', color: '#fff', marginTop: '20px' }}>
//                             <Card.Body>
//                               <Card.Text>{notification}</Card.Text>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </div>
//                 } />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <footer className="bg-dark text-white text-center py-3">
//         &copy; 2024 Food Share Network. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default AdminDash;

// import React, { useState } from 'react';
// import { Container, Navbar, Nav, Row, Col, Button, Card } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaTachometerAlt, FaUserCheck, FaDonate, FaCommentDots, FaUserCircle, FaBell } from 'react-icons/fa';
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import UserAccounts from './UserAccounts';
// import DonationHistory from './DonationHistory';
// import RecipientRequestHistory from './RecipientRequestHistory';
// import Settings from './Settings';
// import FoodDonationDashboard from './FoodDonationDashboard';
// import WelcomePage from './WelcomePage';
// import Profile from './Profile';
// import ProfilePic from './assets/ProfilePic.jpg';
// import Logo from './assets/logo.jpeg';
// import RecipientAccounts from './RecipientAccounts';

// const AdminDash = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isNavbarShaking, setIsNavbarShaking] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleNavbarItemClick = () => {
//     setIsNavbarShaking(true);
//     setTimeout(() => {
//       setIsNavbarShaking(false);
//     }, 500);
//   };

//   const isActive = (path) => location.pathname === path;

//   const notifications = [];

//   const handleNotificationsClick = () => {
//     navigate('/adminDash/notifications');
//     handleNavbarItemClick();
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Container fluid>
//           <Navbar.Brand href="/" className="d-flex align-items-center text-success ml-5">
//             <img
//               src={Logo}
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Logo"
//             />
//             Food Share Network
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 className={`${isActive('/adminDash') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash'); handleNavbarItemClick(); }}
//               >
//                 <FaHome /> Home
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/profile') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/profile'); handleNavbarItemClick(); }}
//               >
//                 <FaUserCircle /> Profile
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/settings') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/settings'); handleNavbarItemClick(); }}
//               >
//                 <FaCog /> Settings
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/about') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/adminDash/about'); handleNavbarItemClick(); }}
//               >
//                 <FaInfoCircle /> About
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/adminDash/notifications') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={handleNotificationsClick}
//               >
//                 <FaBell /> Notifications
//               </Nav.Link>
//               <Nav.Link
//                 className={`${isActive('/') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
//                 onClick={() => { navigate('/'); handleNavbarItemClick(); }}
//               >
//                 <FaSignOutAlt /> Logout
//               </Nav.Link>
             
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="d-flex flex-grow-1 overflow-hidden" style={{ marginTop: '70px' }}>
//         <div className={`bg-dark text-white d-flex flex-column p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: isSidebarOpen ? '250px' : '80px' }}>
//           <Button
//             variant="link"
//             className="text-white mb-3"
//             onClick={handleSidebarToggle}
//             aria-label="Toggle sidebar"
//           >
//             {isSidebarOpen ? 'Admin' : 'Dashboard'}
//           </Button>

//           {isSidebarOpen && (
//             <div className="text-center mb-3">
//               <img
//                 src={ProfilePic}
//                 width="100"
//                 height="100"
//                 className="rounded-circle mb-2"
//                 alt="ProfilePic"
//               />
//               <h5 className="mt-2">Ndumiso Buthelezi</h5>
//             </div>
//           )}

//           <Nav className="flex-column">
//             <Button
//               variant={isActive('/adminDash/foodDonationDashboard') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/foodDonationDashboard'); handleNavbarItemClick(); }}
//             >
//               <FaTachometerAlt /> {isSidebarOpen && 'Dashboard'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/userAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/userAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Donor Accounts'}
//             </Button>

//             <br/>
//             <Button
//               variant={isActive('/adminDash/RecipientAccounts') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/RecipientAccounts'); handleNavbarItemClick(); }}
//             >
//               <FaUser /> {isSidebarOpen && 'Recipient Accounts'}
//             </Button>


//             <br/>

//             <Button
//               variant={isActive('/adminDash/donationHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/donationHistory'); handleNavbarItemClick(); }}
//             >
//               <FaDonate /> {isSidebarOpen && 'Donation History'}
//             </Button>
//             <br/>
//             <Button
//               variant={isActive('/adminDash/recipientRequestHistory') ? 'secondary' : 'outline-secondary'}
//               className="mb-2 text-start"
//               onClick={() => { navigate('/adminDash/recipientRequestHistory'); handleNavbarItemClick(); }}
//             >
//               <FaUserCheck /> {isSidebarOpen && 'Recipient History'}
//             </Button>
            
//           </Nav>
//         </div>

//         <Container fluid className="flex-grow-1 p-3 bg-light overflow-auto">
//           <Row>
//             <Col>
//               <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="foodDonationDashboard" element={<FoodDonationDashboard />} />
//                 <Route path="userAccounts" element={<UserAccounts />} />
//                 <Route path="donationHistory" element={<DonationHistory />} />
//                 <Route path="recipientRequestHistory" element={<RecipientRequestHistory />} />
//                 <Route path="settings" element={<Settings />} />
//                 <Route path="RecipientAccounts" element={<RecipientAccounts />} />
//                 <Route path="notifications" element={
//                   <div className="mb-3">
//                     <h5 className="text-center">Notifications</h5>
//                     <Row>
//                       {notifications.map((notification, index) => (
//                         <Col key={index} sm={12} md={6} lg={4}>
//                           <Card className="mb-3 p-3 border" style={{ backgroundColor: '#444', color: '#fff', marginTop: '20px' }}>
//                             <Card.Body>
//                               <Card.Text>{notification}</Card.Text>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </div>
//                 } />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <footer className="bg-dark text-white text-center py-3">
//         &copy; 2024 Food Share Network. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default AdminDash;

import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav, Row, Col, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaTachometerAlt, FaUserCheck, FaDonate, FaCommentDots, FaUserCircle, FaBell } from 'react-icons/fa';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import UserAccounts from './UserAccounts';
import DonationHistory from './DonationHistory';
import RecipientRequestHistory from './RecipientRequestHistory';
import Settings from './Settings';
import FoodDonationDashboard from './FoodDonationDashboard';
import WelcomePage from './WelcomePage';
import Profile from './Profile';
import ProfilePic from './assets/ProfilePic.jpg';
import Logo from './assets/logo.jpeg';
import RecipientAccounts from './RecipientAccounts';
import { UserContext } from '../App'; // Ensure correct import path

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNavbarShaking, setIsNavbarShaking] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogout } = useContext(UserContext);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavbarItemClick = () => {
    setIsNavbarShaking(true);
    setTimeout(() => {
      setIsNavbarShaking(false);
    }, 500);
  };

  const isActive = (path) => location.pathname === path;

  const notifications = [];

  const handleNotificationsClick = () => {
    navigate('/adminDash/notifications');
    handleNavbarItemClick();
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center text-success ml-5">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            Food Share Network
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={`${isActive('/adminDash') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={() => { navigate('/adminDash'); handleNavbarItemClick(); }}
              >
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link
                className={`${isActive('/adminDash/profile') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={() => { navigate('/adminDash/profile'); handleNavbarItemClick(); }}
              >
                <FaUserCircle /> Profile
              </Nav.Link>
              {/* <Nav.Link
                className={`${isActive('/adminDash/settings') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={() => { navigate('/adminDash/settings'); handleNavbarItemClick(); }}
              >
                <FaCog /> Settings
              </Nav.Link> */}
              {/* <Nav.Link
                className={`${isActive('/adminDash/about') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={() => { navigate('/adminDash/about'); handleNavbarItemClick(); }}
              >
                <FaInfoCircle /> About
              </Nav.Link> */}
              <Nav.Link
                className={`${isActive('/adminDash/notifications') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={handleNotificationsClick}
              >
                <FaBell /> Notifications
              </Nav.Link>
              <Nav.Link
                className={`${isActive('/') ? 'text-secondary' : 'text-white'} ${isNavbarShaking ? 'shake-animation' : ''}`}
                onClick={() => { handleLogout(); handleNavbarItemClick(); }}
              >
                <FaSignOutAlt /> Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-grow-1 overflow-hidden" style={{ marginTop: '70px' }}>
        <div className={`bg-dark text-white d-flex flex-column p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: isSidebarOpen ? '250px' : '80px' }}>
          <Button
            variant="link"
            className="text-white mb-3"
            onClick={handleSidebarToggle}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? 'Admin' : 'Dashboard'}
          </Button>

          {isSidebarOpen && (
            <div className="text-center mb-3">
              <img
                src={ProfilePic}
                width="100"
                height="100"
                className="rounded-circle mb-2"
                alt="ProfilePic"
              />
              <h5 className="mt-2">Food Share</h5>
            </div>
          )}

          <Nav className="flex-column">
            <Button
              variant={isActive('/adminDash/foodDonationDashboard') ? 'secondary' : 'outline-secondary'}
              className="mb-2 text-start"
              onClick={() => { navigate('/adminDash/foodDonationDashboard'); handleNavbarItemClick(); }}
            >
              <FaTachometerAlt /> {isSidebarOpen && 'Dashboard'}
            </Button>
            <br />
            <Button
              variant={isActive('/adminDash/userAccounts') ? 'secondary' : 'outline-secondary'}
              className="mb-2 text-start"
              onClick={() => { navigate('/adminDash/userAccounts'); handleNavbarItemClick(); }}
            >
              <FaUser /> {isSidebarOpen && 'Donor Accounts'}
            </Button>

            <br />

            <Button
              variant={isActive('/adminDash/RecipientAccounts') ? 'secondary' : 'outline-secondary'}
              className="mb-2 text-start"
              onClick={() => { navigate('/adminDash/RecipientAccounts'); handleNavbarItemClick(); }}
            >
              <FaUser /> {isSidebarOpen && 'Recipient Accounts'}
            </Button>

            <br />

            <Button
              variant={isActive('/adminDash/donationHistory') ? 'secondary' : 'outline-secondary'}
              className="mb-2 text-start"
              onClick={() => { navigate('/adminDash/donationHistory'); handleNavbarItemClick(); }}
            >
              <FaDonate /> {isSidebarOpen && 'Donation History'}
            </Button>
            <br />
            <Button
              variant={isActive('/adminDash/recipientRequestHistory') ? 'secondary' : 'outline-secondary'}
              className="mb-2 text-start"
              onClick={() => { navigate('/adminDash/recipientRequestHistory'); handleNavbarItemClick(); }}
            >
              <FaUserCheck /> {isSidebarOpen && 'Recipient History'}
            </Button>
          </Nav>
        </div>

        <Container fluid className="flex-grow-1 p-3 bg-light overflow-auto">
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="foodDonationDashboard" element={<FoodDonationDashboard />} />
                <Route path="userAccounts" element={<UserAccounts />} />
                <Route path="donationHistory" element={<DonationHistory />} />
                <Route path="recipientRequestHistory" element={<RecipientRequestHistory />} />
                <Route path="settings" element={<Settings />} />
                <Route path="RecipientAccounts" element={<RecipientAccounts />} />
                <Route path="notifications" element={
                  <div className="mb-3">
                    <h5 className="text-center">Notifications</h5>
                    <Row>
                      {notifications.map((notification, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                          <Card className="mb-3 p-3 border" style={{ backgroundColor: '#444', color: '#fff', marginTop: '20px' }}>
                            <Card.Body>
                              <Card.Text>{notification}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                } />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        &copy; 2024 Food Share Network. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AdminDash;
