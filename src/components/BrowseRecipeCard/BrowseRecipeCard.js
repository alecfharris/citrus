import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API from '../../utils/API';
import {
  styles,
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  ExpandMoreIcon,
  Button,
} from './BrowseRecipeCard.styles';

class BrowseRecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = id => {
    const recipeId = id;
    if (!this.state.instructions) { // eslint-disable-line
      // did we already get info for this card
      // okay let's pull recipe info
      const queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;
      axios
        .get(queryString, {
          headers: {
            'X-RapidAPI-Key':
              'MYPL92HY3cmshOzLkll6ixnLVAVlp1nZQhxjsnf245LFIJlc9D',
          },
        })
        .then(res => {
          const instructions =
            res.data.instructions.length > 500
              ? res.data.instructions.substring(0, 500)
              : res.data.instructions;
          this.setState(() => ({
            instructions,
            estimatedTime: res.data.readyInMinutes,
          }));
        });
    }
    this.setState(state => ({
      expanded: !state.expanded,
    }));
  };

  handleAddToList = recipe => {
    console.log('adding recipe to list ', recipe);
    API.saveAPIRecipe({
      recipe,
      // TODO change accountId to real value once possible
      accountId: 't0d0r3m0v3l8rt3st64',
    });
    /* Use findAll to display all recipes that are saved */
  };

  render() {
    const { recipe, classes } = this.props;
    const {
      title,
      image,
      id,
      usedIngredientCount,
      missedIngredientCount,
    } = recipe;
    const {
      media,
      card,
      expandOpen,
      expand,
      instructionStyle,
      root,
      cardHeader,
    } = classes;
    const { expanded, instructions, estimatedTime } = this.state;

    return (
      <div className={root}>
        <Card className={card}>
          <CardHeader title={title} className={cardHeader} />
          <div>
            <CardMedia className={media} image={image} title={title} />
            <CardActions>
              <Link to={`/recipe/${id}`} style={{ textDecoration: 'none' }}>
                <Button size="small">MAKE NOW</Button>
              </Link>
              <Button
                size="small"
                onClick={() => {
                  this.handleAddToList(recipe);
                }}
              >
                ADD TO LIST
              </Button>
              <IconButton
                className={classnames(expand, {
                  [expandOpen]: expanded,
                })}
                onClick={() => this.handleExpandClick(id)}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <CardHeader
                  title="Additional Information"
                  subheader={`You have ${usedIngredientCount} out of ${usedIngredientCount +
                    missedIngredientCount} ingredients to make this recipe
                  Estimated Time: ${estimatedTime || '?'} minutes`}
                />
                <Typography className={instructionStyle} paragraph>
                  {instructions}
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        </Card>
      </div>
    );
  }
}

BrowseRecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrowseRecipeCard);
