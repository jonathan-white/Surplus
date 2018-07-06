import React from "react";
import * as routes from '../constants/routes';

const Footer = () => (
  <footer className="footer indigo darker-4">
    <a href="#top">
      <div className="backToTop">Back to Top</div>
    </a>
    <div className="LinksContainer">
      <div className="footerLinksRow">
        <div>
          <div className="footerLinksSectionHeader">About Surplus Market</div>
          <ul>
            <li>
              <a href={routes.ABOUT} className="footerLink">About Us</a>
            </li>
            <li>
              <a href={routes.VISION} className="footerLink">Our Vision</a>
            </li>
            <li>
              <a href={routes.CAREERS} className="footerLink">Careers</a>
            </li>
            <li>
              <a href={routes.INVEST} className="footerLink">Investor Relations</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footerLinksSectionHeader">Buy on Surplus Market</div>
          <ul>
            <li>
              <a href={routes.PRODUCTS} className="footerLink">All Products</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footerLinksSectionHeader">Sell on Surplus Market</div>
          <ul>
            <li>
              <a href={routes.SIGN_UP} className="footerLink">Sign Up</a>
            </li>
            <li>
              <a href={routes.GETTING_STARTED} className="footerLink">Getting Started</a>
            </li>
            <li>
              <a href={routes.HELP} className="footerLink">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footerLinksSectionHeader">We are Here to Help</div>
          <ul>
            <li>
              <a href={routes.ACCOUNT} className="footerLink">Your Account</a>
            </li>
            <li>
              <a href={routes.ORDERS} className="footerLink">Your Orders</a>
            </li>
            <li>
              <a href={routes.HELP} className="footerLink">Help Center</a>
            </li>
            <li>
              <a href={routes.DISPUTE} className="footerLink">Submit a Dispute</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyrightSection">
      <ul>
        <li>&copy; Copyright 2018, Surplus Market</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
