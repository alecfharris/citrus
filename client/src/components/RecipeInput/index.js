import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
// import StyledRecipeInput from './style.js';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff9966' }, // peach
    secondary: { main: '#0097A7' }, // teal
  },
});

const styles = () => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    background: '#FFF',
  },
  container: {
    display: 'flex',
    margin: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fullTextField: {
    margin: 8,
    width: '100%',
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
    width: '90%',
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
  button: {
    justifyContent: 'center',
    display: 'flex',
  },
});

// #ff9966
class RecipeInput extends React.Component {
  state = {
    ingredientDivs: [],
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

    this.postAPI('recipe.create', newRecipe)
      .then(response => {
        console.log(response.msg);

        const recipe = response.data;

        // const { recipes } = [...this.state];

        // const { inputs } = [...this.state];

        newRecipe = {
          title: '',
          ingredients: [],
          instructions: '',
          // TODO change accountId to real value once possible
          accountId: 't0d0r3m0v3l8rt3st64',
        };

        // const recipeProps = this.setRecipeProps(recipe);

        // inputs.push(recipeProps);
        // recipes.push(recipe);

        //   this.setState({
        //     recipes,
        //     inputs,
        //     newRecipe,
        //   });
      })
      .catch(err => console.log('recipe.create API error: ', err));
  };

  // Database Queries go here
  saveRecipe = () => {
    console.log();
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
    API.saveRecipe({
      title,
      ingredients: ingredientDivs,
      instructions: multiline,
      // TODO change accountId to real value once possible
      accountId: 't0d0r3m0v3l8rt3st64',
    });
  };

  onGenNewInput = () => {
    const { ingredientDivs, ingredientName, quantity, unit } = this.state;
    /* TODO push existing states to array, and then map through the array to create a text list of ingredients above the 
   boxes, then empty the boxes */
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
              // id={`ingredientName${index}`}
            />
            <TextField
              label="Quantity"
              className={classes.textField}
              value={quantity}
              onChange={this.handleChange('quantity')}
              margin="normal"
              variant="outlined"
              // id={`ingredientQuantity${index}`}
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
