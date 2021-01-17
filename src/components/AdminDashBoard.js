import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';

const DashBoard = () => (

    <Container >
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/adminManageUsers' >Manage Users</Card.Link>
                        <Card.Text>
                            Can register new user, view existing user, change password of user.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/adminAssessments' >Manage Assessments</Card.Link>
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
                        <Card.Link href='/adminActivities' >Manage Learning Activities</Card.Link>
                        <Card.Text>
                            Can create new activity, view existing activities, Edit activities, Delete activities.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/usersActivity' >Review User's Activities</Card.Link>
                        <Card.Text>
                            Can register new user, view existing user, change password of user.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default DashBoard;