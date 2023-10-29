import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button

} from 'reactstrap';
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom';

export default class Navbaar extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Shoppar
        </NavbarBrand>
       
        
          <Nav>
          

            {/* <NavItem>
              <NavLink href="https://github.com/isabudak">GitHub</NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/isabudak">GitHub</NavLink>
            </NavItem>

            <NavItem>
            <NavLink>
            <Link to="Login"><Button color='success'>Login</Button></Link>
          </NavLink>
              
            </NavItem>
            <NavItem>
            <NavLink>
            <Link to="Register"><Button color='success'>Register</Button></Link>
          </NavLink>
              
            </NavItem>
          </Nav>


          <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
          
            
          
        
      </Navbar>
      </div>
    )
  }
}
