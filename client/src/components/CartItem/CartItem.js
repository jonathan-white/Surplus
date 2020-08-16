import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';
import * as f from '../../constants/functions';

// Semi-Presentational Component
class CartItem extends Component {
    constructor(props) {
		super(props);		
    }

    componentDidMount = () => {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
        );
    }

    componentWillUnmount() {
		this.unsubscribe();
	}
    
    render() {
        const { store } = this.context;
        const { cartItem, index } = this.props;
        const state = store.getState();

        return (
            <div className="row cart-item">
                <div className="col s3">
                    <img className="product-image" src={cartItem.product.img_cloud} alt={cartItem.product.title}/>
                </div>
                <div className="col s9">
                    <div className="row top-half">
                        <div className="col s9">
                            <div className="item-title">{cartItem.product.title}</div>
                            <div className="item-desc"><span className="item-label">Description:</span> {cartItem.product.description}</div>
                            <div className="item-num"><span className="item-label">Item Number:</span> {cartItem.product._id}</div>
                        </div>
                        <div className="col s3">
                            <div className="row item-price">${f.formatMoney(state[index].cost,2,'.',',')}</div>
                            <div>
                                <Input
                                    type='select'
                                    label='Quantity'
                                    defaultValue={state[index].qty}
                                    onChange={(event) => {
                                        store.dispatch({
                                            type: 'UPDATE_QUANTITY',
                                            index: index,
                                            product: cartItem.product,
                                            qty: parseInt(event.target.value, 10)
                                    });
                                    localStorage.setItem('cart',JSON.stringify(store.getState()));
                                }}>
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
                            {cartItem.product.quantity === 1 && `Only 1 Left!`}
                        </div>
                        <div className="item-buttons">
                            <button
                                className="btn-item"
                                onClick={() =>{
                                    store.dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        index: index
                                    });
                                    localStorage.setItem('cart',JSON.stringify(store.getState()));
                                }}
                            >
                                Remove
                            </button>
                            <button className="btn-item">Save For Later</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
CartItem.contextTypes = {
    store: PropTypes.object
};


export default CartItem;