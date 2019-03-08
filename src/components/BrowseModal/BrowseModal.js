import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Modal, Button, Typography } from './BrowseModal.styles';
import SearchByIngredient from '../SearchByIngredient/SearchByIngredient.pure';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class BrowseModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => <Link to={SearchByIngredient} />;

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              It seems you don't have any saved recipes. Click the button below
              to search for a Recipe
            </Typography>
            <Button onClick={this.handleClose}>Search for Recipes</Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

BrowseModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(BrowseModal);
