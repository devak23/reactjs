import React, { SFC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import Header from './Header';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/products' component={ProductsPage} />
        <Route exact path='/products/:id' component={ProductDetailPage} />
        <Route path='/admin' component={AdminPage} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
