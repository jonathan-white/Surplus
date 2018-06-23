import React, { Component } from 'react';
import { Row, Card, CardTitle, Col } from 'react-materialize'
import NewProduct from "../components/NewProduct";
import UserProfile from  "../components/UserProfile";
import Cart from "../components/Cart";
import API from "../utils/API"

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

  render() {
    return (    
        <Row>
            <Col>
                <UserProfile />
                <NewProduct />
            </Col>
            <Col>
                <Cart />
            </Col>
        </Row>
    );
  }
}


export default Profile;
