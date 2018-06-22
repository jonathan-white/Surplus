import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Slide, Slider } from 'react-materialize'
import { Parallax } from 'react-materialize'
// import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Carousel } from 'react-materialize'
import { Card, CardTitle, Col, CardPanel } from 'react-materialize'
import { Row, Input, Autocomplete } from 'react-materialize'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='Surplus' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>person</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>favorite</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>shopping_cart</Icon></NavItem>
        </Navbar>
        <Row>
          <Input s={12} type='search' label='Search'>
          </Input>
        </Row>
        <Slider>
          <Slide
            src="http://lorempixel.com/580/250/nature/1"
            title="This is our big Tagline!">
            Here's our small slogan.
            </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/2"
            title="Left aligned Caption"
            placement="left">
            Here's our small slogan.
            </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="right">
            Here's our small slogan.
            </Slide>
        </Slider>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section white">
          <div className="row container">
            <Carousel images={[
              'https://lorempixel.com/250/250/nature/1',
              'https://lorempixel.com/250/250/nature/2',
              'https://lorempixel.com/250/250/nature/3',
              'https://lorempixel.com/250/250/nature/4',
              'https://lorempixel.com/250/250/nature/5'
            ]} />
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
        {/* <h1 "Market Place" /> */}
        <Row>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
          <Col s={12} m={3}>
            <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              <p><a href="#">This is a link</a></p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}



export default App;
