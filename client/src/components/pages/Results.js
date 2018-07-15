import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import API from "../../utils/API";
import { MarketplaceProductList } from '../MarketplaceProduct';
import moment from "moment";

class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: null,
    };
  }
  componentDidMount() {
    this.runSearch(this.props.location.search.split("=")[1]);
  }

  runSearch = (query) => {
    console.log('Running a search for:',query);
    API.searchFor(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const currentTime = moment();
    return(
      <div className="results-container">
        <MarketplaceProductList products={this.state.results} key={currentTime} />
      </div>
    )
  }
}

export default withRouter(SearchResults);
