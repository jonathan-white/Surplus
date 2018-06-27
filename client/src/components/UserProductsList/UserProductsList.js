import React from "react";
import { Row } from 'react-materialize'
import Product from '../Product';
import "./UserProductsList.css";

const ProductsList = props => (
  <div>
    <Row>
      <h4>Your Products</h4>
    </Row>
    <Row className="productslist">
      {props.products.map(product => (
          <Product key={product._id} product={product} />
      ))}
    </Row>
  </div>
);

export default ProductsList;
