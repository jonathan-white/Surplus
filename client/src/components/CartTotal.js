import React, { Component } from "react";
import PropTypes from 'prop-types';
import dropin from 'braintree-web-drop-in';
import * as routes from '../constants/routes';

class CartTotal extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // const props = this.props;
		const { store } = this.context;
		const state = store.getState();

    // const orderTotal = state.orderTotal;

    const button = document.querySelector('#submit-button');
    if(button) {
      dropin.create({
        authorization: process.env.REACT_APP_BT_SANDBOX_TOKEN_KEY,
        container: '#dropin-container',
        paypal: {
          flow: 'checkout',
          amount: '10.00',
          currency: 'USD'
        }
      },function(createErr,instance){
        if(createErr) {
          console.log('Error While Creating Payment:',createErr);
        } else {
          console.log('Payment Instance:',instance);
          button.addEventListener('click',function(){
            console.log('Payment button clicked');
            instance.requestPaymentMethod(function(requestPaymentMethodErr,payload){
              console.log('payment error:',requestPaymentMethodErr);
              console.log('payment Nonce:',payload.nonce);
              // Submit payload.nonce to your server
            });
          });
        }
      });
    }

    return (
        <div className={`checkoutBox ${this.props.classToApply}`}>
          <div className="totals-item">
            <span className="total-label">Items ({state.length}):</span>
            <span className="total-value">$0.00</span>
          </div>
          <div className="totals-item">
            <span className="total-label">Shipping:</span>
            <span className="total-value">$0.00</span>
          </div>
          <hr />
          <div className="totals-item total-type-subtotal">
            <span className="total-label">Subtotal:</span>
            <span className="total-value">$0.00</span>
          </div>
          <div className="totals-item">
            <span className="total-label">Estimated tax:</span>
            <span className="total-value">$0.00</span>
          </div>
          <div className="totals-item total-type-grandtotal">
            <span className="total-label">Order Total:</span>
            <span className="total-value">$0.00</span>
          </div>
          {this.props.stage === "checkout" && (
            <div>
              <div id="dropin-container"></div>
              <button id="submit-button">Request payment method</button>
            </div>
          )}
          {this.props.stage === "cart" && (
            <div>
              <div className="checkout-now">
                <a href={routes.CHECKOUT} className="btn-checkout">
                  <i className="fas fa-lock"></i>
                  {"  "}
                  Checkout Now
                </a>
              </div>
            </div>
          )}
        </div>
    );
  };
};
CartTotal.contextTypes = {
  store: PropTypes.object
};

export default CartTotal;
