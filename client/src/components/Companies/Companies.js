import React from "react";
import { Parallax, Carousel } from 'react-materialize'
import "./Companies.css";
import Wrapper from "../Wrapper";

const Companies = props => (
    <Wrapper>
      <Parallax className="imageSize" imageSrc="./images/OfficeBuilding.jpg" />
      <div className="section white">
        <div className="row container">
          <Carousel images={[
            './images/chase.jpg',
            './images/ibm.jpg',
            './images/clevelandClinic.jpg',
            './images/mercedes.jpg',
            './images/LAfitness.jpg'
          ]} />
        </div>
      </div>
      <Parallax className="imageSize" imageSrc="./images/inventoryManage.jpg" />
    </Wrapper>
);

export default Companies;
