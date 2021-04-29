import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import '../styles/Navigation.css';


const ModeratorHeader = () =>  (
    <body>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">TLTA</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/moderator">Dashboard</Nav.Link>
            <Nav.Link href="/moderatorManageUsers">View Users</Nav.Link>
            <Nav.Link href="/adminAssessments">Manage Assessments</Nav.Link>
            <Nav.Link href="/adminActivities">Manage Activities</Nav.Link>
            <Nav.Link href="/usersActivity">Review User's Activities</Nav.Link>
            
            <NavDropdown className="mr-auto" title="Account"  id="basic-nav-dropdown">
            <NavDropdown.Item href="/myprofile">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings <FontAwesomeIcon icon={faCog} /></NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>


        </Nav>
    </Navbar>
    </body>

);
export default ModeratorHeader;