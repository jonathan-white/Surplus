import React from "react";
import { Link } from "react-router-dom";
import { Slide, Slider } from 'react-materialize'
import "./Favorites.css";

const Favorites = props => (
    <Slider>
        <Slide
        src="./Images/OfficeRoom.jpg"
        title="This is our big Tagline!">
        Here's our small slogan.
        </Slide>
        <Slide
        src="./Images/projector.jpg"
        title="Left aligned Caption"
        placement="left">
        Here's our small slogan.
        </Slide>
        <Slide
        src="./Images/pens.jpg"
        title="Right aligned Caption"
        placement="right">
        Here's our small slogan.
        </Slide>
    </Slider>
);

export default Favorites;
