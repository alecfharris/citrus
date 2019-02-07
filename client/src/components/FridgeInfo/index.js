import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import FridgeItem from '../FridgeItem';

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
    return (
      <div>
        <ListItem onClick={this.handleClickOpen}>
          <FridgeItem
            status={this.props.status}
            title={this.props.title}
            quantity={this.props.quantity}
            unit={this.props.unit}
          />
        </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.quantity} {this.props.unit} Remaining
              <br />
              Purchase Date: {this.props.purchaseDate}
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
