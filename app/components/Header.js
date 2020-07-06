import React, { useState } from 'react';

import PropTypes from 'prop-types';
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
} from 'reactstrap';

import HeaderButton from './HeaderButton'

import Logo from '../assets/images/inkytest.png';



function Header({googleLogin, googleLogout, propIsLogged, propUser}) {
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
                        <HeaderButton googleLogin={googleLogin} googleLogout={googleLogout} propIsLogged={propIsLogged} propUser={propUser}  />

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
Header.propTypes = {
  googleLogin: PropTypes.func,
  googleLogout: PropTypes.func,
  propUser: PropTypes.object,
  propIsLogged: PropTypes.bool,
};
export default Header;
