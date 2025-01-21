import React from 'react';
import { Form } from 'react-bootstrap';
import backgroundImage from '../utils/img/contact-page-img.jpg'; // Assuming this is your background image import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faFax } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    // Define handleSubmit function (placeholder)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        // Add your form submission logic here
        console.log('Form submitted!');
    };

    

    return (
        <div className='contact-page'>
            <header className='mt-5 d-flex justify-content-center align-items-center'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                        height: '50vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <h1 className='text-light'>Contact</h1>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div>
                            <h2>Contact Information</h2>
                            <br></br>
                            <p className="text-start">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    071 371 8393
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=networkfoodshare@gmail.com" target="_blank">networkfoodshare@gmail.com</a>

                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faFax} className="me-2" />
                    Fax: (098) 765-4321
                  </p>
                  <p className="text-start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    1711 Block H, Soshanguve, Pretoria, South Africa
                  </p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form onSubmit={handleSubmit} className="border p-1 rounded w-100" style={{ backgroundColor: '#D8D8D8' }}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name' className="form-label fw-bold">First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' className="form-control" />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name' className="form-label fw-bold">Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' className="form-control" />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address' className="form-label fw-bold">Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' className="form-control" />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number' className="form-label fw-bold">Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' className="form-control" />
                                </div>
                            </Form.Group>
                            {/* <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date' className="form-label fw-bold">Date</Form.Label>
                                    <Form.Control type='date' id='date' className="form-control" />
                                </div>
                            </Form.Group> */}
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments' className="form-label fw-bold">Comments</Form.Label>
                                <Form.Control as='textarea' id='comments' className="form-control" />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg mb-3 w-100 btn-dark'>Submit</button>
                        </Form>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Contact;
