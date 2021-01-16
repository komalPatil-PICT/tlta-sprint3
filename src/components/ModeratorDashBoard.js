import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';

const ModeratorDashBoard = () => (

    <Container >
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/moderatorManageUsers' >Manage Users</Card.Link>
                        <Card.Text>
                        Can register new user, view existing user, change password of user
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Link href='/moderatorManageAssessments' >Manage Assessment</Card.Link>
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
                        <Card.Link href='/moderatorManageActivities' >Manage Activities</Card.Link>
                        <Card.Text>
                        Can create new activity, view existing activities, Edit activities, Delete activities.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

           
        </Row>
    </Container>
);

export default ModeratorDashBoard;