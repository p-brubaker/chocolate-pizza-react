import React, { Component } from 'react';
import logo from '../assets/logo.png';

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div id="fork-knife-line">
                    <hr />
                    <img src={logo} alt="fork and knife logo" id="fork-knife-logo-footer" />                    
                </div>
                <div id="delicious">
                    <span>Delicious &#169 2013 &#8226 All Rights Reserved</span>
                    <span>Proudly published with Ghost.</span>
                </div>
            </footer>
         );
    }
}
 
export default Footer;