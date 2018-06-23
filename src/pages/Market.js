import React, { Component } from 'react';
import Products from "../components/Products";
import Favorites from "../components/Favorites";
import Companies from "../components/Companies";
import Search from "../components/Search";
// import API from "../utils/API"


class Market extends Component {

state = {
  products: [],
  user: {
  },
}

//this will fire when the component mounts (similar to doc.ready)

// componentWillMount(){
//   this.pageLoadData()
// }


//this is bringing in the data from the API.. 
//this will load data into state and your components will load from a .map

// pageLoadData = () => {
//   API.getProducts().then(results=>{
//     this.setState({
//       products: results
//     })
//   })
//   API.getUser().then(results=>{
//     this.setState({
//       user: results
//     })
//   })
// }
  render() {
    return (
      <div className="App">
        <Search/>
        <Favorites/>
        <Companies/>
        <Products/>
        {/* //this is a for loop for ES6 */}
        {/* {this.state.products.map(product=>{
          return <Products nonsense = {product}/>
        })} */}
      </div>
    );
  }
}


export default Market;
