import React, { Component } from 'react';

class ImageSection extends Component {
    render() { 
        return ( 
            <img src={this.props.img} alt ="A chocolate pizza"/>
         );
    }
}
 
export default ImageSection;