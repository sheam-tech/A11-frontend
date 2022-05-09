import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

import './header.css'

const Headers = () => {
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <Navbar expand="lg" className="bg-dark text-white navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1 className="heads">Apple Collection Ltd.</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto text-white" >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manageItems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addItem">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItems">
                    My Items
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>

            {user ? (
              <button onClick={() => signOut(auth)} className="btn-style">
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn-style">Login</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Headers;
