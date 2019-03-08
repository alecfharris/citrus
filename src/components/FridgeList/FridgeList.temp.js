import React from 'react';
import ReactDOM from 'react-dom';

// TODO: ONCE API WORKS WE CAN USE THIS MOCK DATA FOR REAL TEST AND CONVERT BACK TO TEST
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<div />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const Inventory = {
  fridge: [
    {
      status: 'yellow',
      name: 'Apples',
      quantity: 2,
      unit: null,
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Yams',
      quantity: 425,
      unit: null,
      purchaseDate: 'February 9, 2019',
    },
    {
      status: 'green',
      name: 'Butter',
      quantity: 4,
      unit: 'Pounds',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Bread',
      quantity: 1,
      unit: 'Loaves',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'yellow',
      name: 'Chicken Breasts',
      quantity: 6,
      unit: null,
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'red',
      name: 'Spaghetti',
      quantity: 0.25,
      unit: 'Pounds',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Eggs',
      quantity: 6,
      unit: null,
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'red',
      name: 'Frog Legs',
      quantity: 4,
      unit: null,
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Ranch Dressing',
      quantity: 12,
      unit: 'Fluid Ounces',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'yellow',
      name: 'Milk',
      quantity: 80,
      unit: 'Gallons',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Hummus',
      quantity: 12,
      unit: 'Ounces',
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'red',
      name: 'Carrots',
      quantity: 100000,
      unit: null,
      purchaseDate: 'February 2, 2019',
    },
    {
      status: 'green',
      name: 'Pineapple',
      quantity: 6,
      unit: null,
      purchaseDate: 'February 9, 2019',
    },
    {
      status: 'yellow',
      name: 'Green Beans',
      quantity: 6,
      unit: null,
      purchaseDate: 'February 11, 2019',
    },
    {
      status: 'red',
      name: 'Coffee',
      quantity: 6,
      unit: 'Pods',
      purchaseDate: 'February 11, 2019',
    },
  ],
};

export default Inventory;
