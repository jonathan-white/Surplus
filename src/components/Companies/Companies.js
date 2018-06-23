import React from "react";
import { Link } from "react-router-dom";
import { Parallax, Carousel } from 'react-materialize'
import "./Companies.css";
import Wrapper from "../Wrapper";

const Companies = props => (
    <Wrapper>
        <Parallax imageSrc="./Images/OfficeBuilding.jpg" />
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
        <Parallax imageSrc="./Images/inventoryManage.jpg" />
    </Wrapper>
);

export default Companies;
