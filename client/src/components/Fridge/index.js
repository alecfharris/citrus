import React from 'react';
// import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import FridgeEntry from '../FridgeEntry';
import FridgeList from '../FridgeList';
import StyledFridge from './style.js';
import NavBar from '../NavBar';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
  },
});

function Fridge() {
  // const { classes } = props;
  return (
    <div>
      <NavBar title="Citrus" />
      <StyledFridge>
        <div>
          <FridgeEntry />
        </div>
        <FridgeList />
      </StyledFridge>
    </div>
  );
}

// Fridge.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Fridge);
