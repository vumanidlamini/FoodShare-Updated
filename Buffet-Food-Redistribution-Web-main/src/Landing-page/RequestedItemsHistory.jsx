// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RequestedItemsHistory = () => {
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [requestStatuses, setRequestStatuses] = useState({});

//   useEffect(() => {
//     // Fetch requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);

//     // Fetch request statuses from the backend
//     const fetchRequestStatuses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/Request');
//         const statusData = response.data;
//         console.log(statusData);
//         // Create a map of donationId to status
//         const statusMap = statusData.reduce((acc, request) => {
//           acc[request.donationId] = request.status;
//           return acc;
//         }, {});

//         setRequestStatuses(statusMap);
//       } catch (error) {
//         console.error('Error fetching request statuses:', error);
//       }
//     };

//     fetchRequestStatuses();
//   }, []);

//   const getRequestStatus = (donationId) => {
//     return requestStatuses[donationId] || 'Unknown';
//   };

//   const formatCookedTime = (dateCooked) => {
//     if (!dateCooked) return 'Not specified';

//     const dateObject = new Date(dateCooked);
//     if (isNaN(dateObject.getTime())) return 'Invalid date';

//     return dateObject.toLocaleString();
//   };

//   return (
//     <div className="container mt-5">
//       <br></br>
//       <h2 className="text-center mb-5 pt-4">Request History</h2>
//       {requestedItems.length === 0 ? (
//         <p className="text-center">You have not requested any items yet.</p>
//       ) : (
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {requestedItems.map((item, index) => (
//             <div key={index} className="col mb-4"> {/* Add bottom margin here */}
//               <div className="card h-100" style={{ width: '100%' }}>
//                 <div className="card-body">
//                   <h5 className="card-title text-center">{item.itemName}</h5>
                  
//                   <div className="table-responsive">
//                     <table className="table table-bordered">
//                       <thead>
//                         <tr>
//                           <th scope="col">Quantity</th>
//                           <td>{item.quantity}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Description</th>
//                           <td>{item.description}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Time Cooked</th>
//                           <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Address</th>
//                           <td>{item.address}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Status</th>
//                           <td>{getRequestStatus(item.id)}</td>
//                         </tr>
//                       </thead>
//                     </table>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestedItemsHistory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestedItemsHistory = () => {
  const [requestedItems, setRequestedItems] = useState([]);
  const [requestStatuses, setRequestStatuses] = useState({});
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    // Fetch requested items from localStorage on component mount
    const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
    setRequestedItems(storedRequestedItems);

    // Fetch request statuses from the backend
    const fetchRequestStatuses = async () => {
      try {
        const response = await axios.get("http://localhost:5282/api/Request/DonorRequests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const statusData = response.data;
        console.log(statusData);
        // Create a map of donationId to status
        const statusMap = statusData.reduce((acc, request) => {
          acc[request.donationId] = request.status;
          return acc;
        }, {});

        setRequestStatuses(statusMap);
      } catch (error) {
        console.error('Error fetching request statuses:', error);
      }
    };

    fetchRequestStatuses();
  }, [token]);

  const getRequestStatus = (donationId) => {
    return requestStatuses[donationId] || 'Unknown';
  };

  const formatCookedTime = (dateCooked) => {
    if (!dateCooked) return 'Not specified';

    const dateObject = new Date(dateCooked);
    if (isNaN(dateObject.getTime())) return 'Invalid date';

    return dateObject.toLocaleString();
  };

  const handleClearStorage = () => {
    localStorage.removeItem('requestedItems');
    setRequestedItems([]);
  };

  return (
    <div className="container mt-5">
      <br></br>
      <h2 className="text-center mb-5 pt-4">Request History</h2>
      {requestedItems.length === 0 ? (
        <p className="text-center">You have not requested any items yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {requestedItems.map((item, index) => (
            <div key={index} className="col mb-4"> {/* Add bottom margin here */}
              <div className="card h-100" style={{ width: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.itemName}</h5>
                  
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Quantity</th>
                          <td>{item.quantity}</td>
                        </tr>
                        <tr>
                          <th scope="col">Description</th>
                          <td>{item.description}</td>
                        </tr>
                        <tr>
                          <th scope="col">Time Cooked</th>
                          <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
                        </tr>
                        <tr>
                          <th scope="col">Address</th>
                          <td>{item.address}</td>
                        </tr>
                        <tr>
                          <th scope="col">Status</th>
                          <td>{getRequestStatus(item.id)}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}<div className="text-center mb-3">
      {/* <button className="btn btn-danger" onClick={handleClearStorage}>
        Clear Request History
      </button> */}
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
    
  );
};

export default RequestedItemsHistory;
