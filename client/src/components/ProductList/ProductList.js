import React from "react";
import { Row } from 'react-materialize'
import "./ProductList.css";
import Product from '../Product';

const ProductList = props => (
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

export default ProductList;
