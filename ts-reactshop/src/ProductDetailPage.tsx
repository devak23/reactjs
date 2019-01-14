import React, { Component, Fragment } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductData';

// key thing is we are going to use RouteComponentProps to access the id parameter in
// the path. RouteComponentProps only allows us to have Route parameters of type
// string or undefined
type Props = RouteComponentProps<{ id: string }>;

interface IState {
  product?: IProduct;
  added: boolean;
}

class ProductDetailPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      added: false
    };
  }

  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const product = products.filter(p => p.id === id)[0];
      this.setState({ product });
    }
  }

  private handleAddClick = () => {
    this.setState({ added: true });
  };

  private navAwayMessage = () => 'Are you sure you want to leave without adding the product?';

  private getPrice(product: IProduct) {
    if (!product) {
      console.log('product is null');
      return null;
    }
    const price = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(product.price);
    return price;
  }

  public render() {
    const product = this.state.product;
    return (
      <div className='page-container'>
        <Prompt when={!this.state.added} message={this.navAwayMessage} />
        {product && (
          <Fragment>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className='product-price'>{this.getPrice(product)}</p>
            <button onClick={this.handleAddClick}>Add to Cart</button>
          </Fragment>
        )}
        {!product && <h2>Product Not found!</h2>}
      </div>
    );

    //React.Fragment is used in the true part of the ternary because each part of a
    // ternary can only have a single parent and React.Fragment is a mechanism for
    // achieving this, without rendering something like a div tag that is not
    // really needed
  }
}

export default ProductDetailPage;
