import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import ItemCart from './ItemCart';

const ShoppingCart = (props) => {
  let ct = JSON.parse(localStorage.getItem('cart'));
  if (props.location.cart) {
    ct = props.location.cart;
  }
  if (ct) {
    if (ct.length > 0) {
      return (
        <div>
          <Link to="/">Home</Link>
          { ct.map((prod) => <ItemCart key={prod.id} produto={prod} func={props.func} />)}
        </div>
      );
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <h2
        className="text-center"
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h2>

    </div>
  );
};

export default ShoppingCart;
