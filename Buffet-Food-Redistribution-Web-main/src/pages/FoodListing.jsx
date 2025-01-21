
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUtensils, faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { connect } from "react-redux";
// import { acceptRequest, declineRequest } from "../Redux/actions";
// import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";

// function FoodListing({ acceptRequest, declineRequest }) {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredFoodItems, setFilteredFoodItems] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [transportConfirmed, setTransportConfirmed] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5282/api/FoodItem");
//         setFoodItems(response.data);
//         setFilteredFoodItems(response.data);

//         console.log(response.data);
//         const storedRequestedItems =
//           JSON.parse(localStorage.getItem("requestedItems")) || [];
//         setRequestedItems(storedRequestedItems);

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const getRequestCounts = () => {
//     const storedCounts =
//       JSON.parse(localStorage.getItem("requestCounts")) || {};
//     return storedCounts;
//   };

//   const updateRequestCounts = () => {
//     const counts = getRequestCounts();
//     const today = new Date().toDateString();

//     if (!counts[today]) {
//       counts[today] = 0;
//     }

//     counts[today] += 1;
//     localStorage.setItem("requestCounts", JSON.stringify(counts));
//   };

//   const getRequestCountForToday = () => {
//     const counts = getRequestCounts();
//     const today = new Date().toDateString();
//     return counts[today] || 0;
//   };

//   const handleRequest = async () => {
//     if (selectedItem) {
//       const requestCountToday = getRequestCountForToday();

//       if (requestCountToday >= 200) {
//         alert("You have reached the daily limit of 200 requests.");
//         setShowModal(false);
//         return;
//       }

//       const token = sessionStorage.getItem("token");
//       const requestTime = new Date().toISOString();

//       try {
//         await axios.post(
//           `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`
//         );
//         await axios.post(
//           `http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`,
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const updatedItem = { ...selectedItem, requestTime, status: "Pending" };
//         const updatedRequestedItems = [...requestedItems, updatedItem];
//         setRequestedItems(updatedRequestedItems);
//         localStorage.setItem(
//           "requestedItems",
//           JSON.stringify(updatedRequestedItems)
//         );

//         updateRequestCounts(); // Update request counts after a successful request

//         alert(`Request for ${selectedItem.itemName} sent!`);
//         setShowModal(false); // Close modal
//         setTransportConfirmed(false); // Reset transport confirmation
//       } catch (error) {
//         console.error("Error handling request:", error);
//       }
//     }
//   };

//   const handleRequestClick = (item) => {
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setSelectedItem(null);
//     setShowModal(false);
//     setTransportConfirmed(false); // Reset transport confirmation
//   };

//   const handleTransportConfirm = () => {
//     setTransportConfirmed(true);
//   };

//   const handleSearchQueryChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = foodItems.filter((item) =>
//       item.address.toLowerCase().includes(query)
//     );
//     setFilteredFoodItems(filtered);
//   };

//   const clearLocalStorage = () => {
//     localStorage.removeItem("requestedItems");
//     localStorage.removeItem("requestCounts"); // Clear request counts as well
//     setRequestedItems([]);
//     alert("Local storage cleared!");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br />
//       <br />
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="d-flex justify-content-center mb-4">
//         <InputGroup className="w-25 rounded-pill">
//           <FormControl
//             type="text"
//             className="rounded-pill"
//             placeholder="Search by address"
//             aria-label="Search"
//             aria-describedby="basic-addon1"
//             value={searchQuery}
//             onChange={handleSearchQueryChange}
//           />
//           <InputGroup.Text className="bg-info border-0 rounded-circle p-2 ms-1">
//             <FontAwesomeIcon icon={faSearch} />
//           </InputGroup.Text>
//         </InputGroup>
//       </div>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {filteredFoodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div
//               className={`card h-100 shadow rounded p-3 ${
//                 requestedItems.some(
//                   (requestedItem) => requestedItem.id === item.id
//                 )
//                   ? "bg-light disabled"
//                   : ""
//               }`}
//             >
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
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
//                           <td>
//                             {item.dateCooked
//                               ? new Date(item.dateCooked).toLocaleString()
//                               : "Not specified"}
//                           </td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Address</th>
//                           <td>{item.address}</td>
//                         </tr>
//                       </thead>
//                     </table>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRequestClick(item)}
//                   className="btn btn-primary mt-2 align-self-end"
//                   disabled={requestedItems.some(
//                     (requestedItem) => requestedItem.id === item.id
//                   )}
//                 >
//                   {requestedItems.some(
//                     (requestedItem) => requestedItem.id === item.id
//                   ) ? (
//                     "Requested"
//                   ) : (
//                     <>
//                       <FontAwesomeIcon icon={faUtensils} /> Request
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal show={showModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {transportConfirmed ? "Confirm Request" : "Transport Confirmation"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {transportConfirmed
//             ? `Are you sure you want to request ${selectedItem?.itemName}?`
//             : "Do you have transport to collect the donation?"}
//         </Modal.Body>
//         <Modal.Footer>
//           {transportConfirmed ? (
//             <>
//               <Button variant="danger" onClick={handleModalClose}>
//                 Cancel
//               </Button>
//               <Button variant="success" onClick={handleRequest}>
//                 Confirm
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button variant="secondary" onClick={handleModalClose}>
//                 No
//               </Button>
//               <Button variant="primary" onClick={handleTransportConfirm}>
//                 Yes
//               </Button>
//             </>
//           )}
//         </Modal.Footer>
//       </Modal>

//       <br></br>
//       <br></br>
//       <br></br>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   requests: state.requests,
// });

// export default connect(mapStateToProps, { acceptRequest, declineRequest })(
//   FoodListing
// );

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { connect } from "react-redux";
import { acceptRequest, declineRequest } from "../Redux/actions";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";

function FoodListing({ acceptRequest, declineRequest }) {
  const [foodItems, setFoodItems] = useState([]);
  const [requestedItems, setRequestedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [transportConfirmed, setTransportConfirmed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5282/api/FoodItem");
        setFoodItems(response.data);
        setFilteredFoodItems(response.data);

        const storedRequestedItems =
          JSON.parse(localStorage.getItem("requestedItems")) || [];
        setRequestedItems(storedRequestedItems);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchQueryChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = foodItems.filter((item) =>
      item.address.toLowerCase().includes(query)
    );
    setFilteredFoodItems(filtered);
  };

  const handleRequestClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setShowModal(false);
    setTransportConfirmed(false); // Reset transport confirmation
  };

  const handleTransportConfirm = () => {
    setTransportConfirmed(true);
  };

  const handleRequest = async () => {
    if (selectedItem) {
      // Handling the request logic here...
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="mt-5 mb-3 text-center text-dark">Available Donations</h2>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4 ">
        <InputGroup className="w-50 rounded-pill shadow">
          <FormControl
            type="text"
            className="rounded-pill py-2 px-4 text-center"
            placeholder="Search by address"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </InputGroup>
      </div>

      {/* Food Items Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
        {filteredFoodItems.map((item) => (
          <div key={item.id} className="col">
            <div
              className={`card h-100 shadow-lg rounded p-3 transition-all duration-300 ${
                requestedItems.some((requestedItem) => requestedItem.id === item.id)
                  ? "bg-light disabled"
                  : "hover-shadow-lg"
              }`}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-dark">{item.itemName}</h5>
                <div className="table-responsive mb-3">
                  {/* <table className="table table-bordered table-sm">
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
                        <td>
                          {item.dateCooked
                            ? new Date(item.dateCooked).toLocaleString()
                            : "Not specified"}
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Address</th>
                        <td>{item.address}</td>
                      </tr>
                    </thead>
                  </table> */}

<table className="table table-bordered table-sm table-striped">
  <thead>
    <tr>
      <th scope="col">Quantity</th>
      <th scope="col">Description</th>
      <th scope="col">Time Cooked</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{item.quantity}</td>
      <td>{item.description}</td>
      <td>
        {item.dateCooked
          ? new Date(item.dateCooked).toLocaleString()
          : "Not specified"}
      </td>
      <td>{item.address}</td>
    </tr>
  </tbody>
</table>


                </div>
                <button
                  onClick={() => handleRequestClick(item)}
                  className="btn btn-dark mt-auto align-self-center w-100 rounded-pill"
                  disabled={requestedItems.some(
                    (requestedItem) => requestedItem.id === item.id
                  )}
                >
                  {requestedItems.some(
                    (requestedItem) => requestedItem.id === item.id
                  ) ? (
                    "Requested"
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faUtensils} /> Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Request Confirmation */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {transportConfirmed ? "Confirm Request" : "Transport Confirmation"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {transportConfirmed
            ? `Are you sure you want to request ${selectedItem?.itemName}?`
            : "Do you have transport to collect the donation?"}
        </Modal.Body>
        <Modal.Footer>
          {transportConfirmed ? (
            <>
              <Button variant="danger" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleRequest}>
                Confirm
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={handleModalClose}>
                No
              </Button>
              <Button variant="primary" onClick={handleTransportConfirm}>
                Yes
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      <br />
    </div>
  );
}

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { acceptRequest, declineRequest })(FoodListing);
