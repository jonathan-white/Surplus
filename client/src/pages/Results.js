import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import API from "../utils/API";

import AuthUserContext from '../components/AuthUserContext';
import * as routes from '../constants/routes';
import { auth } from '../firebase';

const SearchPage = ({location}) => (
  <AuthUserContext.Consumer>
    <SearchResults location={location} />
  </AuthUserContext.Consumer>
);

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
    console.log(queryTerm);
    this.setState({query: queryTerm});
    this.runSearch(queryTerm);
  }

  runSearch = (query) => {
    console.log('inside runSearch on Results page before API.searchFor');
    API.searchFor(query)
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>Results will go here</div>
    )
  }
}

export default withRouter(SearchResults);
