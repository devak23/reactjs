import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import Header from './Header';

interface IState {
  loggedIn: boolean;
}

class Routes extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  render() {
    const loggedIn = this.state.loggedIn;

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/products' component={ProductsPage} />
            <Route exact path='/products/:id' component={ProductDetailPage} />
            <Route path='/admin'>{loggedIn ? <AdminPage /> : <Redirect to='/login' />}</Route>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path=''>
              <Redirect to='/products' />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
