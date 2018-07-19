import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductsList } from "../MarketplaceProduct";
import API from "../../utils/API";
import * as routes from '../../constants/routes';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: this.props.productId,
      product: {},
      rating: 4,
      relatedItems: null,
    }
  };

  componentDidMount() {
  	const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);

    API.getProduct(this.state.productId)
    .then(res => this.setState({ product: res.data }))
    .catch(err => console.log(err));
  };

  componentWillUnmount() {
		this.unsubscribe();
	};

	render() {
		// const props = this.props;
		const { store } = this.context;
		const { title, category, description, price, img_cloud } = this.state.product;
		
		if(this.state.relatedItems === null && category) {
			API.getProductsForCategory(category)
					.then(res => this.setState({
						relatedItems: res.data.filter(p => {
							if(p._id !== this.state.productId){
								return p;
							}
						})
					}))
					.catch(err => console.log(err));
			
		}
		return (
			<div className="product-item">
				<div className="row">
					<div className="col s6 col-left">
						<div className="product-img">
							<img src={img_cloud} alt={title} />
						</div>
					</div>
					<div className="col s4 col-center">
						<div className="product-title">
							<h5>{title}</h5>
						</div>
						<div className={`rating stars-${this.state.rating}`}></div>
						<div>
							<p>${price ? price.toFixed(2) : "0.00"}</p>
						</div>
						<div>
							<h5>Description:</h5>
							<p>{description ? description : 'Description coming soon...'}</p>
						</div>
					</div>
					<div className="col s2 col-right">
						<a href={routes.CART} className="btn green add-to-cart" onClick={() => {
								store.dispatch({
				            type: 'ADD_TO_CART',
				            product: this.state.product,
										qty: 1
								});
								localStorage.setItem('cart',JSON.stringify(store.getState()));
								this.setState({ isSelected: true });
							}
						}>
						<i className="fas fa-cart-plus cart-icon"></i>
						{'  '}
						Add to Cart
						</a>
					</div>
				</div>
				<div className="row">
					<h5>Related Items</h5>
					<ProductsList
						products={this.state.relatedItems}
					/>
				</div>
			</div>
		);
	};
};
Product.contextTypes = {
  store: PropTypes.object
};


export default Product;
