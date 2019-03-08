import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { styles, withStyles } from './Filter.styles';

const dietaryRestrictions = [];
// empty arrays for selected and checked
const selected = [];
const newChecked = [];

class Filter extends React.Component {
  handleDelete = item => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(item);
    selected.splice(currentIndex);
    newChecked.splice(currentIndex);

    this.setState({
      checked: newChecked,
    });

    this.handleToggle();
  };

  render() {
    const { classes } = this.props;
    const { card, title, div, chip, button } = classes;
    return (
      <div className={card}>
        <Typography className={title} color="textSecondary" gutterBottom>
          Filter Dietary Restrictions
        </Typography>
        <div className={div}>
          <Chip
            label="Vegetarian"
            id="Vegetarian"
            className={chip}
            variant="outlined"
            onDelete={this.handleDelete()}
          />
          <Chip
            label="Vegan"
            id="Vegan"
            className={chip}
            variant="outlined"
            onDelete={this.handleDelete()}
          />
        </div>
        <div className={div}>
          {/* <Link style={{ textDecoration: 'none' }}> */}
          <Button
            size="large"
            variant="contained"
            className={button}
            style={{ backgroundColor: '#ff9966', color: 'white' }}
          >
            Submit
          </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);
