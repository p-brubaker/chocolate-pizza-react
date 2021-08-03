import React, { Component } from 'react';
import ImageSection from './ImageSection';
import ArticleText from './ArticleText';
import ArticleHead from './ArticleHead';
import IngredientList from './IngredientList';

class Article extends Component {
    render() {
        return (
            <>
            <ArticleHead 
                title={this.props.data.articleTitle}
                datePosted={this.props.data.datePosted}
                category={this.props.data.category}
            />
            <ImageSection 
                img={this.props.data.img}
            />
            <ArticleText 
                text={this.props.data.recipeText}
            />
            <IngredientList 
                ingredients={this.props.data.ingredients}
            />
            </>
            )
    }
}

export default Article;
