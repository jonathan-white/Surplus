import React from "react";
import { Link } from "react-router-dom";
import { Row, Input} from 'react-materialize'
import "./Search.css";

const Search = props => (
    <Row>
        <Input s={12} type='search' label='Search'>
        </Input>
    </Row>
);

export default Search;
