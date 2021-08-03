import React, { Component } from 'react';

import fbIcon from '../assets/fb-icon.png';
import flicIcon from '../assets/flic-icon.png';
import gpIcon from '../assets/gp-icon.png';
import instaIcon from '../assets/insta-icon.png';
import mailIcon from '../assets/mail-icon.png';
import twitIcon from '../assets/twit-icon.png';
import rssIcon from '../assets/rss-icon.png';
import pintIcon from '../assets/pint-icon.png';

class ButtonList extends Component {
    render() {
        return (
            <div id="header-right">
                <ul>
                    <li>
                        <img src={fbIcon} alt="facebook icon"/>    
                    </li>
                    <li>
                        <img src={twitIcon} alt="twitter icon"/>    
                    </li> 
                    <li>
                        <img src={gpIcon} alt="google plus icon"/>    
                    </li> 
                    <li>
                        <img src={flicIcon} alt="flicker icon"/>    
                    </li> 
                    <li>
                        <img src={instaIcon} alt="instagram icon"/>    
                    </li> 
                    <li>
                        <img src={pintIcon} alt="pinterest icon"/>    
                    </li> 
                    <li>
                        <img src={rssIcon} alt="rss icon"/>    
                    </li> 
                    <li>
                        <img src={mailIcon} alt="mail icon"/>    
                    </li> 
                </ul>
            </div>
        );
    }
}

export default ButtonList;

