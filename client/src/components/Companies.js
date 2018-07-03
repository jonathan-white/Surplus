import React from "react";
import { Parallax, Carousel } from 'react-materialize'

const Companies = props => (
    <div>
      <Parallax
        className="imageSize s200"
        imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/officeBuilding.jpg"
      />
      <div className="section white">
        <div className="row container">
          <Carousel images={[
            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/chase.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/ibm.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/clevelandClinic.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/mercedes.jpg',
            'https://storage.googleapis.com/surplus-6507a.appspot.com/assets/LAfitness.jpg'
          ]} />
        </div>
      </div>
      <Parallax
        className="imageSize s200"
        imageSrc="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/inventoryManage.jpg"
      />
    </div>
);

export default Companies;
