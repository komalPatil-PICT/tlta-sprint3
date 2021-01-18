import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import UserHeader from '../components/UserHeader';

const UserDashboard = () => (
<>
<UserHeader/>
    <Container className="card-container">
            <Row className="justify-content-md-center card-spacing">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/userHomePage' >User Home Page</Card.Link>
                            <Card.Text>
                            <ul>
                                <li>Can view my learning</li>
                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/browsePage' >Browse</Card.Link>
                            <Card.Text>
                            <ul>
                                <li>Can view & register activities</li>
                            </ul>      
                              </Card.Text>
                        </Card.Body>
                    </Card>
                </Col >
            </Row>
            <Row className="justify-content-md-center card-spacing">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/myProfile' >My Profile</Card.Link>
                            <Card.Text>
                            <ul>
                                <li>Can view personal details</li>
                            </ul>        
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/settings' >Settings</Card.Link>
                            <Card.Text>
                            <ul>
                                <li>Can change password</li>
                            </ul>      
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  </>  
    );

export default UserDashboard;