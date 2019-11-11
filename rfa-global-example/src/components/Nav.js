// Packages
import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopBar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><FontAwesomeIcon icon={['fab', 'apple']} /> Font Awesome <FontAwesomeIcon icon={['fab', 'google']} /></NavbarBrand>
        <NavItem>
          <NavLink href="#icons">Icons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#docs">Docs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#support">Support</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}
