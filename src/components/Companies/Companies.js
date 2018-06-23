import React from "react";
import { Parallax, Carousel } from 'react-materialize'
import "./Companies.css";
import Wrapper from "../Wrapper";

const Companies = props => (
    <Wrapper>
        <Parallax className="imageSize" imageSrc="./Images/OfficeBuilding.jpg" />
        <div className="section white">
            <div className="row container">
                <Carousel images={[
                    './Images/chase.jpg',
                    './Images/ibm.jpg',
                    './Images/clevelandClinic.jpg',
                    './Images/mercedes.jpg',
                    './Images/LAfitness.jpg'
                ]} />
            </div>
        </div>
        <Parallax className="imageSize" imageSrc="./Images/inventoryManage.jpg" />
    </Wrapper>
);

export default Companies;
