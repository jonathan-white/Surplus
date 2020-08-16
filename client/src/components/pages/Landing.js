import React, { Component } from 'react';
import 'materialize-css'
import { Parallax } from 'react-materialize';
import HeroSlider from "../HeroSlider";
import { ProductsList } from "../MarketplaceProduct";
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
	.then(results=> {
		this.setState(results.data);
	})
	.catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <HeroSlider/>
			<div className="container">
				<Parallax
					className="imageSize h100"
					image={<img alt="" src={process.env.REACT_APP_STORAGE + 
						"/assets/section_furniture.jpg"}/>}
				/>
				<h5 name="furniture" className="section-header">Furniture</h5>
				<hr />
				<ProductsList products={this.state.furnitureProducts} />
				<Parallax
					className="imageSize h100"
					image={<img alt="" src={process.env.REACT_APP_STORAGE + 
						"/assets/section_electronics.jpg"}/>}
				/>
				<h5 className="section-header">Electronics</h5>
				<hr />
				<ProductsList products={this.state.electronicProducts} />
				
				<Parallax
					className="imageSize h100"
					image={<img alt="" src={process.env.REACT_APP_STORAGE + 
						"/assets/section_apparel.jpg"}/>}
				/>
				<h5 className="section-header">Apparel</h5>
				<hr />
				<ProductsList products={this.state.apparelProducts}	/>
				<Parallax
					className="imageSize h100"
					image={<img alt="" src={process.env.REACT_APP_STORAGE + 
						"/assets/section_office.jpg"}/>}
				/>
				<h5 className="section-header">Office Supplies</h5>
				<hr />
				<ProductsList products={this.state.officeProducts} />
				<Parallax
					className="imageSize h100"
					image={<img alt="" src={process.env.REACT_APP_STORAGE + 
						"/assets/section_general.jpg"}/>}
				/>
				<h5 className="section-header">General</h5>
				<hr />
				<ProductsList products={this.state.generalProducts} />
			</div>
      </div>
    );
  };
};

export default Landing;
