import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, RouteComponentProps, Router } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import Header from './Header';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Routes.css';

interface IState {
  loggedIn: boolean;
}

class Routes extends Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  render() {
    const loggedIn = this.state.loggedIn;

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={500} classNames='animate'>
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const RoutesWrap: React.SFC = () => {
  return (
    <BrowserRouter>
      <Route component={Routes} />
    </BrowserRouter>
  );
};

export default RoutesWrap;
