import React, { Component } from 'react';
import { Input } from "react-materialize";
import OrderItem from "../OrderItem";
import CartTotal from "../CartTotal";
import States from "../../utils/states.json";
import Countries from "../../utils/countries.json";

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

  componentDidMount = () => {
    window.addEventListener('scroll', (event) => {
      const scrollPosY = window.pageYOffset | document.body.scrollTop;
      let classToApply = "";
      if(scrollPosY > 50) {
        classToApply = "checkoutBox_scrolled";
      } else {
        classToApply = ""
      }
      this.setState({
        activeClass: classToApply
      })
    });
  }

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
      <div className="row">
				<h5 className="page-title">Checkout</h5>
				<div className="row">
					<div className="col s8">
            <div className="row section-container billing-address">
              <div><h5>Billing Address</h5></div>
              <form>
                <Input s={12}	type="text" onChange={this.handleInputChange}
                  label="Email Address" value={this.state.email} name="email"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="First Name"	value={this.state.billing_firstName}	name="billing_firstName"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Last Name"	value={this.state.billing_lastName}	name="billing_lastName"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Address Line 1 *"	value={this.state.billing_address1}	name="billing_address1"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Address Line 2 *"	value={this.state.billing_address2}	name="billing_address2"/>
    						<Input s={6} type='select' label="Country" name="billing_country"
    							onChange={this.handleInputChange} defaultValue="USA">
                  {Countries && Countries.map(country => (
                    <option value={country.abbr} key={`billingCountry-${country.abbr}`}>{country.name}</option>
                  ))}
    						</Input>
                <Input s={6} type='select' label="State" name="billing_state"
                  onChange={this.handleInputChange} defaultValue="OH">
                  {States && States.map(state => (
                    <option value={state.abbr} key={`billingState-${state.abbr}`}>{state.name}</option>
                  ))}
                </Input>
                <Input s={6}	type="text" onChange={this.handleInputChange}
                  label="City" value={this.state.billing_city} name="billing_city"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Zip Code"	value={this.state.billing_zipcode}	name="billing_zipcode"/>
    					</form>
            </div>
            <div className="row section-container shipping-address">
              <div>
                <h5>Shipping Address</h5>
              </div>
              <div>
                <h6>
                  <Input name={this.state.sameAddress} type='checkbox' value='1'
                    label='Shipping address is the same as my billing address.'
                    onChange={this.handleSameAddress}
                  className='filled-in' />
                </h6>
              </div>
              <form>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="First Name"	value={this.state.shipping_firstName}	name="shipping_firstName"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Last Name"	value={this.state.shipping_lastName}	name="shipping_lastName"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Address Line 1 *"	value={this.state.shipping_address1}	name="shipping_address1"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Address Line 2 *"	value={this.state.shipping_address2}	name="shipping_address2"/>
    						<Input s={6} type='select' label="Country" name="shipping_country"
    							onChange={this.handleInputChange} defaultValue="USA">
                  {Countries && Countries.map(country => (
                    <option value={country.abbr} key={`shippingCountry-${country.abbr}`}>{country.name}</option>
                  ))}
    						</Input>
                <Input s={6} type='select' label="State" name="shipping_state"
                  onChange={this.handleInputChange} defaultValue="OH">
                  {States && States.map(state => (
                    <option value={state.abbr} key={`shippingState-${state.abbr}`}>{state.name}</option>
                  ))}
                </Input>
                <Input s={6}	type="text" onChange={this.handleInputChange}
                  label="City" value={this.state.shipping_city} name="shipping_city"/>
                <Input s={6} type="text" onChange={this.handleInputChange}
                  label="Zip Code"	value={this.state.shipping_zipcode}	name="shipping_zipcode"/>
    					</form>
            </div>
            {/* <div className="row section-container payment-options">
              <div>
                <h5>Payment Options</h5>
              </div>
              <div id="dropin-container2"></div>
              <div id="pm-button"></div>
            </div> */}
            <div className="row section-container review-order">
              <div>
                <h5>Review Order</h5>
              </div>
              {this.props.shoppingCart.length
  							?	this.props.shoppingCart.map((cartItem, index) =>
  								<OrderItem
  									product={cartItem}
  									key={index}
  									index={index}
  									handleRemoveFromCart={this.props.handleRemoveFromCart} />)
  							: <div>No Items in Cart</div>
  						}
            </div>
					</div>
					<div className="col s4">
						<CartTotal classToApply={this.state.activeClass}
              cartSize={this.props.shoppingCart.length} stage={this.props.stage} />
					</div>
				</div>
			</div>
    );
  }
}

export default Checkout;
