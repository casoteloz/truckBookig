import React from 'react';
import Menu from './Menu';
import Logo from '../../img/logo.png';


function Header() {
    return(
        <div className="row">
            <div className="col-sm-3">
                <img className="m-auto d-block" src={Logo} />
            </div>
            <div className="col-sm-9">
                <Menu />
            </div>
        </div>
    )
}


export default Header;