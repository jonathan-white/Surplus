import React from "react";
import { Parallax, Carousel } from 'react-materialize'
import Wrapper from "./Wrapper";

const Companies = props => (
    <Wrapper>
      <Parallax
        className="imageSize s200"
        imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/officeBuilding.jpg"
      />
      <div className="section white">
        <div className="row container">
          <Carousel images={[
            'https://storage.googleapis.com/surplus-6507a.appspot.com/chase.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/ibm.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/clevelandClinic.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/mercedes.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/LAfitness.jpg'
          ]} />
        </div>
      </div>
      <Parallax
        className="imageSize s200"
        imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/inventoryManage.jpg"
      />
    </Wrapper>
);

export default Companies;
