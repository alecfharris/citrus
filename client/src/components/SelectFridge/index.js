import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Icon from '../StatusIcon';
import Inventory from '../FridgeList/inventory';

const styles = () => ({
  root: {
    width: '100%',
    alignContent: 'center',
  },
  list: {
    width: '100%',
    background: '#FFF',
    overflowY: 'scroll',
    margin: '8px',
    borderRadius: '4px',
  },
  title: {
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    // maxWidth: '600px',
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
    alignContent: 'center',
  },
  chip: {
    margin: '8px',
    fontSize: '18px',
    backgroundColor: '#0097A7',
    color: 'white',
    border: 'none',
  },
  div: {
    margin: '8px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

// Alphabetize inventory by name
function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

// empty arrays for selected and checked
const selected = [];
const newChecked = [];

// link on submit sends 'selected' array to display recipe cards
const newTo = {
  pathname: '/browse',
  selected: { selected },
};

class SelectFridge extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = item => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(item);
    if (currentIndex === -1) {
      newChecked.push(item);
      selected.push(item.name);
    } else {
      newChecked.splice(currentIndex, 1);
      selected.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

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
    const inventory = Inventory.fridge;
    const { classes } = this.props;
    const { checked } = this.state;
    inventory.sort(compare);
    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Search Recipe by Ingredients
          </Typography>
          <div className={classes.div}>
            {selected.map(item => (
              <Chip
                label={item}
                className={classes.chip}
                variant="outlined"
                onDelete={this.handleDelete(item)}
              />
            ))}
          </div>
          <div className={classes.div}>
            <Link to={newTo} style={{ textDecoration: 'none' }}>
              <Button
                size="large"
                variant="contained"
                className={classes.button}
                style={{ backgroundColor: '#ff9966', color: 'white' }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes.div}>
          <List className={classes.list}>
            {inventory.map(item => (
              <ListItem
                key={item.name}
                button
                onClick={this.handleToggle(item)}
              >
                <Icon status={item.status} />
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(item)}
                    checked={{ checked }.checked.indexOf(item) !== -1}
                    key={item.name}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

SelectFridge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectFridge);
