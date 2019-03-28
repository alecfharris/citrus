import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  Card,
  TextField,
  Typography,
  CardContent,
  Button,
  styles,
} from './FridgeEntry.styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff9966' }, // peach
    secondary: { main: '#0097A7' }, // teal
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

  // CRUD
  postAPI = (source, data) =>
    fetch(`/.netlify/functions/${source}`, {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => err);

  // CRUD Handlers
  handleCreate = () => {
    const { name, quantity, unit, date } = this.state;

    let newFridge = {
      name,
      quantity,
      unit,
      date,
      // TODO change accountId to real value once possible
      accountId: 't0d0r3m0v3l8rt3st64',
    };

    this.postAPI('fridge-create', newFridge)
      .then(response => {
        console.log(response.msg);

        const fridge = response.data;

        newFridge = {
          title: '',
          ingredients: [],
          instructions: '',
          // TODO change accountId to real value once possible
          accountId: 't0d0r3m0v3l8rt3st64',
        };
      })
      .catch(err => console.log('fridge.create API error: ', err));
  };

  getFridge = () => {
    console.log('getFridge');
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { name, quantity, unit, date } = this.state;
    const { classes, unresolvePromise, handleList } = this.props;
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
              label="Date (MM/DD/YYYY)"
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
              onClick={() => {
                this.handleCreate();
                unresolvePromise();
                handleList();
              }}
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
  unresolvePromise: PropTypes.func,
  handleList: PropTypes.func,
};

export default withStyles(styles)(FridgeEntry);
