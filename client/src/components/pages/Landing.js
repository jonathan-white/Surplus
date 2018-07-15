import React, { Component } from 'react';
import { MarketplaceProductList } from "../MarketplaceProduct";
import { Parallax } from 'react-materialize';
import HeroSlider from "../HeroSlider";
import API from "../../utils/API";

class Landing extends Component {
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
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="electronics">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_electronics.jpg"
					/>
					<h5 className="section-header">Electronics</h5>
					<hr />
					<MarketplaceProductList products={this.state.electronicProducts}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="apparel">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_apparel.jpg"
					/>
					<h5 className="section-header">Apparel</h5>
					<hr />
					<MarketplaceProductList products={this.state.apparelProducts}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="office">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_office.jpg"
					/>
					<h5 className="section-header">Office Supplies</h5>
					<hr />
					<MarketplaceProductList products={this.state.officeProducts}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="general">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_general.jpg"
					/>
					<h5 className="section-header">General</h5>
					<hr />
					<MarketplaceProductList products={this.state.generalProducts}
						handleAddToCart={this.props.handleAddToCart}/>
				</div>
      </div>
    );
  };
};

export default Landing;
