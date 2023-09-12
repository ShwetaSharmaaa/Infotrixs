import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'; 
import { useLogoutUserMutation } from '../services/appApi';
import { useSelector } from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png';


export default function Navigation() {
  const user = useSelector((state) => state.user);
  const [ logoutUser] = useLogoutUserMutation();

  async function handleLogout(e){
     e.preventDefault();
     await logoutUser(user);
     // redirect to Homepage
     window.location.replace("/");
  }
  return (
    // className="bg-body-tertiary"
    <Navbar expand="lg" >
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand>
                <img src={logo} alt='ChatHub' style={{width:100, height:80 , borderRadius:100}}/>
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
                  <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
            )}
            <LinkContainer to="/chat">
                <Nav.Link >Chat</Nav.Link>
            </LinkContainer>
            { user && (
                <NavDropdown title={
                  <>
                     <img src={user.picture} style={{width: 30 ,height: 30 , marginRight:10 , objectFit: 'cover', borderRadius: '50%'}}/>
                     {user.name}
                  </>
                } 
                id="basic-nav-dropdown">
                  <NavDropdown.Item >{user.status}</NavDropdown.Item>
                  <NavDropdown.Item >
                    <Button variant="danger" onClick={handleLogout}>
                        Logout
                    </Button>
                    </NavDropdown.Item>
                </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
