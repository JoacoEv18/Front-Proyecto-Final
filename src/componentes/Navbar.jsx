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
                            <Nav.Link href="/colaboradores">Colaboradores</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex me-auto">
                            <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
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
