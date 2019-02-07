import React from 'react';

const RecipeTitle = () => {
    return(
        <div
            style={{
                margin: '5px'
            }}>
            <label>
                Recipe Title:
    <input type="text" name="recipe-title" id="recipe-title"/>
            </label>
            <div>
                <label>
                    Ingredients:
                </label>
            </div>
        </div>
    )
}

export default RecipeTitle;