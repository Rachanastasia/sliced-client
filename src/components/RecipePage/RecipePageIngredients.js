import React from 'react'
import './RecipePageIngredient.css'

import Ingredient from './Ingredient'

/*This component takes in an array of ingredients and renders them as list items*/

//this component will need to call helper function that 
//multiplies everything by multiplyBy
function RecipePageIngredients(props) {

    return (
        <ul className='ingredients_wrapper'>
            {props.ingredients.map(ing => {

                return (
                    <li key={ing.id} className='ing_item'>
                        <Ingredient {...ing} />
                    </li>
                )
            })}
        </ul>
    )

}

export default RecipePageIngredients
