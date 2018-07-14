import React from "react";
import { Input } from "react-materialize";

const OrderItem = (props) => (
  <div className="row cart-item">
    <div className="col s3">
      <img className="product-image" src={props.product.img_cloud} alt={props.product.title}/>
    </div>
    <div className="col s9">
      <div className="row top-half">
        <div className="col s9">
          <div className="item-title">{props.product.title}</div>
          <div className="item-desc"><span className="item-label">Description:</span> {props.product.description}</div>
          <div className="item-num"><span className="item-label">Item Number:</span> {props.product._id}</div>
          <div className="item-qty"><span className="item-label">Quantity:</span> 1</div>
        </div>
        <div className="col s3">
          <div className="row item-price">${props.product.price}</div>
        </div>
      </div>
      <div className="row bottom-half">
        <div className="item-alert">
          {props.product.quantity === 1 && `Only 1 Left!`}
        </div>
      </div>
    </div>
  </div>
);

export default OrderItem;
