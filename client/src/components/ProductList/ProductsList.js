import React from "react";
import { Row } from 'react-materialize'
import Product from '../Product';

const ProductsList = props => (
  <div>
    <Row>
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
    <Row>
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
    <Row>
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
  </div>
);

export default ProductsList;
