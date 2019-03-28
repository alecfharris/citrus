import React from 'react';
import PropTypes from 'prop-types';
import {
  styles,
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Typography,
  CardContent,
  Button,
} from './RecipeInput.styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff9966' }, // peach
    secondary: { main: '#0097A7' }, // teal
  },
});

// #ff9966
class RecipeInput extends React.Component {
  state = {
    ingredientDivs: [],
    ingredientName: '',
    quantity: '',
    unit: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
    const {
      ingredientDivs,
      ingredientName,
      quantity,
      unit,
      multiline,
      title,
    } = this.state;

    if (ingredientName && quantity && unit !== ``) {
      ingredientDivs.push({
        ingredientName,
        quantity,
        unit,
      });
    }

    let newRecipe = {
      title,
      ingredients: ingredientDivs,
      instructions: multiline,
      // TODO change accountId to real value once possible
      accountId: 't0d0r3m0v3l8rt3st64',
    };

    this.postAPI('recipe-create', newRecipe)
      .then(response => {
        console.log(response.msg);

        const recipe = response.data;

        newRecipe = {
          title: '',
          ingredients: [],
          instructions: '',
          // TODO change accountId to real value once possible
          accountId: 't0d0r3m0v3l8rt3st64',
        };
      })
      .catch(err => console.log('recipe.create API error: ', err));
  };

  onGenNewInput = () => {
    console.log(this.state);
    const { ingredientDivs, ingredientName, quantity, unit } = this.state;
    ingredientDivs.push({
      ingredientName,
      quantity,
      unit,
    });
    this.setState({
      ingredientDivs,
      ingredientName: ``,
      quantity: ``,
      unit: ``,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      ingredientDivs,
      title,
      ingredientName,
      quantity,
      unit,
      multiline,
    } = this.state;

    return (
      <div className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Add a Recipe
          </Typography>
        </CardContent>
        <MuiThemeProvider theme={theme}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Recipe Title"
              className={classes.fullTextField}
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              variant="outlined"
            />
            <div>
              {ingredientDivs.map(currElement => (
                <div>
                  <p>
                    {currElement.ingredientName} {` `} {currElement.quantity}
                    {` `} {currElement.unit}
                  </p>
                </div>
              ))}
            </div>
            <TextField
              label="Ingredient Name"
              className={classes.textField}
              value={ingredientName}
              onChange={this.handleChange('ingredientName')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Quantity"
              className={classes.textField}
              value={quantity}
              onChange={this.handleChange('quantity')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Unit"
              className={classes.textField}
              value={unit}
              onChange={this.handleChange('unit')}
              margin="normal"
              variant="outlined"
            />
            <Button
              color="secondary"
              onClick={() => {
                this.onGenNewInput();
              }}
              variant="contained"
              className={classes.button}
            >
              Add Ingredient
            </Button>
            <TextField
              id="outlined-multiline-flexible"
              label="Instructions"
              multiline
              rows="4"
              value={multiline}
              onChange={this.handleChange('multiline')}
              className={classes.fullTextField}
              margin="normal"
              variant="outlined"
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={() => {
                this.handleCreate();
              }}
            >
              Submit
            </Button>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

RecipeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeInput);
