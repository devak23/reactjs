import React, { SFC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/products' component={ProductsPage} />
        <Route path='/admin' component={AdminPage} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
