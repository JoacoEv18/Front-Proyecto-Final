import React from 'react'
/* import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
/* import Form from 'react-bootstrap/Form'; */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Navbar className='barra' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Mercado Free</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/clientes">Clientes</Nav.Link>
                        </Nav>
                        <Nav className=" perfil me-3 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className='perfil-name' href="/perfil">Registrate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </nav>
    )
};

export default NavBar
