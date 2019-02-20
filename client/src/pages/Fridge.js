import React from 'react';
import Layout from '../components/Layout';
import FridgeEntry from '../components/Fridge/FridgeEntry';
import FridgeList from '../components/Fridge/FridgeList';

const Fridge = () => (
  <Layout>
    <div>
      <FridgeEntry />
    </div>
    <FridgeList />
  </Layout>
);

export default Fridge;
