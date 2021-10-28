import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold",
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="140"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="nav-links my-auto">
                        <NavLink activeStyle={activeStyle} className="me-5 mt-2" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="me-5 mt-2" to="/donation">Donation</NavLink>
                        <NavLink activeStyle={activeStyle} className="me-5 mt-2" to="/events">Events</NavLink>
                        {
                            user.displayName ? 
                            <div>
                                <p className="me-3 span-text">{user.displayName}</p>
                                <Button onClick={logOut} variant="primary px-4">Logout</Button>
                            </div>
                            : 
                            <div>
                                <NavLink activeStyle={activeStyle} className="me-5" to="/register">
                                    <Button variant="primary px-4">Register</Button>
                                </NavLink>
                                <NavLink activeStyle={activeStyle} className="me-5" to="/home">
                                    <Button variant="dark px-4">Admin</Button>
                                </NavLink>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;