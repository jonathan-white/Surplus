import React, { Component } from 'react';
import { MarketplaceProductList } from "../components/MarketplaceProduct";
import { Parallax, Carousel } from 'react-materialize';
import HeroSlider from "../components/HeroSlider";
import Companies from "../components/Companies";
import API from "../utils/API"

import withAuthorization from '../components/withAuthorization';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
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
        <HeroSlider/>
				<MarketplaceProductList products={this.state.products} />
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
