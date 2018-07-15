import React, { Component } from 'react';
import { MarketplaceProductList } from "../MarketplaceProduct";
import API from "../../utils/API";

class AllProducts extends Component {
	constructor(props){
		super(props);
		this.state = {
			...this.props.cartData,
      products: null,
    }
	};

  componentDidMount = () => {
    API.getProducts()
  		.then(results=> this.setState({ products: results.data }))
  		.catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
				<div className="container">
					<h5 className="section-header">All Products</h5>
					<hr />
					<MarketplaceProductList products={this.state.products}
						handleAddToCart={this.props.handleAddToCart}/>
				</div>
      </div>
    );
  };
};

export default AllProducts;
