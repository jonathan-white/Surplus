import React, { Component } from 'react';
import CartTotal from '../CartTotal';
import CartItem from '../CartItem';
// import * as f from '../../constants/functions';

// Presentational Component
class Cart extends Component {
    constructor(props) {
		super(props);		
    }
    
    render() {
        const { shoppingCart, activeClass} = this.props;

        return (
            <div className="row">
                <h5 className="page-title">Shopping Cart</h5>
                <div className="row">
                    <div className="col s8">
                        {shoppingCart.length
                            ?	shoppingCart.map((cartItem, index) =>
                                <CartItem
                                    cartItem={cartItem}
                                    key={index}
                                    index={index}
                                />)
                            : <div>No Items in Shopping Cart</div>
                        }
                    </div>
                    <div className="col s4">
                        <CartTotal
                            classToApply={activeClass}
                            stage={"cart"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;