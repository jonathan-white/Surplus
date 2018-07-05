import React, { Component } from "react";
import dropin from 'braintree-web-drop-in';

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
        <div className="checkoutBox">
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
          <div id="dropin-container"></div>
          <div id="submit-button"></div>
        </div>
    )
  }
}

export default Checkout;
