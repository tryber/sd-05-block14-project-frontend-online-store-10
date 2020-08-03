// Absolute imports
import React from 'react';
import { Link } from 'react-router-dom';
// Relative imports
import AddToCart from '../AddToCart/AddToCart';

import './Items.css';

const Item = (props) => {
  const { items, addingToCart: aC } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item.id} className="item">
          <Link data-testid="product-detail-link" to={{ pathname: `/${item.id}`, item }}>
            <p>{item.title}</p>
            <img src={item.thumbnail} alt="item" />
          </Link>
          <p>{`R$ ${item.price.toFixed(2)}`}</p>
          <AddToCart dataTestid="product-add-to-cart" item={item} addingToCart={aC} quantity={1} />
        </div>
      ))}
    </div>
  );
};

export default Item;
