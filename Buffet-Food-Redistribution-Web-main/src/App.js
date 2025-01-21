

// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import RecepientSignUp from './pages/RecepientSignUp';
// import LandingPage from './Landing-page/LandingPage';
// import FoodListing from './pages/FoodListing';
// import RecipientLandingPage from './Landing-page/RecipientLandingPage';
// import UserProfile from './Dashboard/UserProfile';
// import AdminDash from './AdminDashboard/AdminDash';
// import ForgotPassword from './pages/ForgotPassword';
// import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
// import CustomForm from './Landing-page/CustomForm';
// import Reviewfeedback from './Dashboard/Reviewfeedback';
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfileApp from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute';
// import GeolocationComponent from './Landing-page/GeolocationComponent';
// import Geoloation from './Landing-page/Geoloation';
// import { getDistance } from 'geolib';

// export const UserContext = createContext(null);

// const donorLocation = {
//   latitude: -25.7479,
//   longitude: 28.2293
// };

// const recipientLocation = {
//     latitude: -25.7479,
//     longitude: 28.2293
// };

// function App() {
//   const recipientData = {
//     name: 'John Doe',
//     profilePicture: 'https://via.placeholder.com/150',
//     email: 'john.doe@example.com',
//     phone: '+1234567890',
//     address: '1234 Elm Street, Springfield, IL',
//     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna velit.'
//   };

//   const [user, setUser] = useState(null); // State to hold user information
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [donorLocation, setDonorLocation] = useState(null);
//   const [donorDistance, setDonorDistance] = useState(null);
//   const [donorTravelTime, setDonorTravelTime] = useState(null);
//   const [requestAccepted, setRequestAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleRequestDecision = (accepted, location, distance, travelTime) => {
//     if (accepted) {
//       setDonorLocation(location);
//       setDonorDistance(distance);
//       setDonorTravelTime(travelTime);
//       setRequestAccepted(true);
//     } else {
//       setRequestAccepted(false);
//     }
//   };

//   const loggedInButton = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);
//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };

//   const [foodItems, setFoodItems] = useState([]);
//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto justify-content-end w-100 fw-normal'>
//               {!user && (
//                 <>
//                   <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
//                   <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
//                   <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
//                 </>
//               )}
//               {user ? loggedInButton : null}
//               {!user ? (
//                 <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
//                   <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/recepientsignup">As Recipient</Dropdown.Item>
//                 </DropdownButton>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
//                     {user.prefixUsername}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
//                     Logout
//                   </Nav.Link>
//                 </>
//               )}
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/security" element={<SecurityPolicy />} />
//         <Route path="/terms of use" element={<TermsOfUse />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         <Route path="/request/:id" element={<RequestPage />} />
//         {/* <Route path="/geolocationCopm/:id" element={<GeolocationComponent />} />
//         <Route path="/geolocation/:id" element={<Geoloation />} /> */}


//         <Route element={<PrivateRoute />}>
//           <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//           <Route path='/profile-settings' element={<ProfileSettings />} />
//           <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//           <Route path='/profileapp' element={<ProfileApp />} />
//           <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//           <Route path='/donordashboard' element={<Donordashboard />} />
//           <Route path='/foodlisting' element={<FoodListing />} />
//           <Route path='/adminDash/*' element={<AdminDash />} />
//           <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//           <Route path='Dashboard/profileApp' element={<UserProfile />} />
//           <Route path="/accepted food" element={<AcceptedFoodPage />} />
//           <Route path="/recipientProfile" element={<RecipientProfileApp recipient={recipientData} />} />
//           <Route path='/home' element={<LandingPage />} />
//           <Route path='/record' element={<Historys />} />
//           {/* <Route path="/geolocationCopm/:id" element={<GeolocationComponent />} /> */}
//         {/* <Route path="/geolocation/:id" element={<Geoloation />} /> */}
//           <Route path='/geolocation' element={
//             !requestAccepted ? (
//               <GeolocationComponent 
//                 recipientLocation={recipientLocation} 
//                 onRequestDecision={handleRequestDecision}
//               />
//             ) : (
//               <div className="mt-3">
//                 <h5>Donor has accepted your request!</h5>
//                 <p>Distance: {donorDistance.toFixed(2)} kilometers away from you.</p>
//                 <p>Estimated Travel Time: {donorTravelTime.hours} hours and {donorTravelTime.minutes} minutes.</p>
//               </div>
//             )
//           } />
//         </Route>
//       </Routes>

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;



// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import RecepientSignUp from './pages/RecepientSignUp';
// import LandingPage from './Landing-page/LandingPage';
// import FoodListing from './pages/FoodListing';
// import RecipientLandingPage from './Landing-page/RecipientLandingPage';
// import AdminDash from './AdminDashboard/AdminDash';
// import ForgotPassword from './pages/ForgotPassword';
// import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
// import CustomForm from './Landing-page/CustomForm';
// import Reviewfeedback from './Dashboard/Reviewfeedback';
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfile from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute';
// import AcceptedFoodRoute from  './PrivateRoutes/PrivateRoute';
// import GeolocationComponent from './Landing-page/GeolocationComponent';
// import OrganizationVerification from './pages/Verification';
// import GeocodingComponent from './Landing-page/GeocodingComponent';
// import DonorProfile from './Landing-page/DonorProfile';
// import UpdatePassword from './update-password/UpdatePassword'


// import ContactForm from './testing-form/ContactForm';


// export const UserContext = createContext(null);

// const recipientLocation = {
//   latitude: -25.7479,
//   longitude: 28.2293
// };

// function App() {
//   const recipientData = {
//     name: 'John Doe',
//     profilePicture: 'https://via.placeholder.com/150',
//     email: 'john.doe@example.com',
//     phone: '+1234567890',
//     address: '1234 Elm Street, Springfield, IL',
//     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna velit.'
//   };

//   const [user, setUser] = useState(null); // State to hold user information
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [donorLocation, setDonorLocation] = useState(null);
//   const [donorDistance, setDonorDistance] = useState(null);
//   const [donorTravelTime, setDonorTravelTime] = useState(null);
//   const [requestAccepted, setRequestAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     sessionStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleRequestDecision = (accepted, location, distance, travelTime) => {
//     if (accepted) {
//       setDonorLocation(location);
//       setDonorDistance(distance);
//       setDonorTravelTime(travelTime);
//       setRequestAccepted(true);
//     } else {
//       setRequestAccepted(false);
//     }
//   };

//   const loggedInButton = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
//           {/* Home */}
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//           {/* Home */}
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);

//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };

//   const [foodItems, setFoodItems] = useState([]);

//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto justify-content-end w-100 fw-normal'>
//               {!user && (
//                 <>
//                   <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
//                   <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
//                   <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
//                 </>
//               )}
//               {user ? loggedInButton : null}
//               {!user ? (
//                 <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
//                   <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/verification">As Recipient</Dropdown.Item>
//                 </DropdownButton>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
//                     {user.prefixUsername}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
//                     Logout
//                   </Nav.Link>
//                 </>
//               )}
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='update-password' element={<UpdatePassword />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/registration' element={<RecepientSignUp />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/security" element={<SecurityPolicy />} />
//         <Route path="/terms of use" element={<TermsOfUse />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         <Route path="/request/:id" element={<RequestPage />} />
//         <Route path="/verification" element={<OrganizationVerification />} />
//         <Route path="/Geocoding" element={<GeocodingComponent />} />
//         <Route path='/home' element={<LandingPage />} />
//         <Route path="/RecipientProfile" element={<RecipientProfile  />} />
//         <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//         <Route path='/DonorProfile' element={<DonorProfile />} />
//         <Route path="/accepted-food/:id" element={<AcceptedFoodPage />} />
//         <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />

//         <Route path='/ContactForm' element={<ContactForm />} />
      
//         <Route element={<PrivateRoute />}>
//           <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//           <Route path='/profile-settings' element={<ProfileSettings />} />
//           <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//           <Route path='/profileapp' element={<ProfileApp />} />
//           <Route path='/donordashboard' element={<Donordashboard />} />
//           <Route path='/foodlisting' element={<FoodListing />} />
//           <Route path='/adminDash/*' element={<AdminDash />} />
//           {/* <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} /> */}
          
//           <Route path='/landing-page' element={<LandingPage />} />
//           <Route path='/record' element={<Historys />} />
         
//           {/* Adding the route for handling geolocation and donor request */}
//           <Route path='/donorRequest' element={
//             !requestAccepted ? (
//               <GeolocationComponent 
//                 recipientLocation={recipientLocation} 
//                 onRequestDecision={handleRequestDecision}
//               />
//             ) : (
//               <div className="mt-3">
//                 <h5>Donor has accepted your request!</h5>
//                 <p>Distance: {donorDistance ? donorDistance.toFixed(2) : 'Calculating...'} kilometers away from you.</p>
//                 <p>Estimated Travel Time: {donorTravelTime ? `${donorTravelTime.hours} hours and ${donorTravelTime.minutes} minutes` : 'Calculating...'}</p>
//               </div>
//             )
//           } />
//         </Route>
//       </Routes>

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;


//updates 04/11/2024

// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import NavBar from './components/NavBar'; // Import NavBar
// import ChatBox from './components/ChatBox'; // Import ChatBox
// import Welcome from './components/Welcome';
// import RecepientSignUp from './pages/RecepientSignUp';
// import LandingPage from './Landing-page/LandingPage';
// import FoodListing from './pages/FoodListing';
// import RecipientLandingPage from './Landing-page/RecipientLandingPage';
// import AdminDash from './AdminDashboard/AdminDash';
// import ForgotPassword from './pages/ForgotPassword';
// import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
// import CustomForm from './Landing-page/CustomForm';
// import Reviewfeedback from './Dashboard/Reviewfeedback';
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfile from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute';
// // import PrivateRoute from './PrivateRoutes/PrivateRoute';
// import GeolocationComponent from './Landing-page/GeolocationComponent';
// import OrganizationVerification from './pages/Verification';
// import GeocodingComponent from './Landing-page/GeocodingComponent';
// import DonorProfile from './Landing-page/DonorProfile';
// import UpdatePassword from './update-password/UpdatePassword';
// // import ContactForm from './testing-form/ContactForm';
// import SessionManager from './Session/SessionManager'; // Import SessionManager
// import Leaderboard from './Leader-Board/Leaderboard'
// import ResetPassword from './update-password/ResetPassword';


 

// export const UserContext = createContext(null);

// function App() {
//   const recipientLocation = {
//     latitude: -25.7479,
//     longitude: 28.2293
//   };

//   const [user, setUser] = useState(null); // State to hold user information
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [donorLocation, setDonorLocation] = useState(null);
//   const [donorDistance, setDonorDistance] = useState(null);
//   const [donorTravelTime, setDonorTravelTime] = useState(null);
//   const [requestAccepted, setRequestAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('lastLoginTime', new Date().getTime());
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('lastLoginTime');
//     sessionStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleRequestDecision = (accepted, location, distance, travelTime) => {
//     if (accepted) {
//       setDonorLocation(location);
//       setDonorDistance(distance);
//       setDonorTravelTime(travelTime);
//       setRequestAccepted(true);
//     } else {
//       setRequestAccepted(false);
//     }
//   };

//   const loggedInButton = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
//           {/* Home */}
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//           {/* Home */}
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);

//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };

//   const [foodItems, setFoodItems] = useState([]);

//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto justify-content-end w-100 fw-normal'>
//               {!user && (
//                 <>
//                   <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
//                   <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
//                   <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
//                 </>
//               )}
//               {user ? loggedInButton : null}
//               {!user ? (
//                 <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
//                   <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/verification">As Recipient</Dropdown.Item>
//                 </DropdownButton>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
//                     {user.prefixUsername}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
//                     Logout
//                   </Nav.Link>
//                 </>
//               )}
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

      
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='update-password' element={<UpdatePassword />} />
//           <Route path='/menu' element={<Menu />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/registration' element={<RecepientSignUp />} />
//           <Route path='/signup' element={<SignUp />} />
//           <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//           <Route path='/recepientsignup' element={<RecepientSignUp />} />
//           <Route path='/forgot-password' element={<ForgotPassword />} />
//           <Route path="/privacy" element={<PrivacyPolicyContent />} />
//           <Route path="/security" element={<SecurityPolicy />} />
//           <Route path="/terms of use" element={<TermsOfUse />} />
//           <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//           <Route path="/request/:id" element={<RequestPage />} />
//           <Route path="/verification" element={<OrganizationVerification />} />
//           <Route path="/Geocoding" element={<GeocodingComponent />} />
//           <Route path='/home' element={<LandingPage />} />
//           <Route path="/RecipientProfile" element={<RecipientProfile />} />
//           <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//           <Route path='/DonorProfile' element={<DonorProfile />} />
//           <Route path="/accepted-food/:id" element={<AcceptedFoodPage />} />
//           <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//           <Route path='/adminDash/*' element={<AdminDash />} />

//           {/* <Route path='/ContactForm' element={<ContactForm />} /> */}
//           <Route path='/Leaderboard' element={<Leaderboard />} />
//         {/* password */}
//           <Route path='/reset-password' element={<ResetPassword />} />
          

          
//           <Route element={<SessionManager><PrivateRoute /></SessionManager>}>
//             <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//             <Route path='/profile-settings' element={<ProfileSettings />} />
//             <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//             <Route path='/profileapp' element={<ProfileApp />} />
//             <Route path='/donordashboard' element={<Donordashboard />} />
//             <Route path='/foodlisting' element={<FoodListing />} />
            
//             <Route path='/landing-page' element={<LandingPage />} />
//             <Route path='/record' element={<Historys />} />
//             <Route path='/donorRequest' element={
//               !requestAccepted ? (
//                 <GeolocationComponent 
//                   recipientLocation={recipientLocation} 
//                   onRequestDecision={handleRequestDecision}
//                 />
//               ) : (
//                 <div className="mt-3">
//                   <h5>Donor has accepted your request!</h5>
//                   <p>Distance: {donorDistance ? donorDistance.toFixed(2) : 'Calculating...'} kilometers away from you.</p>
//                   <p>Estimated Travel Time: {donorTravelTime ? `${donorTravelTime.hours} hours and ${donorTravelTime.minutes} minutes` : 'Calculating...'}</p>
//                 </div>
//               )
//             } />
//           </Route>
//         </Routes>
    

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;

import React, { useState, createContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavBarChat from './ChatComponent/NavbarChat'; // Import NavBar
import ChatBox from './ChatComponent/chat'; // Import ChatBox
import Welcome from './ChatComponent/Welcome'; // Import Welcome
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RecepientSignUp from './pages/RecepientSignUp';
import LandingPage from './Landing-page/LandingPage';
import FoodListing from './pages/FoodListing';
import RecipientLandingPage from './Landing-page/RecipientLandingPage';
import AdminDash from './AdminDashboard/AdminDash';
import ForgotPassword from './pages/ForgotPassword';
import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
import CustomForm from './Landing-page/CustomForm';
import Reviewfeedback from './Dashboard/Reviewfeedback';
import Historys from './Landing-page/Historys';
import Donordashboard from './Dashboard/Donordashboard';
import ProfileApp from './Dashboard/profileApp';
import FoodForm from './Landing-page/FoodForm';
import ProfileSettings from './Dashboard/ProfileSettings';
import RequestPage from './pages/request';
import RecipientProfile from './Landing-page/RecipientProfile';
import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
import FoodShareLogo from './components/FoodShareNetwork.jpeg';
import SecurityPolicy from './pages/SecurityPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AcceptedFoodPage from './pages/AcceptedFoodPage';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import GeolocationComponent from './Landing-page/GeolocationComponent';
import OrganizationVerification from './pages/Verification';
import GeocodingComponent from './Landing-page/GeocodingComponent';
import DonorProfile from './Landing-page/DonorProfile';
import UpdatePassword from './update-password/UpdatePassword';
import SessionManager from './Session/SessionManager'; // Import SessionManager
import Leaderboard from './Leader-Board/Leaderboard';
import ResetPassword from './update-password/ResetPassword';
import { auth } from './Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
// import DonorTermsModal from './SignUpTermsAndConditions/DonorSignUpTerms';
import VolunteerForm from './pages/VolunteerForm';
import DonorTermsModal from './pages/DonorTermsModal';
import RecipientTermsModal from './pages/RecipientTermsModal'
import 'animate.css';


export const UserContext = createContext(null);

function App() {
  const recipientLocation = {
    latitude: -25.7479,
    longitude: 28.2293
  };

  const [chatUser] = useAuthState(auth);
  const [user, setUser] = useState(null); // State to hold user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [donorLocation, setDonorLocation] = useState(null);
  const [donorDistance, setDonorDistance] = useState(null);
  const [donorTravelTime, setDonorTravelTime] = useState(null);
  const [requestAccepted, setRequestAccepted] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('lastLoginTime', new Date().getTime());
  };

  useEffect(() => {
    if (chatUser) {
      setIsLoggedIn(true); // If the user is logged in via Firebase, set the state
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      setIsLoggedIn(false); // If no user, mark as logged out
      localStorage.setItem('isLoggedIn', 'false');
    }
  }, [chatUser]);

  
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('lastLoginTime');
    sessionStorage.removeItem('token');
    navigate('/');
  };

  const handleRequestDecision = (accepted, location, distance, travelTime) => {
    if (accepted) {
      setDonorLocation(location);
      setDonorDistance(distance);
      setDonorTravelTime(travelTime);
      setRequestAccepted(true);
    } else {
      setRequestAccepted(false);
    }
  };

  const loggedInButton = user ? (
    <>
      {user.userType === 'recipient' && (
        <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
          {/* Home */}
        </Nav.Link>
      )}
      {user.userType === 'donor' && (
        <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
          {/* Home */}
        </Nav.Link>
      )}
    </>
  ) : null;

  const [feedbackList, setFeedbackList] = useState([]);
  const updateFeedbackList = (updatedFeedback) => {
    setFeedbackList(updatedFeedback);
  };

  const [foodItems, setFoodItems] = useState([]);
  const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
    const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
    setFoodItems([...foodItems, newItem]);
    console.log("Added food item:", newItem);
  };

 

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      
      <div className="App">
        <Navbar expand="lg" className='fixed-top bg-dark shadow'>
          <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
                <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
                FoodShare Network
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto justify-content-end w-100 fw-normal'>
                {!user && (
                  <>
                    <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
                    <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
                    <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
                  </>
                )}
                {user ? loggedInButton : null}
                {!user ? (
                  <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
                    <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/verification">As Recipient</Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <>
                    <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
                      {user.prefixUsername}
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
                      Logout
                    </Nav.Link>
                  </>
                )}
                {user && loggedInButton}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='update-password' element={<UpdatePassword />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<RecepientSignUp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path='/recepientsignup' element={<RecepientSignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path="/privacy" element={<PrivacyPolicyContent />} />
          <Route path="/security" element={<SecurityPolicy />} />
          <Route path="/terms of use" element={<TermsOfUse />} />
          <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
          <Route path="/request/:id" element={<RequestPage />} />
          <Route path="/verification" element={<OrganizationVerification />} />
          <Route path="/Geocoding" element={<GeocodingComponent />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path="/RecipientProfile" element={<RecipientProfile />} />
          <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
           <Route path='/DonorProfile' element={<DonorProfile />} />
           <Route path="/accepted-food/:id" element={<AcceptedFoodPage />} />
           <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
           <Route path='/adminDash/*' element={<AdminDash />} />
          <Route path ='/DonorTermsModal' element ={< DonorTermsModal/>}/>
          <Route path ='/RecipientTermsModal' element ={< RecipientTermsModal/>}/>
        
           <Route path="/volunteer" element={<VolunteerForm />} />


           {/* <Route path='/ContactForm' element={<ContactForm />} /> */}
           <Route path='/Leaderboard' element={<Leaderboard />} />
         {/* password */}
           <Route path='/reset-password' element={<ResetPassword />} />
          

          
           <Route element={<SessionManager><PrivateRoute /></SessionManager>}>
             <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
             <Route path='/profile-settings' element={<ProfileSettings />} />
             <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
             <Route path='/profileapp' element={<ProfileApp />} />
             <Route path='/donordashboard' element={<Donordashboard />} />
             <Route path='/foodlisting' element={<FoodListing />} />
             <Route path='/landing-page' element={<LandingPage />} />
             <Route path='/record' element={<Historys />} />
             <Route path='/donorRequest' element={
               !requestAccepted ? (
                 <GeolocationComponent 
                   recipientLocation={recipientLocation} 
                   onRequestDecision={handleRequestDecision}
                 />
               ) : (
                <div className="mt-3">
                   <h5>Donor has accepted your request!</h5>
                   <p>Distance: {donorDistance ? donorDistance.toFixed(2) : 'Calculating...'} kilometers away from you.</p>
                   <p>Estimated Travel Time: {donorTravelTime ? `${donorTravelTime.hours} hours and ${donorTravelTime.minutes} minutes` : 'Calculating...'}</p>
                 </div>
               )
             } />
           </Route>
         </Routes>
    

       <footer className='bg-dark text-white fixed-bottom'>
         <div className="container py-3">
           <div className="row justify-content-center align-items-center">
             <div className="col-auto">
               <p className='m-0'>Copyright @ made by Food Share Network</p>
             </div>
             <div className="col-auto">
               <a href="https://facebook.com" className="text-white social-icon mx-2">
                 <FontAwesomeIcon icon={faFacebook} size="2x" />
               </a>
               <a href="https://twitter.com" className="text-white social-icon mx-2">
                 <FontAwesomeIcon icon={faTwitter} size="2x" />
               </a>
               <a href="https://instagram.com" className="text-white social-icon mx-2">
                 <FontAwesomeIcon icon={faInstagram} size="2x" />
               </a>
             </div>
           </div>
         </div>
       </footer>
       </div>
     </UserContext.Provider>
   );
 }

 export default App
