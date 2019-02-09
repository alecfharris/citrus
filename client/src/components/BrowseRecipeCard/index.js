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
import { Link } from 'react-router-dom';
import axios from 'axios';
import API from '../../utils/API';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 8,
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
});

class BrowseRecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleAddToList = id => {
    console.log('adding to list with id, ', id);
    API.saveAPIRecipe({
      recipeId: id,
      // TODO change accountId to real value once possible
      accountId: 't0d0r3m0v3l8rt3st64',
    });
    /* Use findAll to display all recipes that are saved */
  };

  handleMakeNow = id => <Link to={`/recipe/${id}`} />;

  render() {
    const { recipe, classes } = this.props;
    const {
      title,
      image,
      estimatedTime,
      id,
      usedIngredientCount,
      missedIngredientCount,
      instructions,
    } = recipe;
    const { media, card, expandOpen, expand } = classes;
    const { expanded } = this.state;

    return (
      <React.Fragment>
        <Card className={card}>
          <CardHeader
            title={title}
            subheader={`You have ${usedIngredientCount}/${usedIngredientCount +
              missedIngredientCount} ingredients`}
          />
          <CardMedia className={media} image={image} title={title} />
          <CardContent>
            <Typography component="p">
              {`Estimated Time: ${estimatedTime} minutes`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                this.handleMakeNow(id);
              }}
            >
              MAKE NOW
            </Button>
            <Button
              size="small"
              onClick={() => {
                this.handleAddToList(id);
              }}
            >
              ADD TO LIST
            </Button>
            <IconButton
              className={classnames(expand, {
                [expandOpen]: expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{instructions}</Typography>
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
