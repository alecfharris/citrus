import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import FridgeItem from '../FridgeItem/FridgeItem';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItem,
  MuiThemeProvider,
  createMuiTheme,
} from './FridgeInfo.styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff9966' }, // peach
    secondary: { main: '#0097A7' }, // teal
  },
});

export default class FridgeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      updating: false,
      newQuantity: props.quantity,
      newUnit: props.unit,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  toggleUpdating = () => {
    const { updating } = this.state;
    this.setState({ updating: !updating });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { updating, newUnit, newQuantity } = this.state;
    const {
      status,
      title,
      quantity,
      unit,
      purchaseDate,
      id,
      deleteItem,
      updateItem,
    } = this.props;
    const newPurchaseDate = moment(purchaseDate, 'YYYY MM DD, h:mm:ss').format(
      'MM/DD/YYYY'
    );

    const { open } = this.state;
    if (!updating) {
      return (
        <div>
          <ListItem onClick={this.handleClickOpen}>
            <FridgeItem
              status={status}
              title={title}
              quantity={quantity}
              unit={unit}
            />
          </ListItem>
          <MuiThemeProvider theme={theme}>
            <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {quantity} {unit} Remaining
                  <br />
                  Purchase Date: {newPurchaseDate}
                  {/* <br />
                  Expiration Date: */}
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={this.toggleUpdating} color="primary">
                  Update
                </Button>
                <Button
                  onClick={() => {
                    deleteItem(id);
                    this.handleClose();
                  }}
                  color="primary"
                >
                  Remove
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </MuiThemeProvider>
        </div>
      );
    }

    if (updating) {
      return (
        <div>
          <ListItem onClick={this.handleClickOpen}>
            <FridgeItem
              status={status}
              title={title}
              quantity={quantity}
              unit={unit}
            />
          </ListItem>
          <MuiThemeProvider theme={theme}>
            <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    onChange={this.handleChange('newQuantity')}
                  />
                  <input
                    type="text"
                    name="unit"
                    defaultValue={unit}
                    onChange={this.handleChange('newUnit')}
                  />{' '}
                  Remaining
                  <br />
                  Purchase Date: {newPurchaseDate}
                  {/* <br />
                  Expiration Date: */}
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={() => {
                    console.log(newQuantity, newUnit);
                    updateItem(id, newQuantity, newUnit);
                    this.toggleUpdating();
                  }}
                  color="primary"
                >
                  Confirm
                </Button>
                <Button
                  onClick={() => {
                    this.toggleUpdating();
                    this.handleClose();
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

FridgeInfo.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  quantity: PropTypes.number,
  status: PropTypes.string,
  purchaseDate: PropTypes.string,
  id: PropTypes.string,
  deleteItem: PropTypes.func,
  updateItem: PropTypes.func,
};
