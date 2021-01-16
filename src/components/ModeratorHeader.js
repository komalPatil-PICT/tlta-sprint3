import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const ModeratorHeader = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">TLTA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">ModeratorDashboard</Nav.Link>
            <Nav.Link href="/moderatorCreateActivity">Create Activity</Nav.Link>
            <Nav.Link href="/moderatorAddAssessment">Add Assessment</Nav.Link>
            <Nav.Link href="/moderatorMyRecentActivites">My Recent Activities</Nav.Link>
            <Nav.Link href="/usersActivities">Manage Users</Nav.Link>
        </Nav>
    </Navbar>
);

export default ModeratorHeader;