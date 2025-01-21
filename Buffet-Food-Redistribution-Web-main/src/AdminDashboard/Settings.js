import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Settings = () => {
    return (
        <Container className="my-5 p-3 border">
            <h2 className="text-center mb-4">Settings</h2>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card bg="dark" text="white" className="mb-3">
                        <Card.Body>
                            <Card.Title>Technical Glitch</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor ac justo laoreet, vel eleifend sem placerat.
                            </Card.Text>
                            <Button variant="primary">Resolve</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="white" className="mb-3">
                        <Card.Body>
                            <Card.Title>Data Integrity Issue</Card.Title>
                            <Card.Text>
                                Phasellus feugiat, nulla sit amet vestibulum malesuada, nisi metus commodo nisi, quis pharetra orci lorem nec dolor.
                            </Card.Text>
                            <Button variant="primary">Resolve</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="white" className="mb-3">
                        <Card.Body>
                            <Card.Title>System Unresponsive</Card.Title>
                            <Card.Text>
                                Fusce non eros sed mauris tincidunt lacinia vel a magna. Curabitur a diam vestibulum, vehicula nulla in, gravida velit.
                            </Card.Text>
                            <Button variant="primary">Resolve</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Settings;
