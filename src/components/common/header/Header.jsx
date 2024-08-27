import React, { useState } from "react";
import "./header.css";
import Logo from '../../../assets/images/v logo.jpeg';
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";


const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
          <img className = "top-logo" src={Logo} alt="gpt3_logo" />
            {/* <h3>AMINGA STUDIOS</h3> */}
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <button className='btn1'>
              <a className="champion" href="/contact" alt="contact">
                <h3>Hire Us</h3>
              </a>
            </button>
          </div>
          <div className='toggle'>
            <button className="tog" onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
