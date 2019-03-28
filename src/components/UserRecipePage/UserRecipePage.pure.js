import React from 'react';
import Layout from '../Layout/Layout';
import UserRecipePage from './UserRecipePage';

// TODO: Paul needs to figure out destructuring of match.params

/*eslint-disable */
const UserRecipePageView = props => (
  <Layout>
    <UserRecipePage id={props.match.params.id} />
  </Layout>
);

export default UserRecipePageView;
