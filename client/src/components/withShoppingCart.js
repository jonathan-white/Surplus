import React from 'react';

const withShoppingCart = (WrappedComponent) => (
  class WithShoppingCart extends React.Component {
    constructor(props){
      super(props);
      // sessionData = {
      //   sessionId: ...
      //   shoppingCart: ...
      // }
      this.state = { ...JSON.parse(localStorage.getItem('sessionData')) };
      this.handleAddToCart = this.handleAddToCart.bind(this);
      this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    };

    handleAddToCart = (product) => {
      console.log('Adding product to the cart:', product);
      this.setState((prevState) => ({
        shoppingCart: [...prevState.shoppingCart, product]
      }));

      localStorage.setItem('sessionData',JSON.stringify(this.state));
    }

    handleRemoveFromCart = () => {
      this.setState((prevState) => ({ cartSize: prevState.cartSize - 1 }));
    }

    render() {
      return (
        <WrappedComponent
          cartData={this.state}
          handleAddToCart={this.handleAddToCart}
          handleRemoveFromCart={this.handleRemoveFromCart}
          {...this.props} />
      );
    }
  }
)

export default withShoppingCart;
