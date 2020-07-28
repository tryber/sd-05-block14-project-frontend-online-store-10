import React from 'react';
import './ShoppingCart.css';
class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-center" data-testid="shopping-cart-empty-message" >Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default ShoppingCart;
