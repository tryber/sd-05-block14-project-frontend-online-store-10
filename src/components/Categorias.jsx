import React from 'react';

const Categorias = (props) => {
  const { categories, setCategoryId } = props;
  return (
    <div>
      <p>Categoria:</p>
      {categories.map(({ name, id }) => (
        <div key={id}>
          <label data-testid="category" htmlFor={id}>
            <input
              type="radio"
              name="category"
              id={id}
              value={name}
              onClick={setCategoryId}
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

