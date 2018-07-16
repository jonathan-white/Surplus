import React, { Component } from 'react';
import API from "../../utils/API";

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: this.props.productId,
      product: {},
      rating: 4
    }
  };

  componentDidMount = () => {
    API.getProduct(this.state.productId)
    .then(res => this.setState({ product: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    const { title, description, price, quantity, img_cloud, ratings } = this.state.product;
    return (
      <div className="product-item">
        <div className="product-left">
          <div className="product-title">
            <h3>{title}</h3>
          </div>
          <div className="product-img">
            <img src={img_cloud} alt={title} />
          </div>
        </div>
        <div className="product-right">
          <h5>Description:</h5>
          <p>{description}</p>
        </div>
        </div>
    );
  };
};

export default Product;
