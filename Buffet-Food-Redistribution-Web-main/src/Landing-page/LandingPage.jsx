
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { FaTachometerAlt } from 'react-icons/fa';
// import { BiDonateHeart } from 'react-icons/bi';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt, faCheck, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import Typewriter from 'typewriter-effect';
// import DonorDashboard from './DonorDashboard';
// import FoodForm from './FoodForm';
// import History from './Historys';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
// import AcceptedFoodPage from '../pages/AcceptedFoodPage';
// import DonorProfile from './DonorProfile';
// import UpdatePassword from '../update-password/UpdatePassword';

// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const [activePage, setActivePage] = useState('home');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   const renderContent = () => {
//     switch (activePage) {
//       case 'dashboard':
//         return <DonorDashboard donor={{ /* pass the donor data here */ }} />;
//       case 'DonorProfile':
//         return <DonorProfile />;
//       case 'donate':
//         return <FoodForm />;
//       case 'record':
//         return <History />;
//       case 'contact':
//         return <Contact />;
//       case 'password':
//         return <UpdatePassword />;
//       case 'accepted food':
//         return <AcceptedFoodPage />;
//       default:
//         return (
//           <>
//             <div className="text-center position-relative mt-2">
//               <div className="position-relative">
//                 <video autoPlay loop muted className="img-fluid mt-0">
//                   <source src={video} type="video/mp4" />
//                 </video>
//                 <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
//                 <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//                   <h1 className="display-4 fw-bold">
//                     <Typewriter
//                       options={{
//                         strings: ['WELCOME TO FOODSHARE NETWORK!'],
//                         autoStart: true,
//                         loop: true,
//                         delay: 100,
//                         pauseFor: 2000,
//                       }}
//                     />
//                   </h1>
//                   <p className="lead fw-bold">
//                     <Typewriter
//                       options={{
//                         strings: [
//                           'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                         ],
//                         autoStart: true,
//                         loop: true,
//                         delay: 80,
//                         pauseFor: 2000,
//                       }}
//                     />
//                   </p>
//                 </div>
//               </div>
//               <div className="header-overlay"></div>
//             </div>
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       <nav>
//         <br />
//         <section id="video-section" className="header-banner mb-1 mt-5">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-2 p-0">
//                 <div className="bg-light text-light vh-100 d-flex flex-column align-items-center pt-3 sticky-top">
//                   <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
//                   <br />
//                   <button
//                     onClick={() => setActivePage('dashboard')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FaTachometerAlt size={20} className="me-2" />
//                     <span className="fw-bold">Dashboard</span>
//                   </button>
//                   <br />
//                   <button
//                     onClick={() => setActivePage('DonorProfile')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
//                     <span className="fw-bold">Profile</span>
//                   </button>
//                   <br />
//                   <button
//                     onClick={() => setActivePage('donate')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <BiDonateHeart size={20} className="me-2" />
//                     <span className="fw-bold">Donate</span>
//                   </button>
//                   <br />
//                   <button
//                     onClick={() => setActivePage('record')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
//                     <span className="fw-bold">Record</span>
//                   </button>
//                   <br />
//                   <button
//                     onClick={() => setActivePage('password')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faUnlock} size="lg" className="me-2" />
//                     <span className="fw-bold">Update Password</span>
//                   </button>
//                   <br />
//                   <button
//                     onClick={() => setActivePage('accepted food')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faCheck} size="lg" className="me-2" />
//                     <span className="fw-bold">Accepted Item</span>
//                   </button>
//                   <br />
//                   {/* Uncomment if logout button is needed */}
//                   {/* <button
//                     onClick={handleLogout}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
//                     <span className="fw-bold">Logout</span>
//                   </button> */}
//                 </div>
//               </div>
//               <div className="col-md-10">
//                 <section id="features" className="section mt-5 mb-5">
//                   {renderContent()}
//                 </section>
//               </div>
//             </div>
//           </div>
//         </section>
//       </nav>
//     </>
//   );
// };

// export default LandingPage;

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { FaTachometerAlt } from 'react-icons/fa';
// import { BiDonateHeart } from 'react-icons/bi';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faCheck, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import Typewriter from 'typewriter-effect';
// import DonorDashboard from './DonorDashboard';
// import FoodForm from './FoodForm';
// import History from './Historys';
// import Contact from '../pages/Contact';
// import AcceptedFoodPage from '../pages/AcceptedFoodPage';
// import DonorProfile from './DonorProfile';
// import UpdatePassword from '../update-password/UpdatePassword';

// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const [activePage, setActivePage] = useState('home');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   const renderContent = () => {
//     switch (activePage) {
//       case 'dashboard':
//         return <DonorDashboard donor={{ /* pass the donor data here */ }} />;
//       case 'DonorProfile':
//         return <DonorProfile />;
//       case 'donate':
//         return <FoodForm />;
//       case 'record':
//         return <History />;
//       case 'contact':
//         return <Contact />;
//       case 'password':
//         return <UpdatePassword />;
//       case 'accepted food':
//         return <AcceptedFoodPage />;
//       default:
//         return (
//           <>
//             <div className="text-center position-relative mt-2">
//               <div className="position-relative">
//                 <video autoPlay loop muted className="img-fluid mt-0">
//                   <source src={video} type="video/mp4" />
//                 </video>
//                 <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
//                 <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//                   <h1 className="display-4 fw-bold">
//                     <Typewriter
//                       options={{
//                         strings: ['WELCOME TO FOODSHARE NETWORK!'],
//                         autoStart: true,
//                         loop: true,
//                         delay: 100,
//                         pauseFor: 2000,
//                       }}
//                     />
//                   </h1>
//                   <p className="lead fw-bold">
//                     <Typewriter
//                       options={{
//                         strings: [
//                           'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                         ],
//                         autoStart: true,
//                         loop: true,
//                         delay: 80,
//                         pauseFor: 2000,
//                       }}
//                     />
//                   </p>
//                 </div>
//               </div>
//               <div className="header-overlay"></div>
//             </div>
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       <nav>
//         <br />
//         <section id="video-section" className="header-banner mb-1 mt-5">
//           <div className="container-fluid">
//             <div className="row">
//               {/* Sidebar */}
//               <div className="col-md-2 p-0 position-fixed vh-100 bg-light text-light d-flex flex-column align-items-center pt-3">
//                 <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
//                 <button
//                   onClick={() => setActivePage('dashboard')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <FaTachometerAlt size={20} className="me-2" />
//                   <span className="fw-bold">Dashboard</span>
//                 </button>
//                 <br />
//                 <button
//                   onClick={() => setActivePage('DonorProfile')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
//                   <span className="fw-bold">Profile</span>
//                 </button>
//                 <br />
//                 <button
//                   onClick={() => setActivePage('donate')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <BiDonateHeart size={20} className="me-2" />
//                   <span className="fw-bold">Donate</span>
//                 </button>
//                 <br />
//                 <button
//                   onClick={() => setActivePage('record')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
//                   <span className="fw-bold">Record</span>
//                 </button>
//                 <br />
//                 <button
//                   onClick={() => setActivePage('password')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <FontAwesomeIcon icon={faUnlock} size="lg" className="me-2" />
//                   <span className="fw-bold">Update Password</span>
//                 </button>
//                 <br/>
//                 <button
//                   onClick={() => setActivePage('accepted food')}
//                   className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                 >
//                   <FontAwesomeIcon icon={faCheck} size="lg" className="me-2" />
//                   <span className="fw-bold">Accepted Item</span>
//                 </button>
//               </div>
             
//               {/* Main Content */}
//               <div className="col-md-10 ms-md-auto mt-5">
//                 <section id="features" className="section mt-5 mb-5">
//                   {renderContent()}
//                 </section>
//               </div>
//             </div>
//           </div>
//         </section>
//       </nav>
//     </>
//   );
// };

// export default LandingPage;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../components/videos/f.mp4';
import logo from '../components/FoodShareNetwork.jpeg';
import { FaTachometerAlt } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheck, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';
import Typewriter from 'typewriter-effect';
import DonorDashboard from './DonorDashboard';
import FoodForm from './FoodForm';
import History from './Historys';
import Contact from '../pages/Contact';
import AcceptedFoodPage from '../pages/AcceptedFoodPage';
import DonorProfile from './DonorProfile';
import UpdatePassword from '../update-password/UpdatePassword';

const LandingPage = () => {
  const { setUser } = useContext(UserContext);
  const [activePage, setActivePage] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DonorDashboard donor={{ /* pass the donor data here */ }} />;
      case 'DonorProfile':
        return <DonorProfile />;
      case 'donate':
        return <FoodForm />;
      case 'record':
        return <History />;
      case 'contact':
        return <Contact />;
      case 'password':
        return <UpdatePassword />;
      case 'accepted food':
        return <AcceptedFoodPage />;
      default:
        return (
          <>
            <div className="text-center position-relative mt-0">
              <div className="position-relative">
                <video autoPlay loop muted className="img-fluid w-100 vh-100 object-cover">
                  <source src={video} type="video/mp4" />
                </video>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                  <h1 className="display-4 fw-bold">
                    <Typewriter
                      options={{
                        strings: ['WELCOME TO FOODSHARE NETWORK!'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        pauseFor: 2000,
                      }}
                    />
                  </h1>
                  <p className="lead fw-bold">
                    <Typewriter
                      options={{
                        strings: [
                          'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        pauseFor: 2000,
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <nav>
        <section id="video-section" className="header-banner mb-0 mt-0">
          <div className="container-fluid p-0">
            <div className="row p-0 m-0">
              {/* Sidebar */}
              <div className="col-md-2 p-0 position-fixed vh-100 bg-light text-light d-flex flex-column align-items-center pt-3"
                style={{ marginTop: '6rem' }}
              >
                <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
                <button
                  onClick={() => setActivePage('dashboard')}
                  className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                >
                  <FaTachometerAlt size={20} className="me-2" />
                  <span className="fw-bold">Dashboard</span>
                </button>
                <br />
                <button
                  onClick={() => setActivePage('DonorProfile')}
                  className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                >
                  <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
                  <span className="fw-bold">Profile</span>
                </button>
                <br />
                <button
                  onClick={() => setActivePage('donate')}
                  className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                >
                  <BiDonateHeart size={20} className="me-2" />
                  <span className="fw-bold">Donate</span>
                </button>
                <br />
                <button
                  onClick={() => setActivePage('record')}
                  className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                >
                  <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
                  <span className="fw-bold">Record</span>
                </button>
                <br />
                <button
                  onClick={() => setActivePage('accepted food')}
                  className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                >
                  <FontAwesomeIcon icon={faCheck} size="lg" className="me-2" />
                  <span className="fw-bold">Accepted Item</span>
                </button>
              </div>

              {/* Main Content */}
              <div className="col-md-10 ms-md-auto mt-0 p-0">
                <section id="features" className="section mt-0 mb-5">
                  {renderContent()}
                </section>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default LandingPage;


