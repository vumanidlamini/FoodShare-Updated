import React from "react";
import { Modal, Button } from "react-bootstrap";  // Import Bootstrap components

const DonorTermsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Donor Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Welcome to our Food Donation System!</h5>
        <p>
          By registering as a donor on our platform, you agree to the following terms and conditions:
        </p>
        <ul>
          <li>You must be at least 18 years of age or have legal capacity to enter into a contract.</li>
          <li>All donations are voluntary and final once processed.</li>
          <li>Donations may be made using the payment methods provided, and you agree to provide accurate payment details.</li>
          <li>We will not sell or rent your personal information to third parties, except for purposes directly related to processing donations.</li>
          <li>You agree not to use the system for any unlawful activities or disruptive actions.</li>
          <li>Your personal data will be handled according to our privacy policy and may be used for communication purposes regarding your donations.</li>
        </ul>
        <p>
          If you agree to these terms, you can proceed with registering as a donor. Thank you for your support!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          I Agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DonorTermsModal;
