import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FridgeItem from '../FridgeItem';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
  },
});

function FridgeList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <FridgeItem status="red" title="Apples" description="2 Remaining" />
      <FridgeItem
        status="green"
        title="Butter"
        description="1/4 Pound Remaining"
      />
    </List>
  );
}

FridgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridgeList);
