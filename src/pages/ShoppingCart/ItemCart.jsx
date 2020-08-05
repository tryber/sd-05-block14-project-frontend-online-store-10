import React from 'react';

const itemCart = (props) =>
  <div key={props.produto.id}>
    <p data-testid="shopping-cart-product-name">{props.produto.title}</p>
    <img src={props.produto.thumbnail} alt="props.produto.title" />
    <p data-testid="shopping-cart-product-quantity">{props.produto.quantity}</p>
    <div>
      <button
        data-testid="product-increase-quantity"
        onClick={() => props.func.ChangeQuant[0](1, props.produto.id)}
      >
        +
      </button>
      <button
        data-testid="product-decrease-quantity"
        onClick={() => props.func.ChangeQuant[0](-1, props.produto.id)}
      >
        -
      </button>
    </div>
  </div>;

export default itemCart;
