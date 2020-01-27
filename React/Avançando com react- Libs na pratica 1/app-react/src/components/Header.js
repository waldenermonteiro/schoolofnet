import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse,
    Nav
} from 'reactstrap'
function Header() {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div>
            <Navbar color="light" expand="md">
            <NavbarBrand>Checklist</NavbarBrand>
             <NavbarToggler onClick={toggle} />
             <Collapse isOpen={open}>
                 <Nav className="ml-auto">
                     <NavItem>
                         <NavLink href="/">TEXT Teste</NavLink>
                     </NavItem>
                 </Nav>
             </Collapse>
            </Navbar>
        </div>
    )
}
export default Header