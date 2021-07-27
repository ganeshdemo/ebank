import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {
        return (
        <div>
        <nav className="navbar">
            <div className="menu-listing">
                <a href="#">PRIVILEGE</a> | 
                <a href="#">WEALTH</a> | 
                <a href="#">PRIVATE</a> | 
                <a href="#">MILLENNIAL</a>
            </div>
            <div className="container-fluid">
            <div className="navbar-header">
            <NavLink className="navbar-brand" exact to="/">
            <img width="150px" height="41px" src="https://www.equitasbank.com/sites/default/files/equitas-logo.png"  alt="Home" />  </NavLink> 
                </div>
            <ul className="nav navbar-nav">
                <li><a href="#">PERSONAL </a></li>
                <li><a href="#">NRI </a></li>
                <li className="topMenu"><a href="#"><span className="caret"></span> BUSINESS</a>                
                </li>
                <li><a href="#">CORPORATE</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li>
                <NavLink exact activeClassName="active" to="/login">
                <span className="glyphicon glyphicon-log-in"></span> Login </NavLink>  
                </li>                  
            </ul>
            </div>
        </nav>

        <nav className="navbar navbar2">
            <div className="container-fluid">
                <div id="search_bar" className="navbar-left">
                    <img src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/search-input-blue.svg" className="search_icon_image" />
                    <input autoComplete="off" id="search" placeholder="Search for products, services..." />
                    
                </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="small-text"><a href="#"><span className="glyphicon"></span> HELP & SUPPORT</a></li>
                <li className="small-text"><a href="#"><span className="glyphicon"></span> CONTACT US</a></li>            
                <li className="small-text"><a href="#"><span className="glyphicon"></span> FEEDBACK</a></li>
                <li className="small-text"><a href="#"><span className="glyphicon"></span> SERVICE REQUESTS</a></li>            
            </ul>
            </div>
        </nav>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                
                <ul className="nav navbar-nav">
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span> HOME</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">PRIVILEGE</a></li>
                        <li><a className="dropdown-item" href="#">WEALTH</a></li>
                        <li><a className="dropdown-item" href="#">PRIVATE</a></li>
                        <li><a className="dropdown-item" href="#">MILLENNIAL</a></li>
                    </ul>
                </li>
                <li><a href="#">NRI </a></li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><span className="caret"></span> WAYS TO BANK</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">DSB Terms and Conditions</a></li>
                        <li><a className="dropdown-item" href="#">DSB Serviceable Branches/Locations</a></li>
                    </ul>
                </li>
                <li><a href="#">ONLINE BANKING</a></li>
                <li><a href="#">INTERNET BANKING</a></li>
                </ul>
                
            </div>
        </nav>
        </div>
        );
    }
}
export default Header;