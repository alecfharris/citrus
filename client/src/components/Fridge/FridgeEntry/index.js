import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import API from '../../../utils/API';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff9966' }, // peach
    secondary: { main: '#0097A7' }, // teal
  },
});

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
  },
  container: {
    display: 'flex',
    margin: 24,
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
    padding: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { intervalIsSet } = this.state;
    this.getFridge();
    if (!intervalIsSet) {
      const interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  getFridge = () => {
    console.log('getFridge');
    API.saveFridge({
      name: 'Avocado',
      quantity: '1',
      unit: 'avocados',
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { name, quantity, unit, date } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Card className={classes.container}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Add Ingredients to Your Fridge
            </Typography>
          </CardContent>
          <form className={classes.card} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Ingredient Name"
              className={classes.textField}
              value={name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-quantity"
              label="Quantity"
              className={classes.textField}
              value={quantity}
              onChange={this.handleChange('quantity')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-unit"
              label="Unit"
              className={classes.textField}
              value={unit}
              onChange={this.handleChange('unit')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-date"
              label="Date (DD/MM/YYYY)"
              className={classes.textField}
              value={date}
              onChange={this.handleChange('date')}
              margin="normal"
              variant="outlined"
            />
            <Button
              size="large"
              variant="contained"
              className={classes.button}
              color="secondary"
            >
              Add to fridge
            </Button>
          </form>
        </Card>
      </MuiThemeProvider>
    );
  }
}

FridgeEntry.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FridgeEntry);
