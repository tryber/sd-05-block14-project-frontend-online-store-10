import React from 'react';
import CartLink from '../../components/CartLink/CartLink';
import AddToCart from '../../components/AddToCart/AddToCart';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cart: [] };
    this.addingToCart = this.adding.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    localStorage.setItem('Cart', JSON.stringify(this.state.cart));
  }
  async adding(i, q) {
    const prods = this.state.cart;
    const pos = prods.findIndex((prods) => prods.id === i.id);

    if (pos >= 0) {
      prods[pos].q += 1;
    } else {
      prods.push(Object.assign({}, i, { q }));
    }
    await this.setState({ cart: prods });
    await this.setLocalStorage();
  }

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
        <AddToCart
          dataTestid="product-detail-add-to-cart"
          item={item}
          addingToCart={this.adding}
          quantity={1}
        />
        <CartLink cart={this.state.cart} />
      </div>
    );
  }
}

export default ProductDetail;
