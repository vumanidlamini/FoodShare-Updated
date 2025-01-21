// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import { Form, Button, InputGroup } from 'react-bootstrap';
// import Datetime from 'react-datetime';
// import 'react-datetime/css/react-datetime.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaUtensils, FaSortNumericUp, FaClipboard, FaClock, FaMapMarkerAlt, FaEnvelope  } from 'react-icons/fa';
// import axios from 'axios';
// import TermsModal from './TermsModal'; // Import the TermsModal component
// import moment from 'moment'; // Import moment for time formatting

// function FoodForm() {
//   const [itemName, setItemName] = useState('');
//   const [itemQuantity, setItemQuantity] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [timeCooked, setTimeCooked] = useState('');
//   const [address, setAddress] = useState('');
//   const [contact,setContact] = useState();
//   const [agreedToTerms, setAgreedToTerms] = useState(false); // State for terms checkbox
//   const [showTermsModal, setShowTermsModal] = useState(false); // State for showing the modal
//   const token = localStorage.getItem('token');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const donationTime = new Date(); // Capture the exact donation time
//     const cookedTime = new Date(timeCooked); // Convert timeCooked to a Date object

//     // Check if the cooked time is in the future
//     if (cookedTime > donationTime) {
//       toast.error('You cannot select a future date for time cooked.');
//       return;
//     }

//     const timeDifference = (donationTime - cookedTime) / (1000 * 60 * 60); // Difference in hours

//     // Check if the cooked time is 12 or more hours ago
//     if (timeDifference >= 12) {
//       toast.error('You cannot donate food that was cooked 12 or more hours ago.');
//       return;
//     }

//     if (
//       itemName.trim() &&
//       itemQuantity.trim() &&
//       itemQuantity >= 0 &&
//       itemDescription.trim() &&
//       (typeof timeCooked === 'string' ? timeCooked.trim() : timeCooked) &&
//       timeCooked &&
//       address.trim() &&
//       agreedToTerms // Ensure the terms are agreed to
//     ) {
//       try {
//         const apiUrl = `http://localhost:5282/api/FoodDonation/populate`;
//         const data = {
//           ItemName: itemName,
//           Quantity: itemQuantity,
//           Description: itemDescription,
//           DateCooked: timeCooked,
//           Address: address,
//           Contact:contact
//         };

//         const response = await axios.post(apiUrl, data,{
//           headers:{Authorization: `Bearer ${token}`}
//         });

//         if (response.status === 200) {
//           // Store item in local storage
//           const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
//           const newItem = {
//             name: itemName,
//             quantity: itemQuantity,
//             description: itemDescription,
//             timeCooked,
//             address,
//             addedAt: donationTime
//           };
//           const updatedFoodItems = [...storedFoodItems, newItem];
//           localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));

//           setItemName('');
//           setItemQuantity('');
//           setItemDescription('');
//           setTimeCooked('');
//           setAddress('');
//           setAgreedToTerms(false); // Reset the terms checkbox
//           setContact('');


//           const formattedTime = moment(donationTime).format('YYYY-MM-DD HH:mm:ss');
//           toast.success(`Food item added successfully at ${formattedTime}!`);
//         } else {
//           toast.error('Error adding food item. Please try again later.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         toast.error('Network error. Please check your internet connection.');
//       }
//     } else {
//       toast.error('Please fill out all fields correctly.');
//     }
//   };

//   return (
//     <div className="mt-5 d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(211,211,211,0.5)', padding: '20px' }}>
//       <div style={{ maxWidth: '600px', width: '100%' }}>
//         <div className="text-center" style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '10px' }}>
//           <h2>Donation</h2>
//           <Form onSubmit={handleSubmit} className="mt-4">
//             <Form.Group controlId="foodType" className="mb-3">
//               <Form.Label><strong>Food Type</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaUtensils /></InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter food type"
//                   value={itemName}
//                   onChange={(e) => setItemName(e.target.value)}
//                   style={{ color: 'rgba(0, 0, 0, 1.5)' }}
//                   required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="quantity" className="mb-3">
//               <Form.Label><strong>Quantity</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaSortNumericUp /></InputGroup.Text>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter quantity"
//                   value={itemQuantity}
//                   onChange={(e) => setItemQuantity(e.target.value)}
//                   min="0"
//                   style={{ color: 'rgba(0, 0, 0, 1.5)' }} required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="description" className="mb-3">
//               <Form.Label><strong>Description</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaClipboard /></InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter food description"
//                   value={itemDescription}
//                   onChange={(e) => setItemDescription(e.target.value)}
//                   style={{ color: 'rgba(0, 0, 0, 1.5)' }}
//                   required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="timeCooked" className="mb-3">
//               <Form.Label><strong>Time Cooked</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaClock /></InputGroup.Text>
//                 <Form.Control
//                   as={Datetime}
//                   value={timeCooked}
//                   onChange={(date) => setTimeCooked(date)}
//                   dateFormat="DD-MM-YYYY"
//                   timeFormat="HH:mm"
//                   inputProps={{
//                     placeholder: 'Enter time cooked',
//                     style: { color: 'rgba(0, 0, 0, 1.5)' }

//                   }}
//                   required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="address" className="mb-3">
//               <Form.Label><strong>Physical Address</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   style={{ color: 'rgba(0, 0, 0, 1.5)' }}
//                   required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="address" className="mb-3">
//               <Form.Label><strong>Email Address</strong></Form.Label>
//               <InputGroup className="border rounded">
//                 <InputGroup.Text><FaEnvelope  /></InputGroup.Text>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={contact}
//                   onChange={(e) => setContact(e.target.value)}
//                   style={{ color: 'rgba(0, 0, 0, 1.5)' }}
//                   required
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="terms" className="mb-3">
//               <Form.Check 
//                 type="checkbox" 
//                 label={<span>I agree to the <a href="#" onClick={() => setShowTermsModal(true)}>terms and conditions</a></span>} 
//                 checked={agreedToTerms}
//                 onChange={(e) => setAgreedToTerms(e.target.checked)}
//               />
//             </Form.Group>
//             <Button type="submit" variant="dark" className="mt-3 btn-block btn-lg" style={{ width: '100%' }} disabled={!agreedToTerms}>
//              Donate
//             </Button>
//           </Form>
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//       <TermsModal show={showTermsModal} handleClose={() => setShowTermsModal(false)} />
//     </div>
//   );
// }

// export default FoodForm;


import React, { useState } from 'react';
import { Link, } from 'react-router-dom'; // Import useNavigate
import { Form, Button, InputGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUtensils, FaSortNumericUp, FaClipboard, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import TermsModal from './TermsModal'; // Import the TermsModal component
import moment from 'moment'; // Import moment for time formatting

function FoodForm() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [timeCooked, setTimeCooked] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State for terms checkbox
  const [showTermsModal, setShowTermsModal] = useState(false); // State for showing the modal
  const token = sessionStorage.getItem('token');
  // const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationTime = new Date(); // Capture the exact donation time
    const cookedTime = new Date(timeCooked); // Convert timeCooked to a Date object

    // Check if the cooked time is in the future
    if (cookedTime > donationTime) {
      toast.error('You cannot select a future date for time cooked.');
      return;
    }

    const timeDifference = (donationTime - cookedTime) / (1000 * 60 * 60); // Difference in hours

    // Check if the cooked time is 12 or more hours ago
    if (timeDifference >= 12) {
      toast.error('You cannot donate food that was cooked 12 or more hours ago.');
      return;
    }

    if (
      itemName.trim() &&
      itemQuantity.trim() &&
      itemQuantity >= 0 &&
      itemDescription.trim() &&
      (typeof timeCooked === 'string' ? timeCooked.trim() : timeCooked) &&
      timeCooked &&
      address.trim() &&
      agreedToTerms // Ensure the terms are agreed to
    ) {
      try {
        const apiUrl = `http://localhost:5282/api/FoodDonation/populate`;
        const data = {
          ItemName: itemName,
          Quantity: itemQuantity,
          Description: itemDescription,
          DateCooked: timeCooked,
          Address: address,
          Contact: contact,
        };

        const response = await axios.post(apiUrl, data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          // Store item in local storage
          const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
          const newItem = {
            name: itemName,
            quantity: itemQuantity,
            description: itemDescription,
            timeCooked,
            address,
            addedAt: donationTime,
          };
          const updatedFoodItems = [...storedFoodItems, newItem];
          localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));

          setItemName('');
          setItemQuantity('');
          setItemDescription('');
          setTimeCooked('');
          setAddress('');
          setAgreedToTerms(false); // Reset the terms checkbox
          setContact('');

          const formattedTime = moment(donationTime).format('YYYY-MM-DD HH:mm:ss');
          toast.success(`Food item added successfully at ${formattedTime}!`);
          
          // navigate('/record'); // Redirect to the History page
        } else {
          toast.error('Error adding food item. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Network error. Please check your internet connection.');
      }
    } else {
      toast.error('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center vh-10" style={{ padding: '20px', marginTop: '500px'}}>
   
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <br />
        <br />
        <div className="text-center" style={{ backgroundColor: '#D0D0D0', padding: '20px', borderRadius: '10px' }}>
          <h2>Donation</h2>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="foodType" className="mb-3">
              <Form.Label><strong>Food Type</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaUtensils /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter food type"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label><strong>Quantity</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaSortNumericUp /></InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  min="0"
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }} required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label><strong>Description</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaClipboard /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter food description"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="timeCooked" className="mb-3">
              <Form.Label><strong>Time Prepared</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaClock /></InputGroup.Text>
                <Form.Control
                  as={Datetime}
                  value={timeCooked}
                  onChange={(date) => setTimeCooked(date)}
                  dateFormat="DD-MM-YYYY"
                  timeFormat="HH:mm"
                  inputProps={{
                    placeholder: 'Enter time prepared',
                    style: { color: 'rgba(0, 0, 0, 1.5)' }

                  }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label><strong>Physical Address</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="contact" className="mb-3">
              <Form.Label><strong>Email Address</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaEnvelope  /></InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="terms" className="mb-3">
              <Form.Check 
                type="checkbox" 
                label={<span>I agree to the <a href="#" onClick={() => setShowTermsModal(true)}>terms and conditions</a></span>} 
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
            </Form.Group>
            {/* <Button type="submit" variant="dark" className="mt-3 btn-block btn-lg " style={{ width: '100%' }} disabled={!agreedToTerms}>
             Donate
            </Button> */}
            <Button 
                type="submit" 
                variant="dark" 
                className="mt-3 btn-block btn-lg" 
                style={{ width: '100%', backgroundColor: 'black', borderColor: 'black' }} 
                disabled={!agreedToTerms}>
                Donate
          </Button>

          </Form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <TermsModal show={showTermsModal} handleClose={() => setShowTermsModal(false)} />
    </div>
  );
}

export default FoodForm;
