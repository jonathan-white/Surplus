import React from "react";
import 'materialize-css'
import { Slider, Slide, Caption } from 'react-materialize'

const HeroSlider = props => (
    <Slider className="slider" fullscreen={false} options={{height: 330}}>
      <Slide image={<img alt="" src={process.env.REACT_APP_STORAGE + 
          "/assets/OfficeRoom.jpg"}/>}>
        <Caption placement="center">
          <h3>Office Furniture</h3>
          <h5 className="light grey-text text-lighten-3">Tables, desks, chairs, and more...</h5>
          <a href="#furniture" className="hero-link">View selection</a>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={process.env.REACT_APP_STORAGE + 
          "/assets/projector.jpg"}/>}>
        <Caption placement="left">
          <h3>Electronics</h3>
          <h5 className="light grey-text text-lighten-3">Projectors and more!</h5>
          <a href="#electronics" className="hero-link">View selection</a>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={process.env.REACT_APP_STORAGE + 
          "/assets/pens.jpg"}/>}>
        <Caption placement="right">
          <h3>Office Supplies</h3>
          <h5 className="light grey-text text-lighten-3">Ballpoint Pens, Gel Pens, Fountain Pens and more...</h5>
          <a href="#office" className="hero-link">View selection</a>
        </Caption>
      </Slide>
    </Slider>
);

export default HeroSlider;
