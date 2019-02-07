import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import StyledFridgeEntry from './style.js';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
  },
  container: {
    display: 'flex',
    margin: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    margin: 8,
  },
  title: {
    fontSize: 32,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    margin: 8,
  },
});

// #ff9966
class FridgeEntry extends React.Component {
  state = {
    name: '',
    quantity: '',
    unit: '',
    date: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Add ingredients to your fridge
          </Typography>
        </CardContent>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Ingredient Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-quantity"
            label="Quantity"
            className={classes.textField}
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-unit"
            label="Unit"
            className={classes.textField}
            value={this.state.unit}
            onChange={this.handleChange('unit')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-date"
            label="Date (DD/MM/YYYY)"
            className={classes.textField}
            value={this.state.date}
            onChange={this.handleChange('date')}
            margin="normal"
            variant="outlined"
          />
          <Button size="large" variant="contained" className={classes.button}>
            Add to fridge
          </Button>
        </form>
      </Card>
    );
  }
}

FridgeEntry.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridgeEntry);
