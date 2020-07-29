import React from 'react';

const Item = (props) => {
  const { items } = props;
  return (
    <div className="items-container">
      {items.map((item) => (
        <div data-testid="product" key={item} className="item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
