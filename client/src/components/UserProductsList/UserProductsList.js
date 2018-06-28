import React from "react";
import { Row } from 'react-materialize'
import ProductCard from '../Products';
import "./UserProductsList.css";

const ProductsList = props => (
  <div>
    <Row>
      <h4>Your Products</h4>
    </Row>
    <Row className="productslist">
      {props.products.map(product => (
        <ProductCard key={product._id} product={product} handleProductDelete={props.handleProductDelete} />
      ))}
    </Row>
  </div>
);

export default ProductsList;
