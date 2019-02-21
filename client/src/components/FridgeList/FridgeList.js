import React from 'react';
import PropTypes from 'prop-types';
import Inventory from './FridgeList.temp';
import FridgeInfo from '../FridgeInfo/FridgeInfo';
import { StyledList, withStyles, List } from './FridgeList.styles';

const styles = () => ({
  root: {
    background: '#FFF',
    overflowY: 'scroll',
    margin: '8px',
    borderRadius: '4px',
    justifyContent: 'center',
    width: '75vw',
    maxHeight: 500,
  },
});

// Alphabetize inventory by name
function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function FridgeList(props) {
  const inventory = Inventory.fridge;
  const { classes } = props;
  inventory.sort(compare);
  return (
    <List disablePadding className={classes.root}>
      {inventory.map(item => (
        <FridgeInfo
          status={item.status}
          title={item.name}
          quantity={item.quantity}
          unit={item.unit}
          purchaseDate={item.purchaseDate}
        />
      ))}
    </List>
  );
}

FridgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridgeList);
