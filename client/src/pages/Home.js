import React, { Component } from 'react';
import MarketProductList from "../components/MarketProductList";
import Favorites from "../components/Favorites";
import Companies from "../components/Companies";
import API from "../utils/API"

import withAuthorization from '../components/withAuthorization';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
      products: [],
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
        <Favorites/>
				<MarketProductList products={this.state.products} addToCard={this.props.addToCard}/>
        <Companies/>
      </div>
    );
  };
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
