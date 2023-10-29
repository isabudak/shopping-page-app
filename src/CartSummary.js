import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Badge
    
  
  } from 'reactstrap';

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown>
  <DropdownToggle
    caret
    color="dark"
  >
    Your Cart - {this.props.cart.length}
  </DropdownToggle>
  <DropdownMenu dark>

      {
        this.props.cart.map(cartItem=>(
            <DropdownItem key={cartItem.product.id}>
                <Badge onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
        ))
      }

<DropdownItem >
              
                <Link to="cart" color='white'>Go to the Cart</Link>
            
            </DropdownItem>
    
  </DropdownMenu>
</UncontrolledDropdown>
      </div>
    )
  }
}
