import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import BullsEye from './images/BullsEye.png'

export function ContactInfo() {
  return (
    // <div className="d-flex flex-column align-items-center">
    //     <h2 className="fs-1 mb-3 text-uppercase fw-bold">Our Mission</h2>
    //     <p className="mb-5">"To get food to people who need it while stopping good food from going to waste.
    //         We're working with others to make sure surplus food finds its way to those who are hungry.
    //         By using smart ideas and working together, we're helping communities and the environment thrive."
    //     </p>

    //     <p className="m-0">to create a sustainable and efficient food redistribution system that ensures surplus food reaches those facing hunger while minimizing food waste.
    //         Through strategic partnerships, innovative technologies, and community engagement, we aim to alleviate food insecurity, promote environmental sustainability, and foster a culture of compassion and solidarity.
    //         By harnessing the power of collaboration and advocating for systemic change, we strive to build a world where everyone has access to nutritious food and no edible food goes to waste."

    //     </p>

    // </div>

    <Container className="my-4">
    <Row className="mb-4">
      <Col md={12}>
        <img
          src={BullsEye}
          alt="The 5 Goals"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className="text-center text-success mb-4">Food Share Network Mission</h2>
        <ul className="list-unstyled">
          <li className="mb-4">
            <h3 className="text-secondary">Eliminate Food Wastage</h3>
            <p>
              There's approximately 10 million tonnes of food wasted in South
              Africa every year. These numbers come from a survey published by <a 
              href="https://www.statssa.gov.za/?p=16831" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none text-success">
              Stats SA
              </a> in October 2023. At the Food Share Network, we are dedicated to addressing food waste by bridging the gap between caterers and local charities. 
              Our innovative platform simplifies the donation process, making it quick and easy for caterers to give their surplus food to community organizations in need.
              By streamlining this connection, we not only help ensure that excess food reaches those who need it most, but we also significantly reduce the environmental impact of food waste. 
              Join us in making a meaningful difference—both in our communities and for our planet.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-secondary">Donation Efficiency</h3>
            <p>
              The Food Share Network is dedicated to transforming the donation process for surplus meals, making it faster and more efficient. 
              Our platform ensures that excess food is swiftly and effectively redirected to those in need, maximizing both the impact and reach of each donation.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-secondary">Automated Logistics</h3>
            <p>
              The Food Share Network leverages automated logistics to streamline food donations. By optimizing routes and schedules, we ensure that surplus food reaches its destination efficiently and promptly, further reducing waste and enhancing the effectiveness of our efforts.
            </p>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  );
}
