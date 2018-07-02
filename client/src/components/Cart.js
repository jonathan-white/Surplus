import React from "react";
import { Input } from "react-materialize/lib";

const Cart = (props) => (
  <div className="row cart-item">
    <div className="col s3">
      <img className="product-image" src={props.product.img_cloud} alt={props.product.title}/>
    </div>
    <div className="col s9">
      <div className="row top-half">
        <div className="col s9">
          <div className="item-title">{props.product.title}</div>
          <div className="item-desc"><span className="item-desc-label">Description:</span> {props.product.description}</div>
          <div className="item-num"><span className="item-num-label">Item Number:</span> {props.product._id}</div>
        </div>
        <div className="col s3">
          <div className="row item-price">${props.product.price}</div>
          <div>
            <Input type='select' label='Quantity'>
              <option value="1" defaultValue>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </div>
        </div>
      </div>
      <div className="row bottom-half">
        <div className="item-alert">
          <div>{props.product.quantity === 1 && `Only 1 Left!`}</div>
        </div>
        <div className="item-buttons">
          <button className="btn-item" onClick={() => props.handleRemoveItem(props.index)}>Remove</button>
          <button className="btn-item">Save For Later</button>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
