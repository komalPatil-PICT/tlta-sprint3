import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">TLTA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/adminManageUsers">Manage Users</Nav.Link>
            <Nav.Link href="/adminAssessments">Manage Assessments</Nav.Link>
            <Nav.Link href="/adminActivities">Manage Activities</Nav.Link>
            <Nav.Link href="/usersActivities">Review User's Activities</Nav.Link>

        </Nav>
    </Navbar>
);

export default Header;