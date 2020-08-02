import React, { Component } from 'react';

function addtocart (item, addingToCart, quantity ){
  addingToCart(item, quantity)  
}

const AddToCart = (props) => {
  const { dataTestid, item, quantity, plusQuant, addingToCart } = props;
  return (
    <div>
      <button data-testid={dataTestid} onClick={() => addtocart(item, addingToCart, quantity)}>
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
