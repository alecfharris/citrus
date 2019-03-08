import React from 'react';
import Layout from '../Layout/Layout';
import RecipePage from './RecipePage';

// TODO: Paul needs to figure out destructuring of match.params

/*eslint-disable */
const RecipePageView = props => (
  <Layout>
    <RecipePage id={props.match.params.id} />
  </Layout>
);

export default RecipePageView;
