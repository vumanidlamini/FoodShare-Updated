import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const StarRatingDisplay = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <FontAwesomeIcon
            key={starNumber}
            icon={starNumber <= rating ? faStarSolid : faStarRegular}
            className="text-warning"
            style={{ fontSize: '24px', marginRight: '5px' }}
          />
        );
      })}
    </div>
  );
};


const Reviewfeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('feedbackData');
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) {
          setFeedbackData(parsedData);
        } else {
          setFeedbackData([parsedData]); // Convert single object to array
        }
      } catch (error) {
        console.error('Error parsing feedback data:', error);
        setFeedbackData([]); // Handle parsing error gracefully
      }
    } else {
      setFeedbackData([]); // Set empty array if no data found
    }
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Stored Feedback</h1> */}
          {feedbackData.length === 0 ? (
            <Container
              style={{
                padding: '10px',
                background: '#f2f2f2',
                borderRadius: '16px',
                marginBottom: '20px',
                color: '#333',
                textAlign: 'center'
              }}
            >
              <br>
              </br>
              <h2>No feedback data available</h2>
            </Container>
          ) : (
            feedbackData.map((feedback, index) => (
              <Container
                key={index}
                style={{
                  maxWidth: '800px', // Adjusted maximum width
                  margin: '0 auto', // Center align horizontally
                  padding: '20px',
                  background: '#f2f2f2',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  color: '#333',
                  textAlign: 'center'
                }}
              >
                <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Feedback Details {index + 1}</h2>
                <p><strong>Email:</strong> {feedback.email}</p>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <h4 style={{ marginBottom: '10px' }}>Rating:</h4>
                  <StarRatingDisplay rating={feedback.rating} />
                  </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <h4 style={{ marginBottom: '10px' }}>Suggestions:</h4>
                  <p style={{ lineHeight: '1.6', whiteSpace: 'pre-line' }}>{feedback.suggestions}</p>
                </div>
              </Container>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviewfeedback;