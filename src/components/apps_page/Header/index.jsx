import React, { useEffect, useState } from 'react';
import { PiCaretDownLight, PiCaretUpThin } from "react-icons/pi";
import headImg1 from "../../../assets/img/logo/android-logo.png";
import headImg2 from "../../../assets/img/logo/window-logo.png";
import headImg3 from "../../../assets/img/logo/ios-logo.png";
import headImg4 from "../../../assets/img/logo/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";

const Header = () => {

    let [isMobile, setIsMobile] = useState(false),
    [isClassSubMenu, setIsClassSubMenu] = useState(false),
    [isFunctionSubMenu, setIsFunctionSubMenu] = useState(false),
    [headImg, setHeadImg] = useState(''),
    [link, setLink] = useState('/home'),

    toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    },

    toggleClassSubMenu = () => {
        setIsClassSubMenu(!isClassSubMenu);
        setIsFunctionSubMenu(false);  // Close other submenu if opened
    },

    toggleFunctionSubMenu = () => {
        setIsFunctionSubMenu(!isFunctionSubMenu);
        setIsClassSubMenu(false);  // Close other submenu if opened
    },

    closeMenus = () => {
        setIsMobile(false);
        setIsClassSubMenu(false);
        setIsFunctionSubMenu(false);
    };

    useEffect(() => {

        let userAgent = window.navigator.userAgent;

        if (/Windows/.test(userAgent)) {
            setHeadImg(headImg2);
            setLink('https://accounts.google.com/signin/v2/identifier');
        } else if (/iPhone|iPad|iPod/.test(userAgent)) {
            setHeadImg(headImg3);
            setLink('https://appstore.com/');
        } else if (/Android/.test(userAgent)) {
            setHeadImg(headImg1);
            setLink('https://play.google.com/store/apps?hl=en_IN');
        } else if (/Macintosh/.test(userAgent)) {
            setHeadImg(headImg3); 
            setLink('https://appstore.com/');
        } else {
            setHeadImg(headImg4);
            setLink('/home');
        }
    }, []);

    return (
        <nav>
            <div className="navbar">
                <NavLink className="nav-link" onClick={closeMenus} to={link} target='_blank'>
                    <img className="navbar-logo" src={headImg} alt={headImg} />
                </NavLink>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    {isMobile ? <LiaTimesSolid /> : <HiBars3 />}
                </div>
                <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink className={({ isActive, isPending }) => isActive ? "active nav-links" : isPending ? "pending" : "nav-links"} 
                            onClick={closeMenus} to="/home"> Home </NavLink>
                    </li>
                    <li className="nav-item" onMouseOver={() => setIsClassSubMenu(true)} onMouseLeave={() => setIsClassSubMenu(false)}>
                        <div className="nav-links" onClick={toggleClassSubMenu}> 
                            Class
                            {isClassSubMenu ? <PiCaretUpThin className='pro-icon' /> : <PiCaretDownLight className='pro-icon' />}
                        </div>
                        {isClassSubMenu && (
                            <ul className="submenu">
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-context-api"> Context API </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-hoc"> H.O.C. </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-image-upload"> Image Upload </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-props"> Props </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-props-drilling"> Props Drilling </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-students-list"> Students List </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-user-form"> User Form </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/class-view-products"> View Products </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item" onMouseOver={() => setIsFunctionSubMenu(true)} onMouseLeave={() => setIsFunctionSubMenu(false)}>
                        <div className="nav-links" onClick={toggleFunctionSubMenu}> 
                            Function
                            {isFunctionSubMenu ? <PiCaretUpThin className='pro-icon' /> : <PiCaretDownLight className='pro-icon' />}
                        </div>
                        {isFunctionSubMenu && (
                            <ul className="submenu">
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-context-api"> Context API </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-hoc"> H.O.C. </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-image-upload"> Image Upload </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-props"> Props </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-props-drilling"> Props Drilling </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-students-list"> Students List </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-user-form"> User Form </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className={({ isActive, isPending }) => isActive ? "active subnav-links" : isPending ? "pending" : "subnav-links"} 
                                        onClick={closeMenus} to="/function-view-products"> View Products </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive, isPending }) => isActive ? "active nav-links" : isPending ? "pending" : "nav-links"} 
                            onClick={closeMenus} to="/contact-us"> Contact Us </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;