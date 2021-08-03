import React, { Component } from 'react';
import ButtonList from './ButtonList';
import logo from '../assets/logo.png';

class Header extends Component {
    render() { 
        return ( 
            <header>
                <div id="header-left">
                    <img src={logo} alt="fork and knife logo" />
                    <div id="header-text">
                        <span id="header-delicious">Delicious</span>
                        <span id="header-sub-text" className="light-mono">The best food blog on the web</span>
                    </div>
                </div>
                <div id="header-right">
                    <ButtonList />
                </div>
            </header>
         );
    }
}
 
export default Header;