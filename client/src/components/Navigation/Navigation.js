import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize'
import "./Navigation.css";

const Navigation = props => (
    <Navbar brand='Surplus Market' right>
        <NavItem href='/search'>
					<Icon>search</Icon>
				</NavItem>
        <NavItem href='/profile'>
					<Icon>person</Icon>
				</NavItem>
        <NavItem href='/favorites'>
					<Icon>favorite</Icon>
				</NavItem>
        <NavItem href='/checkout'>
					<Icon>shopping_cart</Icon>
				</NavItem>
    </Navbar>
);

export default Navigation;
