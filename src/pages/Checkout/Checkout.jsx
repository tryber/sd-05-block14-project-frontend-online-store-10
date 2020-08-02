import React from 'react';

class Checkout extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <h2>Valor Aleatório</h2>
        <p>
          <strong>Valor Mínimo: </strong>
        </p>
        <p>
          <strong>Valor Max: </strong>
        </p>
        <p>
          <strong>Valor Aleatório: </strong>
        </p>
      </div>
    );
  }
}

export default Checkout;
