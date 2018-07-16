import React, { Component } from 'react';
import { ProductsList } from "../MarketplaceProduct";
import { Parallax } from 'react-materialize';
import HeroSlider from "../HeroSlider";
import API from "../../utils/API";

class Landing extends Component {
	constructor(props){
		super(props);
		this.state = {
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
					<a name="furniture">{' '}</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_furniture.jpg"
					/>
					<h5 className="section-header">Furniture</h5>
					<hr />
					<ProductsList
						products={this.state.furnitureProducts}
					/>
					<a name="electronics">{' '}</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_electronics.jpg"
					/>
					<h5 className="section-header">Electronics</h5>
					<hr />
					<ProductsList
						products={this.state.electronicProducts}
					/>
					<a name="apparel">{' '}</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_apparel.jpg"
					/>
					<h5 className="section-header">Apparel</h5>
					<hr />
					<ProductsList
						products={this.state.apparelProducts}
					/>
					<a name="office">{' '}</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_office.jpg"
					/>
					<h5 className="section-header">Office Supplies</h5>
					<hr />
					<ProductsList
						products={this.state.officeProducts}
					/>
					<a name="general">{' '}</a>
					<Parallax
						className="imageSize h100"
						imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/section_general.jpg"
					/>
					<h5 className="section-header">General</h5>
					<hr />
					<ProductsList
						products={this.state.generalProducts}
					/>
				</div>
      </div>
    );
  };
};

export default Landing;
