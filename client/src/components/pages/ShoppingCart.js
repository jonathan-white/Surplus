import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from "react-materialize";
import CartTotal from "../CartTotal";

// Container Component
class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeClass: "",
		}
	}

	componentDidMount = () => {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);

		window.addEventListener('scroll', (event) => {
			const scrollPosY = window.pageYOffset || document.body.scrollTop;
			const scrollBottom = document.body.offsetHeight - 600;
			let classToApply = "";
			if(scrollPosY > 50 && scrollPosY <= scrollBottom) {
				classToApply = "checkoutBox_scrolled";
				const elem = document.querySelector('.checkoutBox_scrolled');
				if(elem) {
					elem.style.top = '20px';
				}
			} else if (scrollPosY > scrollBottom) {
				classToApply = "checkoutBox_scroll_finished";
				const elem = document.querySelector('.checkoutBox_scroll_finished');
				if(elem) {
					elem.style.top = `${window.pageYOffset - 200}px`;
				}
			} else {
				classToApply = ""
			}
			this.setState({
				activeClass: classToApply
			})
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

  render() {
		// const props = this.props;
		const { store } = this.context;
		const state = store.getState();

    return (
      <Cart
				shoppingCart={state}
				activeClass={this.state.activeClass}
			/>
    );
  }
}
ShoppingCart.contextTypes = {
  store: PropTypes.object
};

// Presentational Component
const Cart = ({
	shoppingCart,
	activeClass
}) => (
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
);

// semi-Presentational Component
const CartItem = ({ cartItem, index }, { store }) => {
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
						<div className="row item-price">${state[index].cost}</div>
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
	);
};
CartItem.contextTypes = {
  store: PropTypes.object
};

export default ShoppingCart;
