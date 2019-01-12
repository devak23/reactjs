import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IProduct, products } from './ProductData';
import './ProductsPage.css';

interface IState {
  products: IProduct[];
}

class ProductsPage extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: []
    };
  }

  public componentDidMount() {
    this.setState({ products });
  }

  public render() {
    const products = this.state.products.map(prod => (
      <li key={prod.id} className='product-list-item'>
        <Link to={`/products/${prod.id}`}>{prod.name}</Link>
      </li>
    ));

    return (
      <div className='page-container'>
        <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
        <ul className='product-list'>{products}</ul>
      </div>
    );
  }
}

export default ProductsPage;
