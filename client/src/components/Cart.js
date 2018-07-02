import React from "react";
import { Input } from "react-materialize/lib";

const Cart = (props) => (
  <div className="cart-item">
    <div className="row">
      <div className="col s3">
        <img className="product-image" src={props.product.img_cloud} alt="Product Img"/>
      </div>
      <div className="col s9">
        <div className="row top-half">
          <div className="col s9">
            <div>{props.product.title}</div>
            <div>Description: {props.product.description}</div>
            <div>Item Number: {props.product._id}</div>
          </div>
          <div className="col s3">
            <div className="row">${props.product.price}</div>
            <div className="row">
              <Input s={12} type='select' label='Quantity'>
                <option value="1" defaultValue>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </div>
          </div>
        </div>
        <div className="row bottom-half">
          <div className="item-alert">
            <div>Only 1 Left!</div>
          </div>
          <div className="item-buttons">
            <button className="btn-flat">Remove</button>
            <button className="btn-flat">Save For Later</button>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col s4">
      <img className="product-image" src={props.product.img_cloud} alt="Product Img"/>
          </div>
          <div className="col">
          <span className="product-title">{props.product.title}</span>
          </div>
          </div>
          <div className="row">
          <div className="product-description">
            <span>{props.product.description}</span>
          </div>
          </div>
          <div className="row">
          <div className="price-qty-row">
            <div className="price">{props.product.price}</div>
            <div className="unit-qty">
          <div className="unit">/unit</div>
          <div>Stock: <span className="quantity">{props.product.quantity}</span></div>
            </div>
          </div>
        </div> */}
  </div>
);

export default Cart;
