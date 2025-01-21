// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AcceptedFoodPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [acceptedItems, setAcceptedItems] = useState([]);
//     const [isCollected, setIsCollected] = useState(false);

//     useEffect(() => {
//         // Retrieve data from location state or localStorage
//         const stateAcceptedItems = location.state?.acceptedItems || [];
//         if (stateAcceptedItems.length > 0) {
//             setAcceptedItems(stateAcceptedItems);
//         } else {
//             // Fallback to localStorage if state is not available
//             const storedAcceptedItems = JSON.parse(localStorage.getItem('acceptedItems')) || [];
//             setAcceptedItems(storedAcceptedItems);
//         }
//     }, [location.state]);

//     const handleCollect = (index) => {
//         // Update state to simulate the food item being collected
//         const updatedItems = [...acceptedItems];
//         updatedItems.splice(index, 1); // Remove the collected item
//         setAcceptedItems(updatedItems);

//         // Update localStorage after collection
//         localStorage.setItem('acceptedItems', JSON.stringify(updatedItems));
        
//         setIsCollected(true);
//         alert('Food collected!');

//         // Optionally navigate to another page after collection
//         navigate('/'); // Redirect to home or another page
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Accepted Food Items</h1>
//             {acceptedItems.length > 0 ? (
//                 <ul className="list-group">
//                     {acceptedItems.map((item, index) => (
//                         <li key={index} className="list-group-item">
//                             <h5>{item.foodName}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">Requested by: {item.requesterName}</h6>
//                             <p>{item.foodDescription}</p>
//                             <button className="btn btn-success" onClick={() => handleCollect(index)}>Collect</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>{isCollected ? 'This food item has been collected.' : 'No accepted food items yet.'}</p>
//             )}
//         </div>
//     );
// };

// export default AcceptedFoodPage;

import React, { useState, useEffect } from 'react';
import { /*useNavigate*/ useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Login';

const AcceptedFoodPage = () => {
    const { id } = useParams();
  //  const navigate = useNavigate();
    const [acceptedItems, setAcceptedItems] = useState([]);
    const [collectedItems, setCollectedItems] = useState([]);
    const [recipientInfo, setRecipientInfo] = useState(null);
    


    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const donorItems = async () => {
            try {
                const response = await axios.get("http://localhost:5282/api/FoodDonation/Donor-Items", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                setAcceptedItems(response.data);
                setCollectedItems(new Array(response.data.length).fill(false)); // Initialize collectedItems state
            } catch (error) {
                console.error('Error fetching donor items:', error);
                //toast.error('Error fetching donor items.');
            }
        };
        donorItems();
    }, []);

    useEffect(() => {
        const fetchRecipientInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5282/api/Email/${id}`);
                setRecipientInfo(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching recipient information:', error);
                
            }
        };
        fetchRecipientInfo();
    }, [id]);

    const handleCollect = async (index) => {
        try {
            // Remove the item from the local state
            const updatedItems = [...acceptedItems];
            updatedItems.splice(index, 1); // Remove the collected item
            setAcceptedItems(updatedItems);
    
            // Update the collectedItems state
            const updatedCollectedItems = [...collectedItems];
            updatedCollectedItems[index] = true;
            setCollectedItems(updatedCollectedItems);

            // Update the server about the collection
            await axios.put(`http://localhost:5282/api/Request/updateCollection/${id}`, {
                // If needed, pass additional data for the update
            });
    
            // Optionally update local storage (only if required)
            localStorage.setItem('acceptedItems', JSON.stringify(updatedItems));
    
            // Show success message
            toast.success('Collection updated');
    
            //navigate('/'); // Redirect to home or another page
        } catch (error) {
            // Handle errors
            console.error('Error collecting food:', error);
            //toast.error('Error sending response.');
        }
    };

    return (
        <div className="container mt-5">
            <div>
                <br/>
                <br/>
            </div>
            <ToastContainer />
            <h1>Accepted Food Items</h1>
            {acceptedItems.length > 0 ? (
                <ul className="list-group">
                    {acceptedItems.map((item, index) => (
                        <li key={index} className="list-group-item">
                            {recipientInfo ? (
                                <h6 className="card-subtitle mb-2 text-muted">
                                    Requested by: {recipientInfo.RecipientName}
                                </h6>
                            ) : (
                                <p>Loading recipient information...</p>
                            )}
                            <h5>Food Type: {item.itemName}</h5>
                            <h5>Description: {item.description}</h5>
                            <h5>Quantity: {item.quantity}</h5>
                            <button
                                className="btn btn-success"
                                onClick={() => handleCollect(index)}
                                disabled={collectedItems[index]} // Disable button if item has been collected
                            >
                                {collectedItems[index] ? 'Collected' : 'Collect'}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>{collectedItems.length > 0 ? 'This food item has been collected.' : 'No accepted food items yet.'}</p>
            )}
        </div>
    );
};

export default AcceptedFoodPage;

