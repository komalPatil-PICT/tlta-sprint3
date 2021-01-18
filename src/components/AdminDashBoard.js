import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import Header from '../components/Header';

const DashBoard = () => (
    <>
<Header/>
    <Container className="card-container">
        <Row className="justify-content-md-center card-spacing">
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/adminManageUsers' >Manage Users</Card.Link>
                        <Card.Text>
                            <ul>
                                <li>Can register new user</li>
                                <li>view existing user</li>
                                <li>Change password of user</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/adminAssessments' >Manage Assessments</Card.Link>
                        <Card.Text>
                            <ul>
                                <li>Can create new Assessments</li>
                                <li>View existing Assessments</li>
                                <li>Edit Assessments</li>
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
                        <Card.Link href='/adminActivities' >Manage Learning Activities</Card.Link>
                        <Card.Text>
                            <ul>
                                <li>Can create new activity</li>
                                <li>view existing activities</li>
                                <li>Delete activities</li>
                            </ul>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/usersActivity' >Review User's Activities</Card.Link>
                        <Card.Text>
                            <ul>
                                <li>Can register new usery</li>
                                <li>View existing user</li>
                                <li>View details</li>
                            </ul>
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
);

export default DashBoard;