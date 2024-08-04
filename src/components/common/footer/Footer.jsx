import React from 'react';
import gpt3Logo from '../../../assets/images/v logo.jpeg';
import { BsTwitterX } from "react-icons/bs";
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want the best Architectural model designs in the Market?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href='/contact' alt="contact">Contact us today!</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> ABC Towers, 6th floor,. ABC Place, Waiyaki Way,. P.O Box -00100. Nairobi, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Socials</h4>
        <p><a href='https://twitter.com'><BsTwitterX /></a></p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Aminga Studios</p>
        <p>+254 712345678</p>
        <p>vincentonditi@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Aminga Studios. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;