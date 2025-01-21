
// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import video from "../components/videos/f.mp4";

// // Define regex patterns for each country's phone number format
// const countryPhonePatterns = {
//   '+27': /^[0-9]{9}$/,  // South Africa (after +27, 9 digits)
//   '+1': /^[0-9]{10}$/,   // United States (10 digits)
//   '+44': /^[0-9]{10}$/,  // United Kingdom (10 digits)
//   '+91': /^[0-9]{10}$/,  // India (10 digits)
//   // Add more patterns as needed
// };

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [telephoneNumber, setTelephoneNumber] = useState('');
//   const [countryCode, setCountryCode] = useState('+27'); // Default to South Africa
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [agreeToTerms, setAgreeToTerms] = useState(false);

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     // Validate email
//     if (!isValidEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     // Validate password
//     if (!isValidPassword(password)) {
//       toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
//       return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     // Ensure user agrees to terms
//     if (!agreeToTerms) {
//       toast.error('You must agree to the terms and conditions to sign up');
//       return;
//     }

//     // Validate telephone number based on selected country code
//     const phoneRegex = countryPhonePatterns[countryCode];
    
//     // Remove leading 0 if present
//     let formattedPhoneNumber = telephoneNumber.replace(/^0/, '');

//     // Ensure the phone number contains only digits
//     const isDigitsOnly = /^[0-9]+$/.test(formattedPhoneNumber);
//     if (!isDigitsOnly) {
//       toast.error('Telephone number can only contain digits');
//       return;
//     }

//     // Validate the phone number against the selected country code regex
//     if (!phoneRegex.test(formattedPhoneNumber)) {
//       toast.error('Telephone number is invalid for the selected country code');
//       return;
//     }

//     try {
//       // Combine country code and phone number without leading zero
//       const completePhoneNumber = `${countryCode}${formattedPhoneNumber}`;

//       // Send the registration request
//       const response = await axios.post('http://localhost:5282/api/Donor/register', {
//         DonorName: name,
//         DonorEmail: email,
//         DonorPhoneNum: completePhoneNumber, // Combine country code and phone number
//         DonorAddress: address,
//         password,
//       });

//       console.log('Sign up successful:', response.data);
//       if (response.data.flag) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 5000);
//       } else {
//         toast.warning(response.data.message);
//       }
//     } catch (error) {
//       console.error('Sign up failed:', error.response);
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//       <ToastContainer />
//       <video
//         autoPlay
//         loop
//         muted
//         className="img-fluid w-100"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -2,
//         }}
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
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: -1,
//       }} />

//       <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
//         <form
//           style={{
//             width: '450px',
//             margin: 'auto',
//             background: 'rgba(169, 169, 169, 0.8)',
//             boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//             padding: '40px 55px 45px 55px',
//             borderRadius: '15px',
//             transition: 'all .3s',
//             position: 'relative',
//             zIndex: 1,
//           }}
//           onSubmit={handleSignUp}
//         >
//           <div className="mb-3">
//             <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>SIGN UP</h3>
//             <label style={{ fontWeight: 'bold' }}>Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Donor Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Email Address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Telephone Number</label>
//             <div className="input-group">
//               <select
//                 className="form-select me-2"
//                 value={countryCode}
//                 onChange={(e) => setCountryCode(e.target.value)}
//               >
//                 <option value="+27">🇿🇦 +27 (South Africa)</option>
//                 <option value="+30">🇬🇷 +30 (Greece)</option>
//                 <option value="+34">🇪🇸 +34 (Spain)</option>
//                 <option value="+36">🇭🇺 +36 (Hungary)</option>
//                 <option value="+39">🇮🇹 +39 (Italy)</option>
//                 <option value="+40">🇷🇴 +40 (Romania)</option>
//                 <option value="+41">🇨🇭 +41 (Switzerland)</option>
//                 <option value="+43">🇦🇹 +43 (Austria)</option>
//                 <option value="+44">🇬🇧 +44 (United Kingdom)</option>
//                 <option value="+45">🇩🇰 +45 (Denmark)</option>
//                 <option value="+46">🇸🇪 +46 (Sweden)</option>
//                 <option value="+47">🇳🇴 +47 (Norway)</option>
//                 <option value="+49">🇩🇪 +49 (Germany)</option>
//                 <option value="+51">🇵🇪 +51 (Peru)</option>
//                 <option value="+52">🇲🇽 +52 (Mexico)</option>
//                 <option value="+53">🇨🇺 +53 (Cuba)</option>
//                 <option value="+54">🇦🇷 +54 (Argentina)</option>
//                 <option value="+55">🇧🇷 +55 (Brazil)</option>
//                 <option value="+56">🇨🇱 +56 (Chile)</option>
//                 <option value="+57">🇨🇴 +57 (Colombia)</option>
//                 <option value="+58">🇻🇪 +58 (Venezuela)</option>
//                 <option value="+60">🇲🇾 +60 (Malaysia)</option>
//                 <option value="+61">🇦🇺 +61 (Australia)</option>
//                 <option value="+62">🇮🇩 +62 (Indonesia)</option>
//                 <option value="+63">🇵🇭 +63 (Philippines)</option>
//                 <option value="+64">🇳🇿 +64 (New Zealand)</option>
//                 <option value="+65">🇸🇬 +65 (Singapore)</option>
//                 <option value="+66">🇹🇭 +66 (Thailand)</option>
//                 <option value="+81">🇯🇵 +81 (Japan)</option>
//                 <option value="+82">🇰🇷 +82 (South Korea)</option>
//                 <option value="+84">🇻🇳 +84 (Vietnam)</option>
//                 <option value="+86">🇨🇳 +86 (China)</option>
//                 <option value="+91">🇮🇳 +91 (India)</option>
//                 <option value="+92">🇵🇰 +92 (Pakistan)</option>
//                 <option value="+93">🇦🇫 +93 (Afghanistan)</option>
//               </select>
//               <input
//                 type="tel"
//                 className="form-control"
//                 placeholder="Telephone"
//                 value={telephoneNumber}
//                 onChange={(e) => setTelephoneNumber(e.target.value.replace(/^0/, ''))} // Prevent user from adding leading zero
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Address</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Password</label>
//             <div className="input-group">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span
//                 className="input-group-text"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//           </div>

//           <div className="mb-3">
//             <label style={{ fontWeight: 'bold' }}>Confirm Password</label>
//             <div className="input-group">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 className="form-control"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//               <span
//                 className="input-group-text"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//           </div>

//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="agreeToTerms"
//               checked={agreeToTerms}
//               onChange={() => setAgreeToTerms(!agreeToTerms)}
//             />
//             <label className="form-check-label" htmlFor="agreeToTerms">
//               I agree to the <Link to="/terms">terms and conditions</Link>
//             </label>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// src/pages/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import video from "../components/videos/f.mp4";
import DonorTermsModal from './DonorTermsModal';  // Import the modal component

// Define regex patterns for each country's phone number format
const countryPhonePatterns = {
  '+27': /^[0-9]{9}$/,  // South Africa (after +27, 9 digits)
  '+1': /^[0-9]{10}$/,   // United States (10 digits)
  '+44': /^[0-9]{10}$/,  // United Kingdom (10 digits)
  '+91': /^[0-9]{10}$/,  // India (10 digits)
  // Add more patterns as needed
};

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+27'); // Default to South Africa
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false); // State for controlling modal visibility

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!isValidPassword(password)) {
      toast.error('Password must be between 8 to 30 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!agreeToTerms) {
      toast.error('You must agree to the terms and conditions to sign up');
      return;
    }

    // Validate telephone number based on selected country code
    const phoneRegex = countryPhonePatterns[countryCode];
    
    // Remove leading 0 if present
    let formattedPhoneNumber = telephoneNumber.replace(/^0/, '');

    const isDigitsOnly = /^[0-9]+$/.test(formattedPhoneNumber);
    if (!isDigitsOnly) {
      toast.error('Telephone number can only contain digits');
      return;
    }

    if (!phoneRegex.test(formattedPhoneNumber)) {
      toast.error('Telephone number is invalid for the selected country code');
      return;
    }

    try {
      const completePhoneNumber = `${countryCode}${formattedPhoneNumber}`;

      const response = await axios.post('http://localhost:5282/api/Donor/register', {
        DonorName: name,
        DonorEmail: email,
        DonorPhoneNum: completePhoneNumber,
        DonorAddress: address,
        password,
      });

      if (response.data.flag) {
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = '/login';
        }, 5000);
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <ToastContainer />
      <video
        autoPlay
        loop
        muted
        className="img-fluid w-100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -1,
      }} />

      <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <form
          style={{
            width: '450px',
            margin: 'auto',
            background: 'rgba(169, 169, 169, 0.8)',
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '40px 55px 45px 55px',
            borderRadius: '15px',
            position: 'relative',
            zIndex: 1,
          }}
          onSubmit={handleSignUp}
        >
          <div className="mb-3">
            <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>SIGN UP</h3>
            <label style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Donor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Telephone Number</label>
            <div className="input-group">
              <select
                className="form-select me-2"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+27">🇿🇦 +27 (South Africa)</option>
                <option value="+1">🇺🇸 +1 (United States)</option>
                <option value="+44">🇬🇧 +44 (United Kingdom)</option>
                <option value="+91">🇮🇳 +91 (India)</option>
                {/* Add other countries */}
              </select>
              <input
                type="tel"
                className="form-control"
                placeholder="Telephone"
                value={telephoneNumber}
                onChange={(e) => setTelephoneNumber(e.target.value.replace(/^0/, ''))}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="input-group-text"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="input-group-text"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <label className="form-check-label" htmlFor="agreeToTerms">
              I agree to the <button type="button" className="btn btn-link" onClick={() => setShowTermsModal(true)}>terms and conditions</button>
            </label>
          </div>

          <button type="submit" className="btn btn-secondary w-100">Sign Up</button>
        </form>

        {/* Modal for Terms and Conditions */}
        <DonorTermsModal show={showTermsModal} handleClose={() => setShowTermsModal(false)} />
      </div>
    </div>
  );
};

export default SignUp;
