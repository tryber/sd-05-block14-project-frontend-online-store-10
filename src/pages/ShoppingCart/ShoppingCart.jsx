import React from 'react';
import './ShoppingCart.css';
import ItemCart from './ItemCart';

const ShoppingCart = (props) => {
  let ct = JSON.parse(localStorage.getItem('Cart'));
  if (props.location.cart) {
    ct = props.location.cart;
  }
  if (ct) {
    if (ct.length > 0) {
      return (
        <div>
          { ct.map((prod) => <ItemCart produto={prod} />)}
        </div>
      );
    }
  }

  return (
    <div>
      {console.log(ct)}
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
