import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faCog } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';

const UserHeader = ()  =>(           
    <body>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">TLTA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/userDashboard">Dashboard</Nav.Link>
            <Nav.Link href="/userHomePage">User Home Page</Nav.Link>
            <Nav.Link href="/browsePage">Browse</Nav.Link>
            <Nav.Link href="/myProfile">My Profile</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>  
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>



            <NavDropdown className="mr-auto" title="Account"  id="basic-nav-dropdown">
            <NavDropdown.Item href="/myProfile">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings <FontAwesomeIcon icon={faCog} /></NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>


        </Nav>
    </Navbar>
    </body>
);

export default UserHeader;