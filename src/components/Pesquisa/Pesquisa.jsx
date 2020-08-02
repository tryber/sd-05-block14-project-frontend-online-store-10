import React from 'react';
import './Pesquisa.css';

const Pesquisa = (props) => {
  const { manipularInput, valorDoInput } = props;
  return (
    <input
      data-testid="query-input"
      type="text"
      className="pesquisa-input"
      name="pesquisa-input"
      value={valorDoInput}
      onChange={manipularInput}
    />
  );
};

export default Pesquisa;

