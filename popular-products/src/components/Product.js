import React, { Component } from "react";

class Product extends Component {
  render() {
    const {
      id,
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = this.props;

    return (
      <div className="item" key={id}>
        <div className="image">
          <img src={productImageUrl} alt="" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img src={submitterAvatarUrl} className="ui avatar image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
