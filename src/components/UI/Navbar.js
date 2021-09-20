import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/' style={{ marginLeft: '15px' }}>
            FullStrack Phoneword
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ml-auto'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link
                href='https://en.wikipedia.org/wiki/Phoneword'
                target='_blank'
              >
                Phoneword Wiki
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
