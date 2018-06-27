import React from "react";
import { Row } from 'react-materialize'
import Product from '../Product';

const MarketProductList = props => (
  <div>
    <Row className="productslist">
      {props.products.map(product => (
          <Product key={product._id} product={product} />
      ))}
    </Row>
  </div>
);

export default MarketProductList;
