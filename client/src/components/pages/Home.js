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
			productsGeneral: null,
			productsFurniture: null,
			productsElectronics: null,
			productsApparel: null,
			productsOffice: null,
    }
	};

	componentDidMount = () => {
		API.getProductsForCategory('Furniture')
		.then(results=> this.setState({ productsFurniture: results.data }))
		.catch(err => console.log(err));

		API.getProductsForCategory('Electronics')
		.then(results=> this.setState({ productsElectronics: results.data }))
		.catch(err => console.log(err));

		API.getProductsForCategory('Apparel')
		.then(results=> this.setState({ productsApparel: results.data }))
		.catch(err => console.log(err));

		API.getProductsForCategory('Office')
		.then(results=> this.setState({ productsOffice: results.data }))
		.catch(err => console.log(err));

		API.getProductsForCategory('General')
		.then(results=> this.setState({ productsGeneral: results.data }))
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
					<MarketplaceProductList products={this.state.productsFurniture}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="electronics">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_electronics.jpg"
					/>
					<h5 className="section-header">Electronics</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsElectronics}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="apparel">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_apparel.jpg"
					/>
					<h5 className="section-header">Apparel</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsApparel}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="office">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_office.jpg"
					/>
					<h5 className="section-header">Office Supplies</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsOffice}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="general">&nbsp;</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_general.jpg"
					/>
					<h5 className="section-header">General</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsGeneral}
						handleAddToCart={this.props.handleAddToCart}/>
				</div>
      </div>
    );
  };
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
