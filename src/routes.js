import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart, ProductDetail, Checkout } from './pages';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      loading: true,
    };
    this.addingToCart = this.addingToCart.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }
  componentWillUnmount() {
    this.setLocalStorage();
  }
  setLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }
  async addingToCart(item, quantity) {
    const arr = this.state.cart;
    const index = arr.findIndex((prod) => prod.id === item.id);
    if (index >= 0) {
      arr[index].quantity += 1;
    } else {
      arr.push(Object.assign({}, item, { quantity }));
    }
    await this.setState({ cart: arr });
    await this.setLocalStorage();
  }
  render() {
    if (this.state.loading) {
      if (localStorage.getItem('cart') !== null) {
        const local = JSON.parse(localStorage.getItem('cart'));
        this.setState({ cart: local });
        this.setState({ loading: false });
      }
    }
    const { cart: c } = this.state;
    const f = this.addingToCart;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} cart={c} func={f} />} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/:id" render={(props) => <ProductDetail {...props} cart={c} func={f} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
