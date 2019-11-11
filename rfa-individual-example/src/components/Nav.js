// Packages
import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

export default function TopBar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Font Awesome</NavbarBrand>
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
