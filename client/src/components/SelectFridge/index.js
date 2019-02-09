import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Icon from '../StatusIcon';
import Inventory from '../FridgeList/inventory';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '600px',
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
    width: '90%',
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
  chip: {
    margin: '8px',
    fontSize: '18px',
    backgroundColor: '#0097A7',
    color: 'white',
    border: 'none',
  },
});

// Alphabetize inventory by name
function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
const selected = [];

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
    const newChecked = [...checked];
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

    console.log(selected);
  };

  render() {
    const inventory = Inventory.fridge;
    const { classes } = this.props;
    const { checked } = this.state;
    inventory.sort(compare);
    return (
      <div>
        <div className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Search Recipe by Ingredients
            </Typography>
          </CardContent>
          <div>
            {selected.map(item => (
              <Chip label={item} className={classes.chip} variant="outlined" />
            ))}
          </div>
          <Link to={newTo} style={{ textDecoration: 'none' }}>
            <Button size="large" variant="contained" className={classes.button}>
              Submit
            </Button>
          </Link>
        </div>
        <List className={classes.root}>
          {inventory.map(item => (
            <ListItem key={item.name} button>
              <Icon status={item.status} />
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(item)}
                  checked={{ checked }.checked.indexOf(item) !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

SelectFridge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectFridge);
