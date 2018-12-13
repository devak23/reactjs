import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    console.log(this.props.products);

    const products = this.props.products.map(p => (
      <Product
        id={p.id}
        key={p.id}
        title={p.title}
        description={p.description}
        url={p.url}
        votes={p.votes}
        submitterAvatarUrl={p.submitterAvatarUrl}
        productImageUrl={p.productImageUrl}
      />
    ));
    return <div className="ui unstackable items">{products}</div>;
  }
}

export default ProductList;
