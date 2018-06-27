import React from "react";
import { Row } from 'react-materialize'
import Product from '../Product';
import "./UserProductsList.css";

const ProductsList = props => (
  <div>
    <Row>
      <h3>Your Products</h3>
    </Row>
    <Row className="user_productlist">
      {props.products.map(product => (
          <Product key={product._id} product={product} />
      ))}
    </Row>
  </div>
);

export default ProductsList;
