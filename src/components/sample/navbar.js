import React, { Component } from 'react'
import {
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from 'reactstrap'

class navbar extends Component {
    // Initial State
    state = {
        isOpen: false
    }
    // Toggle
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // Render
    render () {
        return (         
            <Navbar dark color="dark" expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/" >Sample</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Sample Link</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    } 
} 
export default navbar 