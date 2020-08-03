import React from 'react';
import CartLink from '../../components/CartLink/CartLink';
import AddToCart from '../../components/AddToCart/AddToCart';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    localStorage.setItem('Cart', JSON.stringify(this.props.cart));
  }

  render() {
    const { location } = this.props;
    const { item } = location;
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
        <AddToCart
          dataTestid="product-detail-add-to-cart"
          item={item}
          addingToCart={this.props.func}
          quantity={1}
        />
        <CartLink cart={this.props.cart} />
      </div>
    );
  }
}

export default ProductDetail;
