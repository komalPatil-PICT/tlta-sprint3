import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';


const UserDashboard = () => (

    <Container >
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/userHomePage' >User Home Page</Card.Link>
                            <Card.Text>
                                Can register new user, view existing user, change password of user.
        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/browsePage' >Browse</Card.Link>
                            <Card.Text>
                                Can create new Assessments, view existing Assessments, Edit Assessments.
        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col >
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/myProfile' >My Profile</Card.Link>
                            <Card.Text>
                                Can create new activity, view existing activities, Edit activities, Delete activities.
        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Link href='/settings' >Settings</Card.Link>
                            <Card.Text>
                                Can register new user, view existing user, change password of user.
        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    
    );

export default UserDashboard;