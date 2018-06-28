import React from "react";
import { Row } from 'react-materialize'
import ProductCard from '../Products';

const MarketProductList = props => (
  <div>
    <Row className="productslist">
      {props.products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Row>
  </div>
);

export default MarketProductList;
