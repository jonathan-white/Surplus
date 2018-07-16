import React, { Component } from 'react';
import { ProductsList } from "../MarketplaceProduct";
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
    API.getAllProducts()
  		.then(results=> this.setState({ products: results.data }))
  		.catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
				<div className="container">
					<h5 className="section-header">All Products</h5>
					<hr />
					<ProductsList products={this.state.products}/>
				</div>
      </div>
    );
  };
};

export default AllProducts;
