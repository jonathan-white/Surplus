import React from 'react';
import * as routes from '../../constants/routes';

const NoMatch = () => (
  <div className="pageNotFound">
    <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/lost-dog.jpg" alt="lost dog"/>
    <a href={routes.LANDING}>
      <h1>Sorry</h1>
      <h4>we couldn't find that page</h4>
      <h5>Try searcing or navigate to <span className="link">Surplus Market's home page</span></h5>
    </a>
  </div>
);

export default NoMatch;
