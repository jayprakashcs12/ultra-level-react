import React from 'react';
import headImg from "../../../assets/img/logo/logo.png";
import "./proheader.css";
import { Link } from 'react-router-dom';

const ProHeader = () => {

  return (
    <>
      <nav className='pro-nav'>
        <div className="wrapper">
          <div className="logo">
            <Link className="pro-link" to="/"> 
              <img src={headImg} alt={headImg} />
            </Link>
          </div>
          <input type="radio" name="slider" className="drop-input" id="menu-btn" />
          <input type="radio" name="slider" className="drop-input" id="close-btn" />
          <ul className="nav-ul-list">
            <label htmlFor="close-btn" className="bars-btn close-btn">
              <i className="fa fa-times" />
            </label>
            <li className="pro-list">
              <Link className="pro-link" to="/home"> Home </Link>
            </li>
            <li className="pro-list">
              <label className="desktop-item pro-link"> Our Services </label>
              <input type="checkbox" id="showDrop" className="drop-input" />
              <label htmlFor="showDrop" className="mobile-item">
                Our Services
              </label>
              <ul className="drop-menu">
                <li className="pro-drop-list">
                  <Link className="pro-drop-link" to="/"> Android </Link>
                </li>
                <li className="pro-drop-list">
                  <Link className="pro-drop-link" to="/"> iOS </Link>
                </li>
                <li className="pro-drop-list">
                  <Link className="pro-drop-link" to="/"> Linux </Link>
                </li>
                <li className="pro-drop-list">
                  <Link className="pro-drop-link" to="/"> Windows </Link>
                </li>
              </ul>
            </li>
            <li className="pro-list">
              <Link className="pro-link" to="/"> Contact </Link>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="bars-btn menu-btn">
            <i className="fa fa-bars" />
          </label>
        </div>
      </nav>

    </>
  )
}

export default ProHeader;