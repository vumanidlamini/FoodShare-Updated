
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import video from "../components/videos/f.mp4"; // Adjust the path as necessary
import RecipientTermsModal from './RecipientTermsModal';

const countryPhonePatterns = {
  '+27': /^[0-9]{9}$/, // South Africa (10 digits)
  '+1': /^[0-9]{10}$/, // United States (10 digits)
  '+44': /^[0-9]{10}$/, // United Kingdom (10 digits)
  '+91': /^[0-9]{10}$/, // India (10 digits)
  '+30': /^[0-9]{10}$/, // Greece (10 digits)
  '+34': /^[0-9]{9}$/, // Spain (9 digits)
  '+36': /^[0-9]{9}$/, // Hungary (9 digits)
  '+39': /^[0-9]{10}$/, // Italy (10 digits)
  '+40': /^[0-9]{10}$/, // Romania (10 digits)
  '+41': /^[0-9]{10}$/, // Switzerland (10 digits)
  '+43': /^[0-9]{10}$/, // Austria (10 digits)
  '+46': /^[0-9]{10}$/, // Sweden (10 digits)
  '+47': /^[0-9]{8}$/, // Norway (8 digits)
  '+48': /^[0-9]{9}$/, // Poland (9 digits)
  '+52': /^[0-9]{10}$/, // Mexico (10 digits)
  '+53': /^[0-9]{8}$/, // Cuba (8 digits)
  '+54': /^[0-9]{10}$/, // Argentina (10 digits)
  '+55': /^[0-9]{11}$/, // Brazil (11 digits)
  '+56': /^[0-9]{9}$/, // Chile (9 digits)
  '+57': /^[0-9]{10}$/, // Colombia (10 digits)
  '+58': /^[0-9]{10}$/, // Venezuela (10 digits)
  '+60': /^[0-9]{10}$/, // Malaysia (10 digits)
  '+62': /^[0-9]{10}$/, // Indonesia (10 digits)
  '+63': /^[0-9]{10}$/, // Philippines (10 digits)
  '+64': /^[0-9]{9}$/, // New Zealand (9 digits)
  '+65': /^[0-9]{8}$/, // Singapore (8 digits)
  '+66': /^[0-9]{9}$/, // Thailand (9 digits)
  '+81': /^[0-9]{10}$/, // Japan (10 digits)
  '+82': /^[0-9]{10}$/, // South Korea (10 digits)
  '+84': /^[0-9]{10}$/, // Vietnam (10 digits)
  '+91': /^[0-9]{10}$/, // India (10 digits)
  '+92': /^[0-9]{10}$/, // Pakistan (10 digits)
  '+93': /^[0-9]{9}$/, // Afghanistan (9 digits)
  '+94': /^[0-9]{9}$/, // Sri Lanka (9 digits)
  '+95': /^[0-9]{9}$/, // Myanmar (9 digits)
  '+98': /^[0-9]{10}$/, // Iran (10 digits)
  '+212': /^[0-9]{9}$/, // Morocco (9 digits)
  '+213': /^[0-9]{9}$/, // Algeria (9 digits)
  '+216': /^[0-9]{8}$/, // Tunisia (8 digits)
  '+218': /^[0-9]{8}$/, // Libya (8 digits)
  '+220': /^[0-9]{8}$/, // Gambia (8 digits)
  '+221': /^[0-9]{8}$/, // Senegal (8 digits)
  '+222': /^[0-9]{8}$/, // Mauritania (8 digits)
  '+223': /^[0-9]{8}$/, // Mali (8 digits)
  '+224': /^[0-9]{9}$/, // Guinea (9 digits)
  '+225': /^[0-9]{9}$/, // Ivory Coast (9 digits)
  '+226': /^[0-9]{8}$/, // Burkina Faso (8 digits)
  '+227': /^[0-9]{8}$/, // Niger (8 digits)
  '+228': /^[0-9]{8}$/, // Togo (8 digits)
  '+229': /^[0-9]{8}$/, // Benin (8 digits)
  '+230': /^[0-9]{8}$/, // Mauritius (8 digits)
  '+231': /^[0-9]{8}$/, // Liberia (8 digits)
  '+232': /^[0-9]{8}$/, // Sierra Leone (8 digits)
  '+233': /^[0-9]{9}$/, // Ghana (9 digits)
  '+234': /^[0-9]{10}$/, // Nigeria (10 digits)
  '+235': /^[0-9]{8}$/, // Chad (8 digits)
  '+236': /^[0-9]{8}$/, // Central African Republic (8 digits)
  '+237': /^[0-9]{9}$/, // Cameroon (9 digits)
  '+7': /^[0-9]{10}$/, // Russia (10 digits)
};

const RecipientSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+27'); // Default to South Africa
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!agreeToTerms) {
      toast.error('You must agree to the terms and conditions to sign up');
      return;
    }

    // Validate telephone number
    const phoneRegex = countryPhonePatterns[countryCode];

    // Check if the telephone number contains only digits
    const isDigitsOnly = /^[0-9]+$/.test(telephoneNumber);
    if (!isDigitsOnly) {
      toast.error('Telephone number can only contain digits');
      return;
    }

    // Check if the telephone number matches the pattern for the selected country code
    if (!phoneRegex.test(telephoneNumber)) {
      toast.error(`Telephone number is invalid for the selected country code: ${countryCode}`);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5282/api/Recipient/register', {
        RecipientName: name,
        RecipientEmail: email,
        RecipientPhoneNum: `${countryCode}${telephoneNumber}`, // Combine country code and phone number
        RecipientAddress: address,
        password,
      });

      console.log('Sign up successful:', response.data);

      if (response.data.flag) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/Login');
        }, 5000);
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error('Sign up failed:', error.response);
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
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          zIndex: -1,
        }}
      />

      <div
        className="signup-container"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <form
          style={{
            width: '450px',
            margin: 'auto',
            background: 'rgba(169, 169, 169, 0.8)', // Transparent grey background
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '40px 55px 45px 55px',
            borderRadius: '15px',
            transition: 'all .3s',
          }}
          onSubmit={handleSignUp}
        >
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>SIGN UP</h3>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Organisation Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Organization Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
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
                <option value="+30">🇬🇷 +30 (Greece)</option>
                <option value="+34">🇪🇸 +34 (Spain)</option>
                <option value="+36">🇭🇺 +36 (Hungary)</option>
                <option value="+39">🇮🇹 +39 (Italy)</option>
                <option value="+40">🇷🇴 +40 (Romania)</option>
                <option value="+41">🇨🇭 +41 (Switzerland)</option>
                <option value="+43">🇦🇹 +43 (Austria)</option>
                <option value="+46">🇸🇪 +46 (Sweden)</option>
                <option value="+47">🇳🇴 +47 (Norway)</option>
                <option value="+48">🇵🇱 +48 (Poland)</option>
                <option value="+52">🇲🇽 +52 (Mexico)</option>
                <option value="+53">🇨🇺 +53 (Cuba)</option>
                <option value="+54">🇦🇷 +54 (Argentina)</option>
                <option value="+55">🇧🇷 +55 (Brazil)</option>
                <option value="+56">🇨🇱 +56 (Chile)</option>
                <option value="+57">🇨🇴 +57 (Colombia)</option>
                <option value="+58">🇻🇪 +58 (Venezuela)</option>
                <option value="+60">🇲🇾 +60 (Malaysia)</option>
                <option value="+62">🇮🇩 +62 (Indonesia)</option>
                <option value="+63">🇵🇭 +63 (Philippines)</option>
                <option value="+64">🇳🇿 +64 (New Zealand)</option>
                <option value="+65">🇸🇬 +65 (Singapore)</option>
                <option value="+66">🇹🇭 +66 (Thailand)</option>
                <option value="+81">🇯🇵 +81 (Japan)</option>
                <option value="+82">🇰🇷 +82 (South Korea)</option>
                <option value="+84">🇻🇳 +84 (Vietnam)</option>
                <option value="+91">🇮🇳 +91 (India)</option>
                <option value="+92">🇵🇰 +92 (Pakistan)</option>
                <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                <option value="+95">🇲🇲 +95 (Myanmar)</option>
                <option value="+98">🇮🇷 +98 (Iran)</option>
                <option value="+212">🇲🇦 +212 (Morocco)</option>
                <option value="+213">🇩🇿 +213 (Algeria)</option>
                <option value="+216">🇹🇳 +216 (Tunisia)</option>
                <option value="+218">🇱🇾 +218 (Libya)</option>
                <option value="+220">🇬🇲 +220 (Gambia)</option>
                <option value="+221">🇲🇱 +221 (Senegal)</option>
                <option value="+222">🇲🇳 +222 (Mauritania)</option>
                <option value="+223">🇲🇱 +223 (Mali)</option>
                <option value="+224">🇨🇲 +224 (Guinea)</option>
                <option value="+225">🇨🇮 +225 (Ivory Coast)</option>
                <option value="+226">🇧🇫 +226 (Burkina Faso)</option>
                <option value="+227">🇳🇪 +227 (Niger)</option>
                <option value="+228">🇹🇬 +228 (Togo)</option>
                <option value="+229">🇲🇱 +229 (Benin)</option>
                <option value="+230">🇲🇺 +230 (Mauritius)</option>
                <option value="+231">🇱🇸 +231 (Liberia)</option>
                <option value="+232">🇸🇱 +232 (Sierra Leone)</option>
                <option value="+233">🇬🇭 +233 (Ghana)</option>
                <option value="+234">🇳🇬 +234 (Nigeria)</option>
                <option value="+235">🇹🇩 +235 (Chad)</option>
                <option value="+236">🇨🇫 +236 (Central African Republic)</option>
                <option value="+237">🇨🇲 +237 (Cameroon)</option>
                <option value="+7">🇷🇺 +7 (Russia)</option>
              </select>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Telephone Number"
                value={telephoneNumber}
                onChange={(e) => setTelephoneNumber(e.target.value.replace(/^0/, ''))}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label style={{ fontWeight: 'bold' }}>Business Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label style={{ fontWeight: 'bold' }}>Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-3 position-relative">
            <label style={{ fontWeight: 'bold' }}>Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <span style={{ marginLeft: '5px' }}>
              I agree to the{' '}
              <button type="button" onClick={() => setShowTermsModal(true)} style={{ border: 'none', color: '#007bff', background: 'transparent' }}>
                terms and conditions
              </button>
            </span>
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Sign Up
          </button>

          {/* Terms Modal */}
          <RecipientTermsModal
            show={showTermsModal}
            onHide={() => setShowTermsModal(false)}
          />

          <div className="mt-3 text-center">
            <p>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipientSignUp;

