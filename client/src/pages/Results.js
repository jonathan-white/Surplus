import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import API from "../utils/API";
import MarketplaceProduct from '../components/MarketplaceProduct';

class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }
  componentDidMount() {
    const queryTerm = this.props.location.search.split("=")[1];
    this.setState({query: queryTerm});
    this.runSearch(queryTerm);
  }

  runSearch = (query) => {
    API.searchFor(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="results-container">
        {this.state.results.map(product =>
          <MarketplaceProduct product={product} key={product._id} />)
        }
      </div>
    )
  }
}

export default withRouter(SearchResults);
