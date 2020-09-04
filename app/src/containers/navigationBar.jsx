import React from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Navbar.Brand href="#home">MyHome</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Device</Nav.Link>
                    <Nav.Link href="#">History</Nav.Link>
                    <Nav.Link href="#">Users</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Wilson Chola" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default connect()(NavigationBar);