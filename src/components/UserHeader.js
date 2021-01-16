import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const UserHeader = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">TLTA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/userDashboard">Dashboard</Nav.Link>
            <Nav.Link href="/userHomePage">User Home Page</Nav.Link>
            <Nav.Link href="/browsePage">Browse</Nav.Link>
            <Nav.Link href="/myProfile">My Profile</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>

        </Nav>
    </Navbar>
);

export default UserHeader;