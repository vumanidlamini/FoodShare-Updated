// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { acceptRequest, declineRequest, markAsCollected } from '../Redux/actions';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useParams } from 'react-router-dom';

// const CookieCard = ({ requesterName, foodName, foodDescription, requestId }) => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const [acceptMessage, setAcceptMessage] = useState('');
//     const [declineMessage, setDeclineMessage] = useState('');
//     const [timer, setTimer] = useState(0);
//     const [showCard, setShowCard] = useState(true);
//     const [recipientInfo, setRecipientInfo] = useState(null);

//     useEffect(() => {
//         const fetchRecipientInfo = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5282/api/Email/${id}`);
//                 setRecipientInfo(response.data); // Update recipientInfo state with fetched data
//             } catch (error) {
//                 console.error('Error fetching recipient information:', error);
//                 toast.error('Error fetching recipient information.');
//             }
//         };

//         fetchRecipientInfo();
//     }, [id]);

//     const respondToRequest = async (accepted) => {
//         try {
//             const response = await axios.put(`http://localhost:5282/api/Request/updatestatus/${id}?newStatus=${accepted ? 'Accepted' : 'Declined'}`);
//             if (response.status === 200) {
//                 if (accepted) {
//                     setAcceptMessage('Your request has been accepted. Expires in 32 minutes.');
//                     setTimer(32 * 60); // 32 minutes in seconds
//                     dispatch(acceptRequest()); // Dispatch acceptRequest action
//                     toast.success('Response sent!');
                    
//                     // Update status in localStorage
//                     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//                     const updatedItems = storedRequestedItems.map(item =>
//                         item.requestId === id ? { ...item, status: 'Waiting for Collection' } : item
//                     );
//                     localStorage.setItem('requestedItems', JSON.stringify(updatedItems));
//                 } else {
//                     setDeclineMessage('Your response has been sent!');
//                     dispatch(declineRequest()); // Dispatch declineRequest action
//                     setShowCard(false); // Hide the card after declining
//                     toast.success('Response sent!');
                    
//                     // Update status in localStorage
//                     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//                     const updatedItems = storedRequestedItems.map(item =>
//                         item.requestId === id ? { ...item, status: 'Declined' } : item
//                     );
//                     localStorage.setItem('requestedItems', JSON.stringify(updatedItems));
//                 }
//                 const emailResponse = await axios.post(`http://localhost:5282/api/Email/RecipientMail?requestId=${id}`);
//                 console.log('Email Response:', emailResponse.data);
//             } else {
//                 console.error('Failed to respond to request:', response.data);
//                 toast.error('Failed to respond to request.');
//             }
//         } catch (error) {
//             console.error('Error responding to request:', error.response || error.message || error);
//             toast.error('Error responding to request.');
//         }
//     };

//     return (
//         <div>
//             <ToastContainer />
//             {recipientInfo && ( // Conditionally render if recipientInfo is not null
//                 <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(50, 50, 50, 0.2)' }}>
//                     <div className="card text-center border" style={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//                         transition: 'transform 0.2s, box-shadow 0.2s',
//                         borderRadius: '20px',
//                         width: '300px',
//                         height: '200px',
//                         margin: 'auto'
//                     }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = 'scale(1.05)';
//                             e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = 'scale(1)';
//                             e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
//                         }}
//                     >
//                         <div className="d-flex justify-content-center align-items-center" style={{ height: '100px', width: '100%' }}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="red" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
//                                 <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//                             </svg>
//                         </div>
//                         <p className="cookieHeading" style={{ fontWeight: 'bold' }}>Pending Donation Request!</p>
//                         <p className="cookieDescription" style={{ fontWeight: 'bold', color: 'grey', fontSize: '0.8em' }}>
//                             {recipientInfo.RecipientName} has made a request from {recipientInfo.RecipientAddress}
//                         </p>
//                         <div className="buttonContainer" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '25px' }}>
//                             <button className="btn btn-success acceptButton rounded-pill" onClick={() => respondToRequest(true)}>Accept</button>
//                             <button className="btn btn-danger declineButton rounded-pill" onClick={() => respondToRequest(false)}>Decline</button>
//                         </div>
//                          <br />
//                     </div>
//                 </div>
//             )}
//             {acceptMessage && <p>{acceptMessage}</p>}
//             {declineMessage && <p>{declineMessage}</p>}
//         </div>
//     );
// };

// // export default CookieCard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { acceptRequest, declineRequest } from '../Redux/actions';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useParams, useNavigate } from 'react-router-dom';

// const CookieCard = ({ requesterName, foodName, foodDescription, requestId }) => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [acceptMessage, setAcceptMessage] = useState('');
//     const [declineMessage, setDeclineMessage] = useState('');
//     const [timer, setTimer] = useState(0);
//     const [showCard, setShowCard] = useState(true);
//     const [recipientInfo, setRecipientInfo] = useState(null);

//     useEffect(() => {
//         const fetchRecipientInfo = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5282/api/Email/${id}`);
//                 setRecipientInfo(response.data);
//             } catch (error) {
//                 console.error('Error fetching recipient information:', error);
//                 toast.error('Error fetching recipient information.');
//             }
//         };

//         fetchRecipientInfo();
//     }, [id]);

//     const respondToRequest = async (accepted) => {
//         try {
//             const response = await axios.put(`http://localhost:5282/api/Request/updatestatus/${id}?newStatus=${accepted ? 'Accepted' : 'Declined'}`);
//             if (response.status === 200) {
//                 if (accepted) {
//                     setAcceptMessage('Your request has been accepted. Expires in 32 minutes.');
//                     setTimer(32 * 60); // 32 minutes in seconds
//                     dispatch(acceptRequest());
//                     toast.success('Response sent!');

//                     // Update accepted items in localStorage
//                     const storedAcceptedItems = JSON.parse(localStorage.getItem('acceptedItems')) || [];
//                     const updatedAcceptedItems = [
//                         ...storedAcceptedItems,
//                         { requestId, requesterName, foodName, foodDescription }
//                     ];
//                     localStorage.setItem('acceptedItems', JSON.stringify(updatedAcceptedItems));

//                     // Redirect to AcceptedFoodPage
//                     navigate(`/accepted-food/${id}`);
//                 } else {
//                     setDeclineMessage('Your response has been sent!');
//                     dispatch(declineRequest());
//                     setShowCard(false);
//                     toast.success('Response sent!');
//                 }
//                 await axios.post(`http://localhost:5282/api/Email/RecipientMail?requestId=${id}`);
//             } else {
//                 console.error('Failed to respond to request:', response.data);
//                 toast.error('Failed to respond to request.');
//             }
//         } catch (error) {
//             console.error('Error responding to request:', error.response || error.message || error);
//             toast.error('Error responding to request.');
//         }
//     };

//     return (
//         <div>
//             <ToastContainer />
//             {recipientInfo && showCard && (
//                 <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(50, 50, 50, 0.2)' }}>
//                     <div className="card text-center border" style={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//                         transition: 'transform 0.2s, box-shadow 0.2s',
//                         borderRadius: '20px',
//                         width: '300px',
//                         height: '200px',
//                         margin: 'auto'
//                     }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = 'scale(1.05)';
//                             e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = 'scale(1)';
//                             e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
//                         }}
//                     >
//                         <div className="d-flex justify-content-center align-items-center" style={{ height: '100px', width: '100%' }}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="red" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
//                                 <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//                             </svg>
//                         </div>
//                         <p className="cookieHeading" style={{ fontWeight: 'bold' }}>Pending Donation Request!</p>
//                         <p className="cookieDescription" style={{ fontWeight: 'bold', color: 'grey', fontSize: '0.8em' }}>
//                             {recipientInfo.RecipientName} has made a request from {recipientInfo.RecipientAddress}
//                         </p>
//                         <div className="buttonContainer" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '25px' }}>
//                             <button className="btn btn-success acceptButton rounded-pill" onClick={() => respondToRequest(true)}>Accept</button>
//                             <button className="btn btn-danger declineButton rounded-pill" onClick={() => respondToRequest(false)}>Decline</button>
//                         </div>
//                         <br />
//                     </div>
//                 </div>
//             )}
//             {acceptMessage && <p>{acceptMessage}</p>}
//             {declineMessage && <p>{declineMessage}</p>}
//         </div>
//     );
// };

// export default CookieCard;



//Updates Monday

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { acceptRequest, declineRequest } from '../Redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';

const CookieCard = ({ requesterName, foodName, foodDescription, requestId }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [acceptMessage, setAcceptMessage] = useState('');
    const [declineMessage, setDeclineMessage] = useState('');
    const [timer, setTimer] = useState(0);
    const [showCard, setShowCard] = useState(true);
    const [recipientInfo, setRecipientInfo] = useState(null);

    useEffect(() => {
        const fetchRecipientInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5282/api/Email/${id}`);
                setRecipientInfo(response.data);
            } catch (error) {
                console.error('Error fetching recipient information:', error);
                toast.error('Error fetching recipient information.');
            }
        };

        fetchRecipientInfo();
    }, [id]);

    const respondToRequest = async (accepted) => {
        try {
            const response = await axios.put(`http://localhost:5282/api/Request/updatestatus/${id}?newStatus=${accepted ? 'Accepted' : 'Declined'}`);
            if (response.status === 200) {
                if (accepted) {
                    setAcceptMessage('Your request has been accepted. Expires in 32 minutes.');
                    setTimer(32 * 60); // 32 minutes in seconds
                    dispatch(acceptRequest());
                    toast.success('Response sent!');

                    // Save the intended redirect URL in localStorage or sessionStorage
                    sessionStorage.setItem('postLoginRedirect', `/accepted-food/${id}`);

                    // Redirect to Login Page
                    navigate('/login');
                } else {
                    setDeclineMessage('Your response has been sent!');
                    dispatch(declineRequest());
                    setShowCard(false);
                    toast.success('Response sent!');
                }
                await axios.post(`http://localhost:5282/api/Email/RecipientMail?requestId=${id}`);
            } else {
                console.error('Failed to respond to request:', response.data);
                toast.error('Failed to respond to request.');
            }
        } catch (error) {
            console.error('Error responding to request:', error.response || error.message || error);
            toast.error('Error responding to request.');
        }
    };

    return (
        <div>
            <ToastContainer />
            {recipientInfo && showCard && (
                <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(50, 50, 50, 0.2)' }}>
                    <div className="card text-center border" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        borderRadius: '20px',
                        width: '300px',
                        height: '200px',
                        margin: 'auto'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100px', width: '100%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="red" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                        <p className="cookieHeading" style={{ fontWeight: 'bold' }}>Pending Donation Request!</p>
                        <p className="cookieDescription" style={{ fontWeight: 'bold', color: 'grey', fontSize: '0.8em' }}>
                            {recipientInfo.RecipientName} has made a request from {recipientInfo.RecipientAddress}
                        </p>
                        <div className="buttonContainer" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '25px' }}>
                            <button className="btn btn-success acceptButton rounded-pill" onClick={() => respondToRequest(true)}>Accept</button>
                            <button className="btn btn-danger declineButton rounded-pill" onClick={() => respondToRequest(false)}>Decline</button>
                        </div>
                        <br />
                    </div>
                </div>
            )}
            {acceptMessage && <p>{acceptMessage}</p>}
            {declineMessage && <p>{declineMessage}</p>}
        </div>
    );
};

export default CookieCard;
