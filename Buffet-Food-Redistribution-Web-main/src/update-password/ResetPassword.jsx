import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            setSuccess('');
        } else if (!passwordRegex.test(newPassword)) {
            setError('Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.');
            setSuccess('');
        } else {
            setError('');
            setSuccess('Password has been reset successfully!');
            // Here you would typically send the password to your server.
            // Example: axios.post('/api/reset-password', { newPassword });
            //const response =  axios.put("http://localhost:5282/api/Email/ResetDonorPassword?email=")
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="w-100" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Your Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <br />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <br/>
                        </Form.Group>
                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                        {success && <Alert variant="success" className="mt-3">{success}</Alert>}
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Reset Password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ResetPassword;
