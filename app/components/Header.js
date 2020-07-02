import React, { useState } from 'react';
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import Logo from '../assets/images/logo.png';

export default function Header({ googleLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <Row>
              <Col lg={12}>
                <Navbar expand="lg">
                  <NavbarBrand href="/">
                    <img src={Logo} alt="Logo" />
                  </NavbarBrand>

                  <NavbarToggler onClick={toggle} navbar="true" />

                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink className="page-scroll" href="#home">
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="page-scroll" href="#why">
                          Why
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="page-scroll" href="#features">
                          Features
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="page-scroll" href="#screenshots">
                          Screenshots
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="page-scroll" href="#pricing">
                          Pricing
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <Button color="danger" onClick={googleLogin}>
                          Login using Google <i className="lni lni-google" />
                        </Button>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    </div>
  );
}
