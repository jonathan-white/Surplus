import React from "react";
import { Link } from "react-router-dom";
import { Parallax, Carousel } from 'react-materialize'
import "./Companies.css";
import Wrapper from "../Wrapper";

const Companies = props => (
    <Wrapper>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section white">
            <div className="row container">
                <Carousel images={[
                    'https://lorempixel.com/250/250/nature/1',
                    'https://lorempixel.com/250/250/nature/2',
                    'https://lorempixel.com/250/250/nature/3',
                    'https://lorempixel.com/250/250/nature/4',
                    'https://lorempixel.com/250/250/nature/5'
                ]} />
            </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
    </Wrapper>
);

export default Companies;
