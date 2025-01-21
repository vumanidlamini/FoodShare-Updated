// import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TermsModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {/* Add your terms and conditions text here */}
          <div>
           1. Agreement to maintaining the highest standards of food safety and hygiene to ensure the quality of redistributed food.</div>
          <div>
           2. Donors agree to donate only safe, unspoiled food and only food that is proven safe to consume. 
          </div>
          <div>
           3. Agreement to donate food that is not cooked 12 or more hours ago.
          </div>
          <div>
           4. The redistribution system is not liable for any illness or injury resulting from the consumption of redistributed food.
          </div>
          <div>
           5. Donors agree to abide by any and all applicable laws, regulations, and ordinances related to food donation and redistribution.
          </div>
          <div>
           6. By donating food, you agree to comply with all applicable laws and regulations.
          </div>
          <div>
           7. Violating each of the above mentioned conditions, lawful actions may be taken against the violator.
          </div> 
          
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsModal;
