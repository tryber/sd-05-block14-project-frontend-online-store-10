import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart.png';

const CartLink = () => (
  <Link to="/cart" data-testid="shopping-cart-button">
    <img src={Cart} width="30px" height="30px" alt="icone carrinho" />
  </Link>
);
export default CartLink;
