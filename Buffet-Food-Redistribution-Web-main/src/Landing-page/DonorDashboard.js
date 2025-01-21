import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leaderboard from '../Leader-Board/Leaderboard';

// Sample data
const sampleData = {
  totalDonations: 20,
  totalQuantity: '150 kg',
  recentDonations: [
    { date: '2024-08-01', quantity: '10', status: 'Collected' },
    { date: '2024-08-05', quantity: '20', status: 'Pending' },
  ],
  donationImpact: {
    beneficiariesHelped: 50,
    totalFoodProvided: '500'
  },
  donationTrends: {
    weekly: [
      { week: 'Week 1', donations: 10 },
      { week: 'Week 2', donations: 20 },
      { week: 'Week 3', donations: 30 },
      { week: 'Week 4', donations: 40 },
      { week: 'Week 5', donations: 50 },
      { week: 'Week 6', donations: 60 },
      { week: 'Week 7', donations: 70 },
    ],
    charityComparison: [
      { charity: 'Charity A', donations: 15 },
      { charity: 'Charity B', donations: 25 },
      { charity: 'Charity C', donations: 35 },
      { charity: 'Charity D', donations: 45 },
    ]
  }
};

const DonorDashboard = () => {
  const { totalDonations, totalQuantity, recentDonations, donationImpact, donationTrends } = sampleData;

  return (
    <Container fluid className="mt-4">
      <br />
      <br />
      <br />
      <h3 className='text-center'>Donor Dashboard</h3>
      <br />
      <br />
      
      <Row>
        <Col md={6}>
          <Card className="bg-warning mb-4">
            <Card.Body>
              <Card.Title>Total Donations Made</Card.Title>
              <Card.Text>{totalDonations}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-success mb-4">
            <Card.Body>
              <Card.Title>Total Quantity Donated</Card.Title>
              <Card.Text>{totalQuantity}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
        <Row>
          
          <Col md={6}>
            <Card className="bg-primary mb-4">
          
              <Card.Body>
                <Card.Title>Beneficiaries Helped</Card.Title>
                <Card.Text>{donationImpact.beneficiariesHelped}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="bg-warning mb-4">
              <Card.Body>
                <Card.Title>Total Food Provided</Card.Title>
                <Card.Text>{donationImpact.totalFoodProvided}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
       
        </Row>
     

      <Row>
        <Col md={12}>
          <Card className="mb-4 text-center text-success">
            <Card.Body>
              <Card.Title >RECENT DONATIONS</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDonations.map((donation, index) => (
                    <tr key={index}>
                      <td>{donation.date}</td>
                      <td>{donation.quantity}</td>
                      <td>{donation.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 text-center text-success">
            <Card.Body>
              <Card.Title>DONATION TRENDS</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={donationTrends.weekly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="donations" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 text-center text-success">
            <Card.Body>
              <Card.Title>DONATION PER CHARITY</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={donationTrends.charityComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="charity" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="donations" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>
      <Container className="mt-5 ">
              <Leaderboard />
        </Container>
      </div>
    </Container>
   
  );
};

export default DonorDashboard;



