import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from "react-materialize";
import CartTotal from "../CartTotal";
import States from "../../utils/states.json";
import Countries from "../../utils/countries.json";
import * as f from '../../constants/functions';

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
	  email: "",
	  billing_firstName: "",
	  billing_lastName: "",
	  billing_address1: "",
	  billing_address2: "",
	  billing_country: "USA",
	  billing_state: "OH",
	  billing_city: "",
	  billing_zipcode: "",
	  billing_phone: "",
	  shipping_firstName: "",
	  shipping_lastName: "",
	  shipping_address1: "",
	  shipping_address2: "",
	  shipping_country: "",
	  shipping_state: "",
	  shipping_city: "",
	  shipping_zipcode: "",
	  shipping_phone: "",
	  activeClass: "",
	  sameAddress: false,
		}
	};

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({ [name]: value });
  };

  handleSameAddress = () => {
    this.setState((prevState) => ({
      sameAddress: !prevState.sameAddress
    }));
  };

  render() {

    return (
      <CheckoutForm
				{...this.state}
				handleInputChange={this.handleInputChange}
				handleSameAddress={this.handleSameAddress}
			/>
    );
  }
};

const CheckoutForm = ({
  handleInputChange,
	handleSameAddress,
	...props
}, { store }) => {
	const state = store.getState();

	return (
	<div className="row">
		<h5 className="page-title">Checkout</h5>
		<div className="row">
			<div className="col s8">
				<div className="row section-container billing-address">
					<div><h5>Billing Address</h5></div>
					<form>
						<Input s={12}	type="text" onChange={handleInputChange}
							label="Email Address" value={props.email} name="email"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="First Name"	value={props.billing_firstName}	name="billing_firstName"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Last Name"	value={props.billing_lastName}	name="billing_lastName"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Address Line 1 *"	value={props.billing_address1}	name="billing_address1"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Address Line 2 *"	value={props.billing_address2}	name="billing_address2"/>
						<Input s={6} type='select' label="Country" name="billing_country"
							onChange={handleInputChange} defaultValue="USA">
							{Countries && Countries.map(country => (
								<option value={country.abbr} key={`billingCountry-${country.abbr}`}>{country.name}</option>
							))}
						</Input>
						<Input s={6} type='select' label="State" name="billing_state"
							onChange={handleInputChange} defaultValue="OH">
							{States && States.map(state => (
								<option value={state.abbr} key={`billingState-${state.abbr}`}>{state.name}</option>
							))}
						</Input>
						<Input s={6}	type="text" onChange={handleInputChange}
							label="City" value={props.billing_city} name="billing_city"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Zip Code"	value={props.billing_zipcode}	name="billing_zipcode"/>
					</form>
				</div>
				<div className="row section-container shipping-address">
					<div>
						<h5>Shipping Address</h5>
					</div>
					<div>
						<h6>
							<Input name='sameAddress' type='checkbox' value="1"
								label='Shipping address is the same as my billing address.'
								onChange={handleSameAddress}
							className='filled-in' />
						</h6>
					</div>
					<form>
						<Input s={6} type="text" onChange={handleInputChange}
							label="First Name"	value={props.shipping_firstName}	name="shipping_firstName"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Last Name"	value={props.shipping_lastName}	name="shipping_lastName"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Address Line 1 *"	value={props.shipping_address1}	name="shipping_address1"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Address Line 2 *"	value={props.shipping_address2}	name="shipping_address2"/>
						<Input s={6} type='select' label="Country" name="shipping_country"
							onChange={handleInputChange} defaultValue="USA">
							{Countries && Countries.map(country => (
								<option value={country.abbr} key={`shippingCountry-${country.abbr}`}>{country.name}</option>
							))}
						</Input>
						<Input s={6} type='select' label="State" name="shipping_state"
							onChange={handleInputChange} defaultValue="OH">
							{States && States.map(state => (
								<option value={state.abbr} key={`shippingState-${state.abbr}`}>{state.name}</option>
							))}
						</Input>
						<Input s={6}	type="text" onChange={handleInputChange}
							label="City" value={props.shipping_city} name="shipping_city"/>
						<Input s={6} type="text" onChange={handleInputChange}
							label="Zip Code"	value={props.shipping_zipcode}	name="shipping_zipcode"/>
					</form>
				</div>
				<div className="row section-container review-order">
					<div>
						<h5>Review Order</h5>
					</div>
					{state.length
						?	state.map((cartItem, index) =>
							<OrderItem
								cartItem={cartItem}
								key={index}
								index={index}
							/>)
						: <div>No Items in Cart</div>
					}
				</div>
			</div>
			<div className="col s4">
				<CartTotal
					classToApply={'fixed-totals'}
					stage={'checkout'}
				/>
			</div>
		</div>
	</div>
)};
CheckoutForm.contextTypes = {
  store: PropTypes.object
};

const OrderItem = (props) => (
  <div className="row cart-item">
    <div className="col s3">
      <img className="product-image" src={props.cartItem.product.img_cloud} alt={props.cartItem.product.title}/>
    </div>
    <div className="col s9">
      <div className="row top-half">
        <div className="col s9">
          <div className="item-title">{props.cartItem.product.title}</div>
          <div className="item-desc"><span className="item-label">Description:</span> {props.cartItem.product.description}</div>
          <div className="item-num"><span className="item-label">Item Number:</span> {props.cartItem.product._id}</div>
          <div className="item-qty"><span className="item-label">Quantity:</span> {props.cartItem.qty}</div>
        </div>
        <div className="col s3">
          <div className="row item-price">${f.formatMoney(props.cartItem.cost,2,'.',',')}</div>
        </div>
      </div>
      <div className="row bottom-half">
        <div className="item-alert">
          {props.cartItem.product.quantity === 1 && `Only 1 Left!`}
        </div>
      </div>
    </div>
  </div>
);

export default Checkout;
