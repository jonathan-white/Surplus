import React, { Component } from 'react';
import { MarketplaceProductList } from "../components/MarketplaceProduct";
import { Parallax, Carousel } from 'react-materialize';
import HeroSlider from "../components/HeroSlider";
import API from "../utils/API";

class Landing extends Component {
	constructor(props){
		super(props);
		this.state = {
			... this.props.cartData,
      products: null,
    }
	};

  componentDidMount = () => {
		this.loadProducts();
  };

	loadProducts = () => {
		API.getProducts()
      .then(results=> this.setState({ products: results.data }))
      .catch(err => console.log(err));
	}

  render() {
    return (
      <div className="App">
        <HeroSlider/>
				<MarketplaceProductList products={this.state.products}
					handleAddToCart={this.props.handleAddToCart}/>
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

export default Landing;
