// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// const RegistrationVerification = () => {
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const handleInputChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Here you would typically validate the registration number
//     // For demonstration purposes, we'll just check if it's not empty
//     if (registrationNumber) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <div className="p-4 border rounded" style={{ backgroundColor: '#333', color: '#fff' }}>
//             <h4 className="mb-4 text-center">Verify Your Registration Number</h4>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formRegistrationNumber">
//                 <Form.Label>Registration Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your registration number"
//                   value={registrationNumber}
//                   onChange={handleInputChange}
//                   style={{ backgroundColor: '#444', color: '#fff' }}
//                 />
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="submit"
//                 className="w-100"
//                 style={{ backgroundColor: '#555', borderColor: '#555' }}
//               >
//                 Verify
//               </Button>
//             </Form>
//             {isValid !== null && (
//               <Alert variant={isValid ? 'success' : 'danger'} className="mt-3">
//                 {isValid ? 'Registration number is valid!' : 'Please enter a valid registration number.'}
//               </Alert>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RegistrationVerification;


// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';

// const RegistrationVerification = () => {
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [isValid, setIsValid] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       // Replace with your actual API endpoint
//       const response = await axios.get('http://localhost:5282/api/Request/PendingRequests');
      
//       // Assume response.data is an array of pending requests with a registration number
//       const isRegistered = response.data.some(request => request.registrationNumber === registrationNumber);
      
//       setIsValid(isRegistered);
//     } catch (error) {
//       setIsValid(false);
//       setErrorMessage('An error occurred while verifying the registration number.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <div className="p-4 border rounded" style={{ backgroundColor: '#333', color: '#fff' }}>
//             <h4 className="mb-4 text-center">Verify Your Registration Number</h4>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formRegistrationNumber">
//                 <Form.Label>Registration Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your registration number"
//                   value={registrationNumber}
//                   onChange={handleInputChange}
//                   style={{ backgroundColor: '#444', color: '#fff' }}
//                 />
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="submit"
//                 className="w-100 mt-3"
//                 style={{ backgroundColor: '#555', borderColor: '#555' }}
//                 disabled={loading}
//               >
//                 {loading ? 'Verifying...' : 'Verify'}
//               </Button>
//             </Form>
//             {errorMessage && <Alert variant='danger' className="mt-3">{errorMessage}</Alert>}
//             {isValid !== null && !errorMessage && (
//               <Alert variant={isValid ? 'success' : 'danger'} className="mt-3">
//                 {isValid ? 'Registration number is valid!' : 'Invalid registration number. Please try again.'}
//               </Alert>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RegistrationVerification;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const OrganizationVerification = () => {
//     const [regNo, setRegNo] = useState('');
//     const [result, setResult] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate(); // Initialize the navigate function

//     const handleVerify = async () => {
//         setLoading(true);
//         setResult(''); // Clear previous results

//         try {
//             const integerRegNo = parseInt(regNo, 10);

//             if (isNaN(integerRegNo)) {
//                 throw new Error('The registration number must be a valid integer.');
//             }

//             const response = await axios.post(`http://localhost:5282/api/Verification?regNo=${integerRegNo}`, {});

//             console.log('Response status:', response.status); // Log the response status
//             console.log('Response data:', response.data); // Log the response data

//             const data = response.data;

//             if (data.flag) {
//                 setResult('Verification successful');
//                 navigate('/recepientsignup'); // Navigate to the signup page on success
//             } else {
//                 setResult('Verification failed');
//             }
//         } catch (error) {
//             console.error('Error details:', error.response || error.message); // Log detailed error
//             if (error.response) {
//                 // Detailed error from response
//                 const errorMessage = error.response.data ? error.response.data.message : error.response.statusText;
//                 setResult(`An error occurred: ${errorMessage}`);
//             } else {
//                 // General error
//                 setResult(`An error occurred: ${error.message}`);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//           <br/>
//           <br />
//             <h1>Verify Organization Registration Number</h1>
//             <input
//                 type="number"
//                 value={regNo}
//                 onChange={(e) => setRegNo(e.target.value)}
//                 placeholder="Enter registration number"
//                 min="1"
//             />
//             <button onClick={handleVerify} disabled={loading}>
//                 {loading ? 'Verifying...' : 'Verify'}
//             </button>
//             {result && <p>{result}</p>}
//         </div>
//     );
// };

// export default OrganizationVerification;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import video from "../components/videos/f.mp4";

const OrganizationVerification = () => {
    const [regNo, setRegNo] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleVerify = async () => {
        setLoading(true);
        setResult('');

        try {
            const integerRegNo = parseInt(regNo, 10);

            if (isNaN(integerRegNo)) {
                throw new Error('The registration number must be a valid integer.');
            }

            const response = await axios.post(`http://localhost:5282/api/Verification?regNo=${integerRegNo}`, {});

            console.log('Response status:', response.status);
            console.log('Response data:', response.data);

            const data = response.data;

            if (data.flag) {
                setResult('Verification successful');
                navigate('/recepientsignup');
            } else {
                setResult('Verification failed');
            }
        } catch (error) {
            console.error('Error details:', error.response || error.message);
            if (error.response) {
                const errorMessage = error.response.data ? error.response.data.message : error.response.statusText;
                setResult(`An error occurred: ${errorMessage}`);
            } else {
                setResult(`An error occurred: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100"style={{ background: 'rgba(169, 169, 169, 0.5)', display: 'flex'}} >
          
          <video
        autoPlay
        loop
        muted
        className="img-fluid w-100"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
        zIndex: -1,
      }} />


            <div className="col-md-6 col-lg-4">
                <h1 className="text-center mb-4">Verify Organization Registration Number</h1>
                <div className="mb-3">
                    <input
                        type="number"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        placeholder="Enter registration number"
                        min="1"
                        className="form-control"
                    />
                </div>
                <button
                    onClick={handleVerify}
                    disabled={loading}
                    className="btn btn-secondary w-100"
                >
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
                {result && (
                    <div className={`mt-3 alert ${result.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrganizationVerification;
