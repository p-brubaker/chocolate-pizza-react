import React, { Component } from 'react';

class ArticleText extends Component {
    render() { 
        return ( 
            <>
            {this.props.text.map( (p, i) => <p key={i}>{p}</p>)}
            </>
         );
    }
}
 
export default ArticleText;