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
    this.ChangeQuant = this.ChangeQuant.bind(this);
  }
  componentWillUnmount() {
    this.setLocalStorage();
  }
  setLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }
  addingToCart(item, quantity) {
    const arr = this.state.cart;
    const index = arr.findIndex((prod) => prod.id === item.id);
    if (index >= 0) {
      arr[index].quantity += 1;
    } else {
    arr.push(Object.assign({}, item, { quantity }));
    }
    this.setState(state=> ({ [state.cart]: arr }));
    this.setLocalStorage();
  }
  ChangeQuant(val, id) {
    const arr = this.state.cart;
    const index = arr.findIndex((prod) => prod.id === id);
    if (val > 0) {
       arr[index].quantity += 1;
        this.setState(state=> ({ [state.cart]: arr }));
    } else {
       arr[index].quantity -= 1;
      if (arr[index].quantity <= 0) {
        arr.splice(index,1)
      }
      this.setState(state=> ({ [state.cart]: arr }));
    }

    this.setLocalStorage();
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
    const f = {addingToCart:[this.addingToCart], ChangeQuant:[this.ChangeQuant]};
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} cart={c} func={f} />} />
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} cart={c} func={f} />} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/:id" render={(props) => <ProductDetail {...props} cart={c} func={f} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
