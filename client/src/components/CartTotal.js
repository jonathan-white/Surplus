import React, { Component } from "react";
import dropin from 'braintree-web-drop-in';
import * as routes from '../constants/routes';

class Checkout extends Component {
  render() {
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
        button.addEventListener('click',function(){
          instance.requestPaymentMethod(function(requestPaymentMethodErr,payload){
            // Submit payload.nonce to your server
          });
        });
      });
    }

    return (
        <div className={`checkoutBox ${this.props.classToApply}`}>
          <div className="totals-item">
            <span className="total-label">Items ({this.props.cartSize}):</span>
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
              <div id="submit-button"></div>
            </div>
          )}
          {this.props.stage === "cart" && (
            <div>
              <div className="checkout-now">
                <a href={routes.CHECKOUT} className="btn-checkout">
                  <i class="fas fa-lock"></i>
                  {"  "}
                  Checkout Now
                </a>
              </div>
            </div>
          )}
        </div>
    )
  }
}

export default Checkout;
