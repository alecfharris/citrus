import React from 'react';
import PropTypes from 'prop-types';
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
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { status, title, quantity, unit, purchaseDate } = this.props;
    const { open } = this.state;
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
                Purchase Date: {purchaseDate}
                <br />
                Expiration Date:
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Update
              </Button>
              <Button onClick={this.handleClose} color="primary">
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
}

FridgeInfo.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  quantity: PropTypes.number,
  status: PropTypes.string,
  purchaseDate: PropTypes.string,
};
