
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RecipientTermsModal = ({ show, handleClose }) => {
  return (
    <Modal 
    show={show} 
    onHide={handleClose} 
    centered
    size="lg"  
    >
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Food Donation Platform - Terms and Conditions</h5>
        <p>
          These Terms and Conditions ("Terms") govern your use of the Food Donation Platform ("Platform") provided by [Company Name]. By accepting or accessing the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you should refrain from using the Platform.
        </p>
        <ol>
          <li>
            <strong>Eligibility:</strong> To use the Platform, you must be at least 18 years of age and legally capable of entering into binding contracts. If you are accessing the Platform on behalf of an organization, you affirm that you have the authority to bind such organization to these Terms.
          </li>
          <li>
            <strong>Purpose of the Platform:</strong> The Platform facilitates the donation of food from donors to recipients in need. As a recipient, you agree to use the Platform solely for its intended charitable purposes, which include receiving food donations intended for individuals or groups facing food insecurity or hardship.
          </li>
          <li>
            <strong>Recipient Responsibilities:</strong> 
            <ul>
              <li>You affirm that you are in need of food donations, and your request for food through the Platform is legitimate and based on genuine need.</li>
              <li>You agree to use any food donations solely for the intended purpose of feeding individuals in need, and not for resale, distribution, or any other commercial purposes.</li>
              <li>You are responsible for ensuring that the food you receive is handled, stored, and prepared in accordance with all applicable health and safety standards and regulations. You must confirm that the food is safe for consumption prior to use.</li>
              <li>You agree to comply with all local, regional, and national laws, regulations, and ordinances concerning food handling, distribution, and any applicable public health laws.</li>
            </ul>
          </li>
          <li>
            <strong>Platform’s Limitations and Disclaimers:</strong>
            <ul>
              <li>The Platform is a facilitator and does not guarantee the quality, safety, or suitability of the food donated through the Platform. It is your responsibility to ensure the food is safe to consume.</li>
              <li>The Platform and its affiliates, including any associated organizations, are not responsible for any injuries, illnesses, or damages resulting from the consumption of donated food. You assume all risks associated with receiving and using the food.</li>
            </ul>
          </li>
          <li>
            <strong>Privacy and Data Protection:</strong> Your personal information will be handled in accordance with our Privacy Policy. By using the Platform, you consent to the collection and use of your information as described in the Privacy Policy. We will take reasonable measures to protect your data, but we cannot guarantee absolute security.
          </li>
          <li>
            <strong>Modifications to the Terms:</strong> The Platform reserves the right to modify these Terms at any time. Changes to the Terms will be posted on the Platform, and you will be notified of material changes. Continued use of the Platform following any modifications constitutes your acceptance of the updated Terms.
          </li>
          <li>
            <strong>Termination:</strong> The Platform reserves the right to suspend or terminate your access to the Platform, with or without cause, at its sole discretion, and without liability.
          </li>
          <li>
            <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].
          </li>
        </ol>
        <p>
          By using this service, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree to these Terms, you should immediately discontinue using the Platform.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipientTermsModal;
