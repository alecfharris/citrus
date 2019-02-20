import React from 'react';
import Layout from '../components/Layout/Layout';
import FridgeEntry from '../components/FridgeEntry';
import FridgeList from '../components/FridgeList';

const Fridge = () => (
  <Layout>
    <div>
      <FridgeEntry />
    </div>
    <FridgeList />
  </Layout>
);

export default Fridge;
