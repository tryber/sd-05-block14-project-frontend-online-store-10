// Absolute imports
import React from 'react';
import { Link } from 'react-router-dom';
// Relative imports
import AddToCart from '../AddToCart/AddToCart';

import './Items.css';

const Item = (props) => {
  const { items } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item.id} className="item">
          <p>{item.title}</p>
          <Link data-testid="product-detail-link" to={{ pathname: `/${item.id}`, item }}>
            <img src={item.thumbnail} alt="item" />
          </Link>
          <p>{`R$ ${item.price.toFixed(2)}`}</p>
          <AddToCart dataTestid="product-add-to-cart" item={item} quantity={1} plusQuant={false} />
        </div>
      ))}
    </div>
  );
};

export default Item;
