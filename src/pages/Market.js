import React, { Component } from 'react';
import Companies from "../components/Companies";
import Cards from "../components/Cards";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
// import API from "../utils/API"


class Market extends Component {

state = {
  cards: [],
  companies: [],
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
//   API.getCards().then(results=>{
//     this.setState({
//       cards: results
//     })
//   })
//   API.getCompanies().then(results=>{
//     this.setState({
//       companies: results
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
        <Cards/>
        {/* //this is a for loop for ES6 */}
        {/* {this.state.cards.map(card=>{
          return <Cards nonsense = {card}/>
        })} */}
      </div>
    );
  }
}


export default Market;
