import React, { Component } from 'react';
import printIcon from '../assets/print-icon.png'

class ArticleHead extends Component {
    render() { 
        return ( 
            <div id="article-head">
                <div id="main-top-left">
                    <h1>{this.props.title}</h1>
                    <span className="light-mono">
                        Posted on {this.props.datePosted} / {this.props.category}
                    </span>
                </div>
                <div id="main-top-right">
                    <img src={printIcon} alt="printer icon" id="printer-icon" />
                    <span className="light-mono">Print</span>
                </div>
            </div>
         );
    }
}
 
export default ArticleHead;