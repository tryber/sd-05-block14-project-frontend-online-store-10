import React from 'react';

class ProductDetail extends React.Component {
  render() {
    const { location } = this.props;
    const { item } = location;
    console.log(item);
    return (
      <div>
        <h3 data-testid="product-detail-name">{item.title}</h3>
        <img src={item.thumbnail} alt="img" />
        <div>
          <p>Preço: {item.price}</p>
          <p>Avaliação do vendedor: {item.available_quantity}</p>
          <p>
            Localização:{item.address.city_name},{item.address.state_name}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
