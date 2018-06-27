import React, { Component } from 'react';
import { Row, Col } from 'react-materialize'
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

class ShoppingCart extends Component {
	constructor(props){
		super(props);
		this.state = {

        }
        console.log('yayyy')
	}

  render() {
    return (   
        <Row>
            <Col s={8}>
                <Cart />
            </Col>
            <Col s={4}>
                <Checkout />
            </Col>
        </Row>
    );
  }
}

export default ShoppingCart;
