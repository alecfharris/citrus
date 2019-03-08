import React from 'react';
import Layout from '../Layout/Layout';
import FridgeEntry from '../FridgeEntry/FridgeEntry';
import FridgeList from '../FridgeList/FridgeList';

const Fridge = () => (
  <Layout>
    <div>
      <FridgeEntry />
    </div>
    <FridgeList />
  </Layout>
);

export default Fridge;
