import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import ModeratorHeader from '../components/ModeratorHeader';

const ModeratorDashBoard = () => (
<>
<ModeratorHeader/>
    <Container className="card-container">
        <Row className="justify-content-md-center card-spacing">
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/moderatorManageUsers' >View Users</Card.Link>
                        <Card.Text>
                            <ul>
                                <li>Can view new user</li>
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
                        <Card.Link href='/moderatorManageAssessments' >Manage Assessment</Card.Link>
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
                        <Card.Link href='/moderatorManageActivities' >Manage Activities</Card.Link>
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

           
        </Row>
    </Container>
    </>
);

export default ModeratorDashBoard;