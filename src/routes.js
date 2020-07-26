import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, ShoppingCart, ProductDetail, Checkout } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/:id" component={ProductDetail} />
      { /* <Route path="/" component={} /> */ }
    </Switch>
  </BrowserRouter>
);
export default Routes;
