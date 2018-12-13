import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic renassaince actors delivered in just two weeks</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img src="" className="ui avatar image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
