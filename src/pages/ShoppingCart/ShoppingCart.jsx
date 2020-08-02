import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = (props) => {
  let cartLocal = JSON.parse(localStorage.getItem('Cart'));
  
  if(props.location.cart){
    cartLocal = props.location.cart;
  }
  
  if (cartLocal) {
    if(cartLocal.length > 0){
      return (
        <>
          {
          cartLocal.map(produto => {
            return (
              <div key={produto.id}>
                <p data-testid="shopping-cart-product-name">{produto.title}</p>
                <p data-testid="shopping-cart-product-quantity">{produto.quantity}</p>
              </div>
            )
          })}
        </>
      )
    }
  }

  return (
    <div>
      {console.log(cartLocal)}
      <h2
        className="text-center"
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h2>

    </div>
  );
}

export default ShoppingCart;
