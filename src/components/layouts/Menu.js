import React from 'react';

function Menu() {
    return(
        <nav className="navbar navbar-expand-sm p-0">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-home"></i>
                        Home
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-envelope"></i>
                        Messages
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-star"></i>
                        Wishlist
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-cog"></i>
                        Settings
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-cog"></i>
                        My Account
                </a>
                </li>
            </ul>
        </nav>  
    )
}

export default Menu;