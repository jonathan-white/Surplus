import React, { Component } from 'react';
import { MarketplaceProductList } from "../components/MarketplaceProduct";
import { Parallax, Carousel } from 'react-materialize';
import HeroSlider from "../components/HeroSlider";
import API from "../utils/API";

import withAuthorization from '../components/withAuthorization';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			...this.props.cartData,
			products: null,
			productsGeneral: null,
			productsFurniture: null,
			productsElectronics: null,
			productsApparel: null,
			productsOffice: null,
    }
	};

	componentDidMount = () => {
		API.getProducts()
			.then(results=> this.setState({ products: results.data }))
			.catch(err => console.log(err));

		API.getProductsForCategory('General')
			.then(results=> this.setState({ productsGeneral: results.data }))
			.catch(err => console.log(err));

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
  };

  render() {
    return (
      <div className="App">
        <HeroSlider/>
				<div className="container">
					<a name="furniture">&nbsp;</a>
					<h5 className="section-header">Furniture</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsFurniture}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="electronics">&nbsp;</a>
					<h5 className="section-header">Electronics</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsElectronics}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="apparel">&nbsp;</a>
					<h5 className="section-header">Apparel</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsApparel}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="office">&nbsp;</a>
					<h5 className="section-header">Office Supplies</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsOffice}
						handleAddToCart={this.props.handleAddToCart}/>
					<a name="general">&nbsp;</a>
					<h5 className="section-header">General</h5>
					<hr />
					<MarketplaceProductList products={this.state.productsGeneral}
						handleAddToCart={this.props.handleAddToCart}/>
				</div>
				<Parallax
					className="imageSize s200"
					imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/officeBuilding.jpg"
				/>
				<div className="section white">
					<div className="row container">
						<Carousel images={[
		            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/chase.jpg',
		            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/ibm.jpg',
		            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/clevelandClinic.jpg',
		            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/mercedes.jpg',
		            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/LAfitness.jpg'
						]} />
					</div>
				</div>
				<Parallax
					className="imageSize s200"
					imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/inventoryManage.jpg"
				/>
      </div>
    );
  };
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
