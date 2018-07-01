import React from "react";
import { Row } from 'react-materialize'
import MarketplaceProduct from './MarketplaceProduct';

const MarketProductList = props => (
  <div>
    <Row className="productslist">
      {props.products.map(product => (
        <MarketplaceProduct key={product._id} product={product} addToCard={props.addToCard}/>
      ))}
    </Row>
  </div>
);

export default MarketProductList;
