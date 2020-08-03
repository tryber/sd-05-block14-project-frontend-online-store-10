import React from 'react';

const itemCart = (props) =>
  <div key={props.produto.id}>
    <p data-testid="shopping-cart-product-name">{props.produto.title}</p>
    <img src={props.produto.thumbnail} alt="props.produto.title" />
    <p data-testid="shopping-cart-product-quantity">{props.produto.quantity}</p>
  </div>;

export default itemCart;
