import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductData';
import 'url-search-params-polyfill';
import './ProductsPage.css';

interface IState {
  products: IProduct[];
  searchTerm: string;
}

class ProductsPage extends Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      products: [],
      searchTerm: ''
    };
  }

  public componentDidMount() {
    this.setState({ products });
  }

  public static getDerivedStateFromProps(props: RouteComponentProps, state: IState) {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get('search') || '';
    return {
      products: state.products,
      searchTerm: search
    };
  }

  public render() {
    const { searchTerm } = this.state;
    const products = this.state.products.map(prod => {
      const notFound = !searchTerm || (searchTerm && prod.name.toLowerCase().indexOf(searchTerm) > -1);
      const productDiv = (
        <li key={prod.id} className='product-list-item'>
          <Link to={`/products/${prod.id}`}>{prod.name}</Link>
        </li>
      );
      return notFound ? productDiv : null;
    });

    return (
      <div className='page-container'>
        <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
        <ul className='product-list'>{products}</ul>
      </div>
    );
  }
}

export default ProductsPage;
