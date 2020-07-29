import React from 'react';

const Categorias = (props) => {
  const { categories } = props;
  return (
    <div>
      <p>Categorias:</p>
      {categories.map(({ name, id }) => (
        <div key={id}>
          <label data-testid="category" htmlFor={id}>
            <input
              type="radio"
              name="category"
              id={id}
              value={name}
            />
            {name}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Categorias;

