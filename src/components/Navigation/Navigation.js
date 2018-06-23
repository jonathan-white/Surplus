import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize'
import "./Navigation.css";

const Navigation = props => (
    <Navbar brand='Surplus' right>
        <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>person</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>favorite</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>shopping_cart</Icon></NavItem>
    </Navbar>
);

export default Navigation;
