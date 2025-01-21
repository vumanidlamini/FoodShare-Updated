// import React, { useState, useEffect } from 'react';
// import { Container, Card, Row, Col } from 'react-bootstrap';

// const DonationHistory = () => {
//     const [donationHistory, setDonationHistory] = useState([]);

//     useEffect(() => {
//         const fetchDonationHistory = async () => {
//             try {
//                 const response = await fetch('http://localhost:5282/api/FoodItem');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setDonationHistory(data); // Assuming data is an array of donations
//             } catch (error) {
//                 console.error('Error fetching donation history:', error);
//                 // Optionally handle error state or show a message
//             }
//         };

//         fetchDonationHistory();
//     }, []); // Empty dependency array means this effect runs once after the initial render

//     return (
//         <Container className="my-5 p-3 border">
//             <h2 className="text-center mb-4">Donation History</h2>
//             <Row className="g-4">
//                 {donationHistory.map(donation => (
//                     <Col key={donation.id} xs={12}>
//                         <Card bg="dark" text="white" className="w-100 mb-3">
//                             <Card.Body>
//                                 <Card.Title>{donation.itemName}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">
//                                     <span className="text-secondary">
//                                         {new Date(donation.dateCooked).toLocaleString()}
//                                     </span>
//                                 </Card.Subtitle>
//                                 <Card.Text>
//                                     {/* <strong>ID:</strong> {donation.id}<br /> */}
//                                     <strong>Quantity:</strong> {donation.quantity}<br />
//                                     <strong>Description:</strong> {donation.description}<br />
//                                     <strong>Address:</strong> {donation.address}
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default DonationHistory;

import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import axios  from 'axios';

const DonationHistory = () => {
    const [donationHistory, setDonationHistory] = useState([]);
    const [error, setError] = useState(null); // Added error state
    
    useEffect(() => {
        const fetchDonationHistory = async () => {
            try {
                const response = await axios.get('http://localhost:5282/api/FoodItem/Admin-Items');
                const data = response.data;

                console.log('Fetched data:', data); // Log data

                // Sort data by dateCooked in descending order (latest first)
                data.sort((a, b) => new Date(b.dateCooked) - new Date(a.dateCooked));

                setDonationHistory(data); // Set sorted data
            } catch (error) {
                console.error('Error fetching donation history:', error);
                setError('Error fetching donation history.'); // Set error state
            }
        };

        fetchDonationHistory();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <Container className="my-5 p-3 border">
            <h2 className="text-center mb-4 text-success">Donation History</h2>
            <Row className="g-4">
                {donationHistory.map(donation => (
                    <Col key={donation.id} xs={12}>
                        <Card bg="dark" text="white" className="w-100 mb-3">
                            <Card.Body>
                                <Card.Title>{donation.itemName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <span className="text-secondary">
                                        {new Date(donation.dateCooked).toLocaleString()}
                                    </span>
                                </Card.Subtitle>
                                <Card.Text>
                                    {/* <strong>ID:</strong> {donation.id}<br /> */}
                                    <strong>Quantity:</strong> {donation.quantity}<br />
                                    <strong>Description:</strong> {donation.description}<br />
                                    <strong>Address:</strong> {donation.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DonationHistory;
