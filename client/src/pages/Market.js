import React, { Component } from 'react';
import MarketProductList from "../components/MarketProductList";
import Favorites from "../components/Favorites";
import Companies from "../components/Companies";
import Search from "../components/Search";
import API from "../utils/API"

class Market extends Component {
	constructor(props){
		super(props);
		this.state = {
      products: [],
    }
	};

  componentWillMount(){
    this.pageLoadData();
  };

  pageLoadData = () => {
    API.getProducts()
      .then(results=> this.setState({ products: results.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Search/>
        <Favorites/>
        <Companies/>
        <MarketProductList products={this.state.products}/>
      </div>
    );
  };
};

export default Market;