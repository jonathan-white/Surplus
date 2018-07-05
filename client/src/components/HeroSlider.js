import React from "react";
import { Slide, Slider } from 'react-materialize'

const HeroSlider = props => (
    <Slider className="slider" style={{height: 330}}>
      <Slide style={{height: 300}} title="Office Furniture"
      src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/OfficeRoom.jpg">
        Tables, desks, chairs, and more...
        <a href="#furniture" className="hero-link">View selection</a>
      </Slide>
      <Slide style={{height: 300}} title="Electronics" placement="left"
      src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/projector.jpg">
        Projectors and more!
        <a href="#electronics" className="hero-link">View selection</a>
      </Slide>
      <Slide style={{height: 300}} title="Office Supplies" placement="right"
      src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/pens.jpg">
        Ballpoint Pens, Gel Pens, Fountain Pens and more...
        <a href="#office" className="hero-link">View selection</a>
      </Slide>
    </Slider>
);

export default HeroSlider;
