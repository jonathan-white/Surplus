import React from 'react';
import * as routes from '../../constants/routes';

const About = () => (
  <div>
    <div className="about-surplus">
      <h5>About Surplus Market</h5>
      <p>
        Surplus Market is a space for companies to conduct business to business transactions. Companies able to purchase and sell their overstocked inventory. This allows companies to save money year after year while building relationships through our site.
      </p>
    </div>
    <div className="about-founders">
      <h5>Our Founders</h5>
      <div className="foundersList">
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Jonathan White"/> */}
          <img src="images/jon.png" alt="Jonathan White"/>
          <div>
            <h2>Jonathan White</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Jonathan's bio goes here...</p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Denny Reever"/> */}
          <img src="images/denny.png" alt="Denny Reever"/>
          <div>
            <h2>Denny Reever</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Denny's bio goes here...</p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Kevin Beeler"/> */}
          <img src="images/kevin.png" alt="Kevin Beeler"/>
          <div>
            <h2>Kevin Beeler</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Kevin's bio goes here...</p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Marton Kondray"/> */}
          <img src="images/marton.png" alt="Marton Kondray"/>
          <div>
            <h2>Marton Kondray</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Marton's bio goes here...</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default About;
