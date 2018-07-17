import React from 'react';
import { Input, Row, Col } from 'react-materialize';
import * as routes from '../../constants/routes';

const DisputePage = () => (
  <div className="disputePage container">
    <Row>
      <h5 className="center-align title">Submit A Dispute</h5>
    </Row>
    <Row>
      <Col s={6}>
        <form>
          <Input label="What order are you disputing?" name="order" s={12} />
          <Input type="textarea" label="Reason for the Dispute" name="reason" s={12} />
          <Input type="email" label="Email" name="email" s={12} />
          <Input type="submit" value="Submit" className="btn indigo darker-4" />
        </form>
      </Col>
      <Col className="center-align" s={6}>
        <div>
          <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/Dispute-Resolution.jpg" alt="Dispute Resolution"/>
        </div>
      </Col>
    </Row>
    <Row>
      <h6>Still having trouble? Try the <a href={routes.HELP} className="link">Help Center</a></h6>
    </Row>
  </div>
);

export default DisputePage;
