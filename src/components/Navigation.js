import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation({setSearch}) {
  return (
    <div className='navigation'>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" as={Link} to='/'>Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" as={Link} to='/'>Home</Nav.Link>
        <Nav.Link  href="#action2" as={Link} to='/movies' >movies</Nav.Link>
        <NavDropdown title="Genres" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Anime
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
        Display
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event)=>setSearch(event.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Navigation