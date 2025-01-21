// src/components/TermsModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DonorTermsModal = ({ show, handleClose }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      size="lg"  
    >
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions for Food Donation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Introduction</h5>
        <p>Welcome to our Food Donation System. By registering as a donor on our platform, you agree to comply with these Terms and Conditions ("Terms") which govern your use of the platform and participation in food donation activities. Please read these Terms carefully before signing up or donating.</p>
        
        <h5>1. Eligibility to Use the Platform</h5>
        <p>You must be at least 18 years old and have the legal capacity to enter into agreements to use our platform. By registering, you affirm that you meet these requirements and that all information provided is accurate and truthful.</p>

        <h5>2. Donor Responsibilities</h5>
        <ul>
          <li>Providing accurate, complete, and up-to-date information when registering and donating food.</li>
          <li>Ensuring that the donated food is safe for consumption and complies with local food safety laws and regulations.</li>
          <li>Only donating food that has not expired and is fit for human consumption.</li>
          <li>Coordinating with the recipient organizations regarding the donation process, including pickup and delivery, where applicable.</li>
        </ul>

        <h5>3. Prohibited Donations</h5>
        <ul>
          <li>Expired or spoiled food.</li>
          <li>Food that has been improperly stored or handled, posing a risk to health or safety.</li>
          <li>Food that is illegal to donate under local, state, or national laws.</li>
          <li>Any other items that do not fall within the scope of acceptable food donations.</li>
        </ul>

        <h5>4. Platform Use</h5>
        <p>By using our platform, you agree to:</p>
        <ul>
          <li>Use the platform solely for the purpose of donating food.</li>
          <li>Not use the platform for any illegal, fraudulent, or harmful activities.</li>
          <li>Not disrupt or interfere with the functionality of the platform or attempt to bypass security measures.</li>
        </ul>

        <h5>5. Privacy and Data Collection</h5>
        <p>We respect your privacy and will only use the information you provide in accordance with our Privacy Policy. Your personal information will be used solely for the purpose of processing your donation and communicating with you about your account and donations.</p>

        <h5>6. Liability</h5>
        <p>By using our platform, you agree to hold harmless the platform administrators, its affiliates, and any recipient organizations from any claims, damages, or liabilities resulting from your donation, including any harm or injury caused by the donated food.</p>

        <h5>7. Indemnification</h5>
        <p>You agree to indemnify, defend, and hold harmless the platform administrators, its affiliates, employees, agents, and partners from any and all claims, liabilities, damages, losses, or expenses arising from your breach of these Terms, misuse of the platform, or violation of any law or third-party right.</p>

        <h5>8. Modification of Terms</h5>
        <p>We reserve the right to modify, update, or amend these Terms at any time. Any changes to the Terms will be posted on the platform, and your continued use of the platform after such changes will constitute your acceptance of the updated Terms.</p>

        <h5>9. Termination</h5>
        <p>We reserve the right to suspend or terminate your account and access to the platform at our discretion, including if you violate these Terms or engage in any behavior that may harm the platform or other users.</p>

        <h5>10. Governing Law</h5>
        <p>These Terms are governed by and construed in accordance with the laws of [Your Country]. Any legal action arising out of or relating to these Terms will be subject to the exclusive jurisdiction of the courts of [Your Country].</p>

        {/* <h5>Contact Us</h5>
        <p>If you have any questions regarding these Terms, please contact us at:</p>
        <ul>
          <li>[Company Name]</li>
          <li>[Address]</li>
          <li>[Email Address]</li>
          <li>[Phone Number]</li>
        </ul> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DonorTermsModal;
