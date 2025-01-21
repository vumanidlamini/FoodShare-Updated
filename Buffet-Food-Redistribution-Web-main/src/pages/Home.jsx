// // Home.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ImageGallery } from '../components/ImageGallery';
// import { ContactInfo } from '../components/ContactInfo';
// import video from "../components/videos/f.mp4";
// import AboutImg from '../utils/img/img3.jpeg';
// import ContactImage from '../utils/img/contact-img.jpg';
// import Typewriter from 'typewriter-effect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt, faFax, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

// function Home() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here (e.g., API call or data processing)
//     console.log(`Submitted: ${firstName} ${lastName} - ${email}`);
//     // Reset form fields after submission
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//   };

//   return (
//     <div className="home-page">
//       <div className="container-fluid px-0">
//         <div className="position-relative text-center">
//           <video
//             autoPlay
//             loop
//             muted
//             className="img-fluid w-100"
//             style={{ height: 'auto', marginTop: '60px' }}
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//           <div
//             className="position-absolute top-0 start-0 w-100 h-100"
//             style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
//           ></div>
//           <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//             <h1 className="display-4 fw-bold">
//               <Typewriter
//                 options={{
//                   strings: ['WELCOME TO FOODSHARE NETWORK!'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h1>
//             <p className="lead fw-bold">
//               <Typewriter
//                 options={{
//                   strings: [
//                     'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                   ],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid my-2">
//         <header className='d-flex justify-content-center bg-dark text-light mb-3'>
//           <h1>ABOUT</h1>
//         </header>
//         <div className="row">
//           <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
//             <img src={AboutImg} className="img-fluid w-75" alt="about img" />
//           </div>
//           <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
//             <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
//             <p>
//               At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
//             </p>
//             <Link to="/about">
//               <button type="button" className="btn btn-lg btn-dark">More About Us</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <ImageGallery />

//       <div className="bg-dark text-light py-5 shadow">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
//               <ContactInfo />
//             </div>
//             <div className="col-lg-6 d-flex justify-content-center">
//               <img src={ContactImage} className="img-fluid w-75" alt="contact" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container my-5">
//         <div className="row">
//           <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
//             {/* Replace with your session content */}
//           </div>
//           <div className="container my-5">
//             <div className="row">
//               <div className="col-lg-3 ps-lg-0">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Contact Us</h2>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faPhone} className="me-2" />
//                     <a href="tel:+2713718393" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >Call us!
//                         </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" />
//                     <a
//                         href="sms:0713718393"
//                         style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                           >Send a message!
//                      </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                     <a href="https://mail.google.com/mail/?view=cm&fs=1&to=networkfoodshare@gmail.com" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >networkfoodshare@gmail.com
//                         </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faFax} className="me-2" />
//                     Fax  <a href="https://www.hellofax.com" rel="noopener noreferrer" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >(098) 765-4321
//                         </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
//                     1711 Block H, Soshanguve, Pretoria, South Africa
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-3 ps-lg-5">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Resources</h2>
//                   <Link to="/ambassadors" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Our Ambassadors
//                   </Link>
//                   <Link to="/terms of use" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Terms of Use
//                   </Link>
//                   <Link to="/privacy" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Privacy Policy
//                   </Link>
                  
//                   <Link to="/security" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Security
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-5 ps-lg-5">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Monthly Newsletter</h2>
//                   {/* Newsletter Subscription Form */}
//                   <form onSubmit={handleSubmit} className="border p-1 rounded w-100 " style={{ backgroundColor: '#D8D8D8' }}>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="firstNameInput" className="form-label fw-bold">First name</label>
//                       <input
//                         type="text"
//                         placeholder="Enter firstname"
//                         className="form-control"
//                         id="firstNameInput"
//                         value={firstName}
//                         onChange={handleFirstNameChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="lastNameInput" className="form-label fw-bold">Last name</label>
//                       <input
//                         type="text"
//                         placeholder="Enter lastname"
//                         className="form-control"
//                         id="lastNameInput"
//                         value={lastName}
//                         onChange={handleLastNameChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="emailInput" className="form-label fw-bold">Email address</label>
//                       <input
//                         type="email"
//                         placeholder="Enter email"
//                         className="form-control"
//                         id="emailInput"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn  btn-sm w-100 btn-dark">
//                       Subscribe
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


//volunteer section added

// Home.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ImageGallery } from '../components/ImageGallery';
// import { ContactInfo } from '../components/ContactInfo';
// import video from "../components/videos/f.mp4";
// import AboutImg from '../utils/img/img3.jpeg';
// import ContactImage from '../utils/img/contact-img.jpg';
// import Typewriter from 'typewriter-effect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt, faFax, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

// function Home() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here (e.g., API call or data processing)
//     console.log(`Submitted: ${firstName} ${lastName} - ${email}`);
//     // Reset form fields after submission
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//   };

//   return (
//     <div className="home-page">
//       <div className="container-fluid px-0">
//         <div className="position-relative text-center">
//           <video
//             autoPlay
//             loop
//             muted
//             className="img-fluid w-100"
//             style={{ height: 'auto', marginTop: '60px' }}
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//           <div
//             className="position-absolute top-0 start-0 w-100 h-100"
//             style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
//           ></div>
//           <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//             <h1 className="display-4 fw-bold">
//               <Typewriter
//                 options={{
//                   strings: ['WELCOME TO FOODSHARE NETWORK!'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h1>
//             <p className="lead fw-bold">
//               <Typewriter
//                 options={{
//                   strings: [
//                     'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                   ],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid my-2">
//         <header className='d-flex justify-content-center bg-dark text-light mb-3'>
//           <h1>ABOUT</h1>
//         </header>
//         <div className="row">
//           <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
//             <img src={AboutImg} className="img-fluid w-75" alt="about img" />
//           </div>
//           <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
//             <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
//             <p>
//               At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
//             </p>
//             <Link to="/about">
//               <button type="button" className="btn btn-lg btn-dark">More About Us</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <ImageGallery />

//       <div className="bg-dark text-light py-5 shadow">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
//               <ContactInfo />
//             </div>
//             <div className="col-lg-6 d-flex justify-content-center">
//               <img src={ContactImage} className="img-fluid w-75" alt="contact" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container my-5">
//         <div className="row">
//           <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
//             {/* Replace with your session content */}
//           </div>
//           <div className="container my-5">
//             <div className="row">
//               <div className="col-lg-3 ps-lg-0">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Contact Us</h2>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faPhone} className="me-2" />
//                     <a href="tel:+2713718393" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >Call us!
//                     </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" />
//                     <a
//                         href="sms:0713718393"
//                         style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                           >Send a message!
//                      </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                     <a href="https://mail.google.com/mail/?view=cm&fs=1&to=networkfoodshare@gmail.com" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >networkfoodshare@gmail.com
//                         </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faFax} className="me-2" />
//                     Fax  <a href="https://www.hellofax.com" rel="noopener noreferrer" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}
//                         >(098) 765-4321
//                         </a>
//                   </p>
//                   <p className="text-start">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
//                     1711 Block H, Soshanguve, Pretoria, South Africa
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-3 ps-lg-5">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Resources</h2>
//                   <Link to="/ambassadors" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Our Ambassadors
//                   </Link>
//                   <Link to="/terms of use" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Terms of Use
//                   </Link>
//                   <Link to="/privacy" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Privacy Policy
//                   </Link>
//                    <Link to="/security" style={{
//                           textDecoration: 'none',
//                           color: 'black',
//                           transition: 'color 0.3s',
//                           marginBottom: '12px',
//                         }}
//                         onMouseEnter={(e) => (e.target.style.color = 'blue')}
//                         onMouseLeave={(e) => (e.target.style.color = 'black')}>
//                     Security
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-5 ps-lg-5">
//                 <div className="d-flex flex-column align-items-start">
//                   <h2 className="fs-1 mb-5 text-uppercase fw-bold">Monthly Newsletter</h2>
//                   {/* Newsletter Subscription Form */}
//                   <form onSubmit={handleSubmit} className="border p-1 rounded w-100 " style={{ backgroundColor: '#D8D8D8' }}>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="firstNameInput" className="form-label fw-bold">First name</label>
//                       <input
//                         type="text"
//                         placeholder="Enter firstname"
//                         className="form-control"
//                         id="firstNameInput"
//                         value={firstName}
//                         onChange={handleFirstNameChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="lastNameInput" className="form-label fw-bold">Last name</label>
//                       <input
//                         type="text"
//                         placeholder="Enter lastname"
//                         className="form-control"
//                         id="lastNameInput"
//                         value={lastName}
//                         onChange={handleLastNameChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-1 text-center">
//                       <label htmlFor="emailInput" className="form-label fw-bold">Email address</label>
//                       <input
//                         type="email"
//                         placeholder="Enter email"
//                         className="form-control"
//                         id="emailInput"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn  btn-sm w-100 btn-dark">
//                       Subscribe
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Donation Section */}
//       <div className="container my-5 py-5 bg-light text-center rounded shadow ">
//         <h2 className="fs-1 mb-3 text-uppercase fw-bold">Ready to Make a Difference?</h2>
//         <p className="fs-3 mb-3">
//           Join our mission to feed the hungry and reduce waste!
//         </p>
//         <Link to="/donate">
//           <button type="button" className="btn btn-lg btn-dark">
//             Volunteer Now
//           </button>
//         </Link>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import video from "../components/videos/f.mp4";
import AboutImg from '../utils/img/img3.jpeg';
import ContactImage from '../utils/img/contact-img.jpg';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faFax, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., API call or data processing)
    console.log(`Submitted: ${firstName} ${lastName} - ${email}`);
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="home-page">
      <div className="container-fluid px-0">
        <div className="position-relative text-center">
          <video
            autoPlay
            loop
            muted
            className="img-fluid w-100"
            style={{ height: 'auto', marginTop: '60px' }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Dark overlay with slight opacity
          ></div>
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 className="display-4 fw-bold">
              <Typewriter
                options={{
                  strings: ['WELCOME TO FOODSHARE NETWORK!'],
                  autoStart: true,
                  loop: true,
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
                }}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid my-2">
        <header className='d-flex justify-content-center bg-dark text-light mb-3'>
          <h1>ABOUT</h1>
        </header>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={AboutImg} className="img-fluid w-75" alt="about img" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-lg btn-dark">More About Us</button>
            </Link>
          </div>
        </div>
      </div>

      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid w-75" alt="contact" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            {/* Replace with your session content */}
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-3 ps-lg-0">
                <div className="d-flex flex-column align-items-start">
                  <h2 className="fs-1 mb-5 text-uppercase fw-bold">Contact Us</h2>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <a href="tel:+2713718393" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Call us!</a>
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" />
                    <a href="sms:0713718393" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Send a message!</a>
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=networkfoodshare@gmail.com" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>networkfoodshare@gmail.com</a>
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faFax} className="me-2" />
                    Fax <a href="https://www.hellofax.com" rel="noopener noreferrer" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}> (098) 765-4321</a>
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    1711 Block H, Soshanguve, Pretoria, South Africa
                  </p>
                </div>
              </div>
              <div className="col-lg-3 ps-lg-5">
                <div className="d-flex flex-column align-items-start">
                  <h2 className="fs-1 mb-5 text-uppercase fw-bold">Resources</h2>
                  <Link to="/ambassadors" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                          marginBottom: '12px',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Our Ambassadors</Link>
                  <Link to="/terms of use" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                          marginBottom: '12px',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Terms of Use</Link>
                  <Link to="/privacy" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                          marginBottom: '12px',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Privacy Policy</Link>
                   <Link to="/security" style={{
                          textDecoration: 'none',
                          color: 'black',
                          transition: 'color 0.3s',
                          marginBottom: '12px',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'blue')}
                        onMouseLeave={(e) => (e.target.style.color = 'black')}>Security</Link>
                </div>
              </div>
              <div className="col-lg-5 ps-lg-5">
                <div className="d-flex flex-column align-items-start">
                  <h2 className="fs-1 mb-5 text-uppercase fw-bold">Monthly Newsletter</h2>
                  {/* Newsletter Subscription Form */}
                  <form onSubmit={handleSubmit} className="border p-1 rounded w-100 " style={{ backgroundColor: '#D8D8D8' }}>
                    <div className="mb-1 text-center">
                      <label htmlFor="firstNameInput" className="form-label fw-bold">First name</label>
                      <input
                        type="text"
                        placeholder="Enter firstname"
                        className="form-control"
                        id="firstNameInput"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                      />
                    </div>
                    <div className="mb-1 text-center">
                      <label htmlFor="lastNameInput" className="form-label fw-bold">Last name</label>
                      <input
                        type="text"
                        placeholder="Enter lastname"
                        className="form-control"
                        id="lastNameInput"
                        value={lastName}
                        onChange={handleLastNameChange}
                        required
                      />
                    </div>
                    <div className="mb-1 text-center">
                      <label htmlFor="emailInput" className="form-label fw-bold">Email address</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        id="emailInput"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn  btn-sm w-100 btn-dark">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Volunteers Section */}
          <div className="container-fluid my-5 py-5 bg-light text-center shadow mb-5 border rounded border-1 border-secondary">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold animate__animated animate__fadeInUp">
              Ready to Make a Difference?
            </h2>
            <p className="fs-3 mb-3 animate__animated animate__fadeIn animate__delay-1s">
              Join our mission to feed the hungry and reduce waste! Since 2010, we've distributed over 1 million meals to those in need, and we need you to help us do even more!
            </p>
            
           

            {/* Two-column layout */}
            <div className="row mb-2">
              <div className="col-md-6">
              <h4 className="fs-4 mb-3 text-muted animate__animated animate__fadeIn animate__delay-2s">
              Why Volunteer with Us?
            </h4>
                <ul className="list-unstyled">
                  <li>Flexible hours that fit your schedule</li>
                  <li>Gain valuable experience and community service hours</li>
                  <li>Make lasting connections and be part of a supportive community</li>
                </ul>
              </div>
              
              <div className="col-md-6">
                <h4 className="fs-4 mb-3 text-muted animate__animated animate__fadeIn animate__delay-2s">
                  How You Can Help:
                </h4>
                <ul className="list-unstyled">
                  <li>Collecting and sorting food donations</li>
                  <li>Helping distribute meals to those in need</li>
                  <li>Assisting with fundraising events and outreach activities</li>
                </ul>
              </div>
            </div>

            <p className="fs-5 mb-3 animate__animated animate__fadeIn animate__delay-3s">
              "Volunteering here has been an eye-opening experience! I’ve learned so much, and knowing my efforts help feed families in need keeps me coming back." – Sarah, Volunteer
            </p>

            <Link to="/volunteer">
              <button type="button" className="btn btn-lg btn-dark animate__animated animate__pulse animate__infinite animate__delay-2s">
                Register To Volunteer Now
              </button>
            </Link>
          </div>
          <br />
          <br />
          <br />
  </div>


  );
}

export default Home;

