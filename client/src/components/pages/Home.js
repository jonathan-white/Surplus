import React, { Component } from 'react';
import { MarketplaceProductList } from "../MarketplaceProduct";
import { Parallax } from 'react-materialize';
import HeroSlider from "../HeroSlider";
import API from "../../utils/API";

import withAuthorization from '../withAuthorization';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			...this.props.cartData,
			generalProducts: null,
			furnitureProducts: null,
			electronicProducts: null,
			apparelProducts: null,
			officeProducts: null,
    }
	};

	componentDidMount = () => {
		API.getProducts()
			.then(results=> this.setState(results.data))
			.catch(err => console.log(err));
		//
		// API.getProductsForCategory('Furniture')
		// .then(results=> this.setState({ furnitureProducts: results.data }))
		// .catch(err => console.log(err));
		// 
		// API.getProductsForCategory('Electronics')
		// .then(results=> this.setState({ electronicProducts: results.data }))
		// .catch(err => console.log(err));
		//
		// API.getProductsForCategory('Apparel')
		// .then(results=> this.setState({ apparelProducts: results.data }))
		// .catch(err => console.log(err));
		//
		// API.getProductsForCategory('Office')
		// .then(results=> this.setState({ officeProducts: results.data }))
		// .catch(err => console.log(err));
		//
		// API.getProductsForCategory('General')
		// .then(results=> this.setState({ generalProducts: results.data }))
		// .catch(err => console.log(err));
  };

  render() {
    return (
			<div className="App">
        <HeroSlider/>
				<div className="container">
					<a name="furniture">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_furniture.jpg"
					/>
					<h5 className="section-header">Furniture</h5>
					<hr />
					<MarketplaceProductList products={this.state.furnitureProducts}
						onAddToCart={this.props.handleAddToCart}/>
					<a name="electronics">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_electronics.jpg"
					/>
					<h5 className="section-header">Electronics</h5>
					<hr />
					<MarketplaceProductList products={this.state.electronicProducts}
						onAddToCart={this.props.handleAddToCart}/>
					<a name="apparel">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_apparel.jpg"
					/>
					<h5 className="section-header">Apparel</h5>
					<hr />
					<MarketplaceProductList products={this.state.apparelProducts}
						onAddToCart={this.props.handleAddToCart}/>
					<a name="office">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_office.jpg"
					/>
					<h5 className="section-header">Office Supplies</h5>
					<hr />
					<MarketplaceProductList products={this.state.officeProducts}
						onAddToCart={this.props.handleAddToCart}/>
					<a name="general">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_general.jpg"
					/>
					<h5 className="section-header">General</h5>
					<hr />
					<MarketplaceProductList products={this.state.generalProducts}
						onAddToCart={this.props.handleAddToCart}/>
				</div>
      </div>
    );
  };
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
