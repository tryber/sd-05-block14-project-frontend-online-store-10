import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart.png';

const CartLink = (props) => (
  <Link 
    to={{
      pathname: '/cart',
      cart: props.cart,
    }}
    data-testid="shopping-cart-button" 
    cart={props.cart}
  >
    <img src={Cart} width="30px" height="30px" alt="icone carrinho" />
  </Link>
);
export default CartLink;
