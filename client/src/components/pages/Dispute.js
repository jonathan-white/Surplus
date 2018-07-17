import React from 'react';
import { Input } from 'react-materialize';
import { Row } from 'react-materialize';



const DisputePG = () => (
  <div className="disputePage container">
    <img src="../images/Dispute-Resolution.jpg" alt="Dispute Resolution"/>
    
      <h1>File A Dispute</h1>
      <h7>What order are you disputing?</h7>
    
      <h7>Reason for the Dispute</h7>
     
      <Row>
          <Input placeholder="Order Number" s={6} label="Order Number" />
         
          <Input s={12} label="Your Dispute" defaultValue=""  />
         
          <Input type="email" label="Email" s={12} />
          <h7>Still having Touble? Try <span className="link">Help Center</span></h7>
      </Row>
    
  </div>
  
);

export default DisputePG;
