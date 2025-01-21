// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
// import StarRating from './StarRating'; // Import the StarRating component

// const Leaderboard = () => {
//   const [topDonors, setTopDonors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDonorData = async () => {
//       try {
//         setLoading(true);

//         const donorsResponse = await axios.get('http://localhost:5282/api/Donor/AllDonors');
//         const donors = donorsResponse.data;

//         const donationsResponse = await axios.get('http://localhost:5282/api/FoodDonation');
//         const donations = donationsResponse.data;

//         if (donors.length === 0 || donations.length === 0) {
//           setTopDonors([]);
//           setLoading(false);
//           return;
//         }

//         const donorTotals = donors.map(donor => {
//           const totalDonations = donations
//             .filter(donation => donation.donorId === donor.donorId)
//             .reduce((total, donation) => total + donation.quantity, 0);

//           return {
//             ...donor,
//             totalDonations
//           };
//         });

//         const sortedDonors = donorTotals.sort((a, b) => b.totalDonations - a.totalDonations);
//         setTopDonors(sortedDonors.slice(0, 5));

//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Failed to load leaderboard data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonorData();
//   }, []);

//   if (loading) return (
//     <Container className="text-center">
//       <Spinner animation="border" variant="primary" />
//       <p>Loading...</p>
//     </Container>
//   );

//   if (error) return (
//     <Container className="text-center">
//       <Alert variant="danger">{error}</Alert>
//     </Container>
//   );

//   return (
//     <Container className="mt-5 ">
//         <br />
//         <br />
//       <Row className="justify-content-center w-100">
//         <Col md={8} lg={6}>
//           <Card className="mb-4 w-100">
//             <Card.Header className="text-center bg-dark text-light w-100">
//               <h2>Donors Leaderboard</h2>
//             </Card.Header>
//             <Card.Body>
//               {topDonors.length === 0 ? (
//                 <Container className="text-center">No donations data available.</Container>
//               ) : (
//                 <Row className="g-3">
//                   {topDonors.map((donor, index) => (
//                     <Col key={donor.donorId} md={12}>
//                       <div className="d-flex align-items-center border p-3 rounded hover-shadow border-primary">
//                         <div className="me-3 fw-bold border-end pe-3">{index + 1}.</div>
//                         <div className="d-flex justify-content-between w-100">
//                           <div className="fw-bold w-100 border-end px-3">{donor.donorName}</div>
//                           <div className="me-3 text-center flex-grow-1 d-flex justify-content-center w-100 border-end px-3">
//                             <StarRating rating={5 - index} />
//                           </div>
//                         </div>
//                         <div className="badge bg-success text-white ms-3 px-3 py-1">
//                           {donor.totalDonations} items donated
//                         </div>
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Inline Bootstrap styles using CSS-in-JS */}
//       <style>
//         {`
//           .hover-shadow {
//             transition: box-shadow 0.3s ease;
//           }
//           .hover-shadow:hover {
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           }
//           .border-end {
//             border-right: 3px solid #dee2e6; /* Adds a light gray separator */
//           }
//         `}
//       </style>
//     </Container>
//   );
// };

// export default Leaderboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating'; // Import the StarRating component

const Leaderboard = () => {
  const [topDonors, setTopDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        setLoading(true);

        const donorsResponse = await axios.get('http://localhost:5282/api/Donor/AllDonors');
        const donors = donorsResponse.data;

        const donationsResponse = await axios.get('http://localhost:5282/api/FoodDonation');
        const donations = donationsResponse.data;

        if (donors.length === 0 || donations.length === 0) {
          setTopDonors([]);
          setLoading(false);
          return;
        }

        const donorTotals = donors.map(donor => {
          const totalDonations = donations
            .filter(donation => donation.donorId === donor.donorId)
            .reduce((total, donation) => total + donation.quantity, 0);

          return {
            ...donor,
            totalDonations
          };
        });

        const sortedDonors = donorTotals.sort((a, b) => b.totalDonations - a.totalDonations);
        setTopDonors(sortedDonors.slice(0, 5));

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load leaderboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonorData();
  }, []);

  if (loading) return (
    <Container className="text-center mt-5">
      <Spinner animation="border" variant="primary" />
      <p>Loading...</p>
    </Container>
  );

  if (error) return (
    <Container className="text-center mt-5">
      <Alert variant="danger">{error}</Alert>
    </Container>
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="mb-4 w-100">
            <Card.Header className="text-center bg-dark text-light">
              <h2>Donors Leaderboard</h2>
            </Card.Header>
            <Card.Body>
              {topDonors.length === 0 ? (
                <Container className="text-center">No donations data available.</Container>
              ) : (
                <Row className="g-3">
                  {topDonors.map((donor, index) => (
                    <Col key={donor.donorId} md={12}>
                      <div className="d-flex align-items-center border p-3 rounded hover-shadow border-primary">
                        <div className="me-3 fw-bold border-end pe-3">{index + 1}.</div>
                        <div className="d-flex justify-content-between w-100">
                          <div className="fw-bold w-100 border-end px-3">{donor.donorName}</div>
                          <div className="me-3 text-center flex-grow-1 d-flex justify-content-center w-100 border-end px-3">
                            <StarRating rating={5 - index} />
                          </div>
                        </div>
                        <div className="badge bg-success text-white ms-3 px-3 py-1">
                          {donor.totalDonations} items donated
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Inline Bootstrap styles using CSS-in-JS */}
      <style>
        {`
          .hover-shadow {
            transition: box-shadow 0.3s ease;
          }
          .hover-shadow:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .border-end {
            border-right: 3px solid #dee2e6; /* Adds a light gray separator */
          }
        `}
      </style>
    </Container>
  );
};

export default Leaderboard;
