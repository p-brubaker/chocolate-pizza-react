import React, { Component } from 'react';
import authorImage from '../assets/van-pic.png';
class AuthorBio extends Component {
    render() { 
        return ( 
            <div id="author-bio">
                <img src={authorImage} alt="vanessa selfie" />
                <div id="span-container">
                    <h3>{this.props.data.name}</h3>
                    <span className="body-text">
                        {this.props.data.bio}
                    </span>
                </div>
                <button id="share-recipe">SHARE RECIPE</button>
            </div>
         );
    }
}
 
export default AuthorBio;