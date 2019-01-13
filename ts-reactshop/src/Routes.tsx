import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/products' component={ProductsPage} />
          <Route exact path='/products/:id' component={ProductDetailPage} />
          <Route path='/admin' component={AdminPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
