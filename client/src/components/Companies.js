import React from "react";
import { Parallax, Carousel } from 'react-materialize'
import Wrapper from "./Wrapper";

const Companies = props => (
    <Wrapper>
      <Parallax
        className="imageSize s200"
        imageSrc="./images/OfficeBuilding.jpg"
        overlayText="Participating Businesses"
      />
      <div className="section white">
        <div className="row container">
          <Carousel images={[
            'https://storage.googleapis.com/surplus-6507a.appspot.com/chase.jpg',
            './images/ibm.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/clevelandClinic.jpg',
            './images/mercedes.jpg',
            './images/LAfitness.jpg'
          ]} />
        </div>
      </div>
      <Parallax
        className="imageSize s200"
        imageSrc="./images/inventoryManage.jpg"
        overlayText="Marketplace Products"
      />
    </Wrapper>
);

export default Companies;
