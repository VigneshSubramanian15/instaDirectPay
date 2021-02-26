import React, { useState } from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
} from "shards-react";

export default function Navigation() {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [collapseOpen, setcollapseOpen] = useState(false);

    const toggleDropdown = () => {
        setdropdownOpen((dropdownOpen) => !dropdownOpen);
    };

    const toggleNavbar = () => {
        setcollapseOpen((collapseOpen) => !collapseOpen);
    };

    return (
        <div className="nav-div">
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="#">Shards React</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />

                <Collapse open={collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink active href="#">
                                Active
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" disabled>
                                Disabled
                            </NavLink>
                        </NavItem>
                        <Dropdown open={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle nav caret>
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
