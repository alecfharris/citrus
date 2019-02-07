import React from 'react';

const RecipeForm = (props) => (
    <div
        style={{
            margin: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {/* <div
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
        </div> */}
        {/* <IngredientInput /> */}
        <div>
            <input type="submit" onClick={() => {props.saveRecipe(props)} } value="Submit" />
        </div>
    </div>
);

export default RecipeForm;