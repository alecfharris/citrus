import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { HashRouter as Link } from 'react-router-dom';
import axios from 'axios';
import API from '../../utils/API';

const styles = theme => ({
  card: {
    width: 400,
    margin: 8,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'white',
  },
  titlePadding: {
    paddingBottom: 40,
  },
  noTitlePadding: {
    paddingBottom: 8,
  },
  instructionStyle: {
    padding: 16,
  },
});

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
      accountId: 'twtsjfskjdfnb',
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
      titlePadding,
      noTitlePadding,
      instructionStyle,
    } = classes;
    const { expanded, instructions, estimatedTime } = this.state;

    const padTitle = title.length < 30 ? titlePadding : noTitlePadding;

    return (
      <React.Fragment>
        <Card className={card}>
          <CardHeader title={title} className={padTitle} />
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
        </Card>
      </React.Fragment>
    );
  }
}

BrowseRecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrowseRecipeCard);
