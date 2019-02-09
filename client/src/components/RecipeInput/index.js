import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
// import StyledRecipeInput from './style.js';

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
    ingredientDivs: [
      {
        name: ``,
        quantity: ``,
      },
    ],
    instructions: ``,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // Database Queries go here
  saveRecipe = props => {
    console.log();
    const ingredientDivs = this.state.ingredientDivs;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
    });
    this.setState({ ingredientDivs }, () => {
      API.saveRecipe({
        title: props.title,
        ingredients: props.ingredients,
        instructions: props.instructions,
        // TODO change accountId to real value once possible
        accountId: 't0d0r3m0v3l8rt3st64',
      });
    });
  };

  onGenNewInput = () => {
    const ingredientDivs = this.state.ingredientDivs;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
    });
    ingredientDivs.push({
      name: ``,
      quantity: ``,
    });
    this.setState({ ingredientDivs });
  };

  handleChange(event) {
    this.setState({ instructions: event.target.value });
  }

  // Database Queries go here
  saveRecipe = props => {
    console.log();
    const ingredientDivs = this.state.ingredientDivs;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
    });
    this.setState({ ingredientDivs }, () => {
      API.saveRecipe({
        title: props.title,
        ingredients: props.ingredients,
        instructions: props.instructions,
        // TODO change accountId to real value once possible
        accountId: 't0d0r3m0v3l8rt3st64',
      });
    });
  };

  onGenNewInput = () => {
    const ingredientDivs = this.state.ingredientDivs;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
    });
    ingredientDivs.push({
      name: ``,
      quantity: ``,
    });
    this.setState({ ingredientDivs });
  };

  handleChange(event) {
    this.setState({ instructions: event.target.value });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

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
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Recipe Title"
            className={classes.fullTextField}
            value={this.state.title}
            onChange={this.handleChange('title')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Ingredient Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('ingredientName')}
            margin="normal"
            variant="outlined"
            // id={`ingredientName${index}`}
          />
          <TextField
            label="Quantity"
            className={classes.textField}
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
            margin="normal"
            variant="outlined"
            // id={`ingredientQuantity${index}`}
          />
          <TextField
            id="outlined-name"
            label="Unit"
            className={classes.textField}
            value={this.state.unit}
            onChange={this.handleChange('unit')}
            margin="normal"
            variant="outlined"
          />
          <Button
            // onClick={() => {
            //   this.onGenNewInput();
            // }}
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
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            className={classes.fullTextField}
            margin="normal"
            variant="outlined"
          />
          <Button size="large" variant="contained" className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

RecipeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeInput);
