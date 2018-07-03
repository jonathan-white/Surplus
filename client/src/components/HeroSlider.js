import React from "react";
import { Link } from "react-router-dom";
import { Slide, Slider } from 'react-materialize'
import * as routes from '../constants/routes';

const HeroSlider = props => (
    <Slider className="slider">
      <Slide
        src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/OfficeRoom.jpg"
      title="Office Furniture">
        Tables, desks, chairs, and more...
      </Slide>
      <Slide
        src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/projector.jpg"
        title="Electronics"
      placement="left">
        Projectors and more!
      </Slide>
      <Slide
        src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/pens.jpg"
        title="Office Supplies"
      placement="right">
        Ballpoint Pens, Gel Pens, Fountain Pens and more...
      </Slide>
    </Slider>
);

export default HeroSlider;
