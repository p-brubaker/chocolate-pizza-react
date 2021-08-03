import React, { Component } from 'react';
import IngredientItem from './IngredientItem';

class IngredientList extends Component {
    render() { 
        const length = this.props.ingredients.length;
        const mid = Math.floor(length / 2);
        const left = this.props.ingredients.slice(0, mid + 1);
        const right = this.props.ingredients.slice(mid + 1, length);
        
        return ( 
            <div id="ingredients">
                <ul className="ingredient-list">
                    {left.map((ingredient, i) => {
                        return (
                            <IngredientItem 
                                key={i}
                                name={ingredient.name}
                                amount={ingredient.amount}
                            />
                        )
                    })}
                </ul> 
                <ul className="ingredient-list">
                    {right.map((ingredient, i) => {
                        return (
                            <IngredientItem 
                                key={i}
                                name={ingredient.name}
                                amount={ingredient.amount}
                            />
                        )
                    })}
                </ul> 

            </div>
         );
    }
}
 
export default IngredientList;