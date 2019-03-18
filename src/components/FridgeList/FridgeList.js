import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Inventory from './FridgeList.temp';
import FridgeInfo from '../FridgeInfo/FridgeInfo';
import { withStyles, List } from './FridgeList.styles';

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
class FridgeList extends React.Component {
  state = {
    promiseIsResolved: false,
  };

  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const { intervalIsSet } = this.state;
    this.handleList();
    if (!intervalIsSet) {
      const interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  handleDelete = id => {
    axios
      .delete(`/.netlify/functions/fridge-remove?id=${id}`)
      .then(res => {
        console.log(this.state);
      })
      .then(this.handleList());
  };

  handleList() {
    axios.get('/.netlify/functions/fridge-read').then(res => {
      this.setState({ inventory: res.data.data });
      this.setState({ promiseIsResolved: true });
      console.log(this.state);
    });
  }

  // Alphabetize inventory by name
  compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  render() {
    // Prevents page from loading until GET request is complete, preventing error
    if (!this.state.promiseIsResolved) {
      // TODO add 'Loading...' component
      return null;
    }
    if (this.state.promiseIsResolved) {
      const { inventory } = this.state;
      console.log(inventory);
      const { classes } = this.props;
      inventory.sort(this.compare);
      return (
        <List disablePadding className={classes.root}>
          {inventory.map(item => (
            <FridgeInfo
              // status={item.status}
              title={item.name}
              quantity={item.quantity}
              unit={item.unit}
              purchaseDate={item.date}
              id={item._id}
              deleteItem={this.handleDelete}
            />
          ))}
        </List>
      );
    }
  }
}

export default withStyles(styles)(FridgeList);
