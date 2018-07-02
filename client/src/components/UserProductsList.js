import React from "react";
import { Row } from 'react-materialize'
import UserProduct from './UserProduct';

const ProductsList = props => (
  <div>
    <Row>
      <h4>Products You Are Selling</h4>
    </Row>
    <Row className="productslist">
      {props.products.map(product => (
        <UserProduct
          key={product._id}
          product={product}
          handleProductDelete={props.handleProductDelete}
        />
      ))}
    </Row>
  </div>
);

export default ProductsList;
